import { Router } from 'express'
import { rateLimit } from 'express-rate-limit'

// Middlewares
import { Authenticated } from './middlewares/Authenticated'
import { isAdmin } from './middlewares/isAdmin'

// Controllers - Auth
import { ChangePasswordController } from './controllers/Auth/ChangePasswordController'
import { UpdateProfileController } from './controllers/Auth/UpdateProfileController'
import { CreateUserController } from './controllers/Auth/CreateUserController'
import { SessionController } from './controllers/Auth/SessionController'
import { MeController } from './controllers/Auth/MeController'

// Controllers - Students
import { ListOverdueStudentsController } from './controllers/Students/ListOverdueStudentsController'
import { CreateStudentController } from './controllers/Students/CreateStudentController'
import { DeleteStudentController } from './controllers/Students/DeleteStudentController'
import { UpdateStudentController } from './controllers/Students/UpdateStudentController'
import { ListStudentsController } from './controllers/Students/ListStudentsController'
import { GetStudentController } from './controllers/Students/GetStudentController'

// Controllers - Payments
import { ListPaymentsByStudentController } from './controllers/Payments/ListPaymentsByStudentController'
import { ListUpcomingPaymentsController } from './controllers/Payments/ListUpcomingPaymentsController'
import { UpdatePaymentStatusController } from './controllers/Payments/UpdatePaymentStatusController'
import { ListAllPaymentsController } from './controllers/Payments/ListAllPaymentsController'
import { CreatePaymentController } from './controllers/Payments/CreatePaymentController'

// Controllers - WorkoutPlans
import { ListWorkoutPlansByStudentController } from './controllers/WorkoutPlans/ListWorkoutPlansbyStudentController'
import { ActivateWorkoutPlanController } from './controllers/WorkoutPlans/ActivateWorkoutPlanController'
import { CreateWorkoutPlanController } from './controllers/WorkoutPlans/CreateWorkoutPlanController'
import { UpdateWorkoutPlanController } from './controllers/WorkoutPlans/UpdateWorkoutPlanController'
import { DeleteWorkoutPlanController } from './controllers/WorkoutPlans/DeleteWorkoutPlanController'
import { GetWorkoutPlanController } from './controllers/WorkoutPlans/GetWorkoutPlanController'

// Controllers - Exercises
import { CreateExerciseController } from './controllers/Exercises/CreateExerciseController'
import { UpdateExerciseController } from './controllers/Exercises/UpdateExerciseController'
import { DeleteExerciseController } from './controllers/Exercises/DeleteExerciseController'
import { ListExercisesController } from './controllers/Exercises/ListExercisesController'

// Controllers - BodyRecords
import { CreateBodyRecordController } from './controllers/BodyRecords/CreateBodyRecordController'
import { ListBodyRecordsController } from './controllers/BodyRecords/ListBodyRecordsController'

// Controller - Chat
import { WorkoutTemplateController } from './controllers/WorkoutTemplates/WorkoutTemplateController'
import { ChatController } from './controllers/Chat/ChatController'

import { DashboardMetricsController } from './controllers/Dashboard/DashBoardMetricsController'

export const routes = Router()

const chatController = new ChatController()
const templateController = new WorkoutTemplateController()
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Muitas tentativas de login. Tente novamente em 15 minutos.' },
})


// ─── Públicas ───────────────────────────────────────────────
routes.post('/users', new CreateUserController().handle)  // Cadastro de usuário 
routes.post('/session', loginLimiter, new SessionController().handle)  // Login

// ─── Autenticadas ───────────────────────────────────────────
routes.use(Authenticated)

// Auth / Perfil
routes.get('/me', new MeController().handle)  // Ver dados do perfil
routes.put('/me', new UpdateProfileController().handle) // Atualizar nome/email do perfil
routes.patch('/me/password', new ChangePasswordController().handle) // Alterar senha do perfil

// Dashboard
routes.get('/dashboard/metrics', new DashboardMetricsController().handle)   

// Alunos
routes.post('/students', new CreateStudentController().handle) // Casdastro de aluno
routes.get('/students', new ListStudentsController().handle)  // Listagem de alunos
routes.get('/students/overdue', new ListOverdueStudentsController().handle)  // Listagem de alunos com mensalidade atrasada
routes.get('/students/:id', new GetStudentController().handle)  // Detalhes de um aluno
routes.put('/students/:id', new UpdateStudentController().handle)  // Atualização de dados do aluno
routes.delete('/students/:id', isAdmin, new DeleteStudentController().handle)  // Exclusão de aluno (apenas admin)

// Pagamentos
routes.post('/students/:id/payments', new CreatePaymentController().handle)  // Criação de pagamento para um aluno
routes.get('/students/:id/payments', new ListPaymentsByStudentController().handle)  // Listagem de pagamentos de um aluno
routes.patch('/payments/:id/status', new UpdatePaymentStatusController().handle)  // Atualização do status de um pagamento
routes.get('/payments/upcoming', new ListUpcomingPaymentsController().handle)  // Listagem de pagamentos com vencimento nos próximos 7 dias
routes.get('/payments', new ListAllPaymentsController().handle) // Lista todos os pagamentos

// Fichas de Treino
routes.post('/students/:id/workout-plans', new CreateWorkoutPlanController().handle)  // Criação de ficha de treino para um aluno
routes.get('/students/:id/workout-plans', new ListWorkoutPlansByStudentController().handle)  // Listagem de fichas de treino de um aluno
routes.get('/workout-plans/:id', new GetWorkoutPlanController().handle)  // Detalhes de uma ficha de treino
routes.put('/workout-plans/:id', new UpdateWorkoutPlanController().handle)  // Atualização de dados de uma ficha de treino
routes.delete('/workout-plans/:id', new DeleteWorkoutPlanController().handle)  // Exclusão de ficha de treino
routes.patch('/workout-plans/:id/activate', new ActivateWorkoutPlanController().handle)  // Ativação de uma ficha de treino (define como ativa e desativa as outras do mesmo aluno)

// Exercícios (banco)
routes.post('/exercises', isAdmin, new CreateExerciseController().handle)  // Criação de exercício (apenas admin)
routes.get('/exercises', new ListExercisesController().handle)  // Listagem de exercícios
routes.put('/exercises/:id', isAdmin, new UpdateExerciseController().handle)  // Atualização de dados de um exercício (apenas admin)
routes.delete('/exercises/:id', isAdmin, new DeleteExerciseController().handle)  // Exclusão de exercício (apenas admin)

// Bory records
routes.post('/students/:id/body-records', new CreateBodyRecordController().handle)  // Criar evolucao corporal
routes.get('/students/:id/body-records', new ListBodyRecordsController().handle) // Lista evolucao corporal

// Chat (Personal ↔ Aluno por sala = studentId)
routes.get('/chat/:studentId/stream', (req, res) => chatController.stream(req, res))   
routes.post('/chat/:studentId/messages', (req, res) => chatController.sendMessage(req, res))
routes.get('/chat/:studentId/messages', (req, res) => chatController.getMessages(req, res))
 
// Templates de Fichas
routes.get('/workout-templates', (req, res) => templateController.list(req, res))
routes.post('/workout-templates', (req, res) => templateController.create(req, res))
routes.post('/workout-templates/from-plan/:planId', (req, res) => templateController.createFromPlan(req, res))
routes.get('/workout-templates/:id', (req, res) => templateController.get(req, res))
routes.delete('/workout-templates/:id', (req, res) => templateController.delete(req, res))