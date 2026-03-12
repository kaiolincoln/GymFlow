import { Router } from 'express'
import { rateLimit } from 'express-rate-limit'

// Middlewares
import { Authenticated } from './middlewares/Authenticated'
import { isPersonal} from './middlewares/isPersonal'
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

import { DashboardMetricsController } from './controllers/Dashboard/DashBoardMetricsController'

export const routes = Router()

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Muitas tentativas de login. Tente novamente em 15 minutos.' },
})


// ─── Públicas ───────────────────────────────────────────────
routes.post('/users', new CreateUserController().handle)  // cadastro de usuário 
routes.post('/session', loginLimiter, new SessionController().handle)  // login

// ─── Autenticadas ───────────────────────────────────────────
routes.use(Authenticated)

// Auth / Perfil
routes.get('/me', new MeController().handle)  // ver dados do perfil
routes.put('/me', new UpdateProfileController().handle) // atualizar nome/email do perfil
routes.patch('/me/password', new ChangePasswordController().handle) // alterar senha do perfil

// Dashboard
routes.get('/dashboard/metrics', new DashboardMetricsController().handle)   

// Alunos
routes.post('/students', new CreateStudentController().handle) // casdastro de aluno
routes.get('/students', new ListStudentsController().handle)  // listagem de alunos
routes.get('/students/overdue', new ListOverdueStudentsController().handle)  // listagem de alunos com mensalidade atrasada
routes.get('/students/:id', new GetStudentController().handle)  // detalhes de um aluno
routes.put('/students/:id', new UpdateStudentController().handle)  // atualização de dados do aluno
routes.delete('/students/:id', isAdmin, new DeleteStudentController().handle)  // exclusão de aluno (apenas admin)

// Pagamentos
routes.post('/students/:id/payments', new CreatePaymentController().handle)  // criação de pagamento para um aluno
routes.get('/students/:id/payments', new ListPaymentsByStudentController().handle)  // listagem de pagamentos de um aluno
routes.patch('/payments/:id/status', new UpdatePaymentStatusController().handle)  // atualização do status de um pagamento
routes.get('/payments/upcoming', new ListUpcomingPaymentsController().handle)  // listagem de pagamentos com vencimento nos próximos 7 dias
routes.get('/payments', new ListAllPaymentsController().handle) // lista todos os pagamentos

// Fichas de Treino
routes.post('/students/:id/workout-plans', new CreateWorkoutPlanController().handle)  // criação de ficha de treino para um aluno
routes.get('/students/:id/workout-plans', new ListWorkoutPlansByStudentController().handle)  // listagem de fichas de treino de um aluno
routes.get('/workout-plans/:id', new GetWorkoutPlanController().handle)  // detalhes de uma ficha de treino
routes.put('/workout-plans/:id', new UpdateWorkoutPlanController().handle)  // atualização de dados de uma ficha de treino
routes.delete('/workout-plans/:id', new DeleteWorkoutPlanController().handle)  // exclusão de ficha de treino
routes.patch('/workout-plans/:id/activate', new ActivateWorkoutPlanController().handle)  // ativação de uma ficha de treino (define como ativa e desativa as outras do mesmo aluno)

// Exercícios (banco)
routes.post('/exercises', isAdmin, new CreateExerciseController().handle)  // criação de exercício (apenas admin)
routes.get('/exercises', new ListExercisesController().handle)  // listagem de exercícios
routes.put('/exercises/:id', isAdmin, new UpdateExerciseController().handle)  // atualização de dados de um exercício (apenas admin)
routes.delete('/exercises/:id', isAdmin, new DeleteExerciseController().handle)  // exclusão de exercício (apenas admin)