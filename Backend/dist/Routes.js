"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const express_rate_limit_1 = require("express-rate-limit");
// Middlewares
const Authenticated_1 = require("./middlewares/Authenticated");
const isAdmin_1 = require("./middlewares/isAdmin");
// Controllers - Auth
const ChangePasswordController_1 = require("./controllers/Auth/ChangePasswordController");
const UpdateProfileController_1 = require("./controllers/Auth/UpdateProfileController");
const CreateUserController_1 = require("./controllers/Auth/CreateUserController");
const SessionController_1 = require("./controllers/Auth/SessionController");
const MeController_1 = require("./controllers/Auth/MeController");
// Controllers - Students
const ListOverdueStudentsController_1 = require("./controllers/Students/ListOverdueStudentsController");
const CreateStudentController_1 = require("./controllers/Students/CreateStudentController");
const DeleteStudentController_1 = require("./controllers/Students/DeleteStudentController");
const UpdateStudentController_1 = require("./controllers/Students/UpdateStudentController");
const ListStudentsController_1 = require("./controllers/Students/ListStudentsController");
const GetStudentController_1 = require("./controllers/Students/GetStudentController");
// Controllers - Payments
const ListPaymentsByStudentController_1 = require("./controllers/Payments/ListPaymentsByStudentController");
const ListUpcomingPaymentsController_1 = require("./controllers/Payments/ListUpcomingPaymentsController");
const UpdatePaymentStatusController_1 = require("./controllers/Payments/UpdatePaymentStatusController");
const ListAllPaymentsController_1 = require("./controllers/Payments/ListAllPaymentsController");
const CreatePaymentController_1 = require("./controllers/Payments/CreatePaymentController");
// Controllers - WorkoutPlans
const ListWorkoutPlansbyStudentController_1 = require("./controllers/WorkoutPlans/ListWorkoutPlansbyStudentController");
const ActivateWorkoutPlanController_1 = require("./controllers/WorkoutPlans/ActivateWorkoutPlanController");
const CreateWorkoutPlanController_1 = require("./controllers/WorkoutPlans/CreateWorkoutPlanController");
const UpdateWorkoutPlanController_1 = require("./controllers/WorkoutPlans/UpdateWorkoutPlanController");
const DeleteWorkoutPlanController_1 = require("./controllers/WorkoutPlans/DeleteWorkoutPlanController");
const GetWorkoutPlanController_1 = require("./controllers/WorkoutPlans/GetWorkoutPlanController");
// Controllers - Exercises
const CreateExerciseController_1 = require("./controllers/Exercises/CreateExerciseController");
const UpdateExerciseController_1 = require("./controllers/Exercises/UpdateExerciseController");
const DeleteExerciseController_1 = require("./controllers/Exercises/DeleteExerciseController");
const ListExercisesController_1 = require("./controllers/Exercises/ListExercisesController");
// Controllers - BodyRecords
const CreateBodyRecordController_1 = require("./controllers/BodyRecords/CreateBodyRecordController");
const ListBodyRecordsController_1 = require("./controllers/BodyRecords/ListBodyRecordsController");
// Controller - Chat
const WorkoutTemplateController_1 = require("./controllers/WorkoutTemplates/WorkoutTemplateController");
const ChatController_1 = require("./controllers/Chat/ChatController");
const DashBoardMetricsController_1 = require("./controllers/Dashboard/DashBoardMetricsController");
exports.routes = (0, express_1.Router)();
const chatController = new ChatController_1.ChatController();
const templateController = new WorkoutTemplateController_1.WorkoutTemplateController();
const loginLimiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Muitas tentativas de login. Tente novamente em 15 minutos.' },
});
// ─── Públicas ───────────────────────────────────────────────
exports.routes.post('/users', new CreateUserController_1.CreateUserController().handle); // cadastro de usuário 
exports.routes.post('/session', loginLimiter, new SessionController_1.SessionController().handle); // login
// ─── Autenticadas ───────────────────────────────────────────
exports.routes.use(Authenticated_1.Authenticated);
// Auth / Perfil
exports.routes.get('/me', new MeController_1.MeController().handle); // ver dados do perfil
exports.routes.put('/me', new UpdateProfileController_1.UpdateProfileController().handle); // atualizar nome/email do perfil
exports.routes.patch('/me/password', new ChangePasswordController_1.ChangePasswordController().handle); // alterar senha do perfil
// Dashboard
exports.routes.get('/dashboard/metrics', new DashBoardMetricsController_1.DashboardMetricsController().handle);
// Alunos
exports.routes.post('/students', new CreateStudentController_1.CreateStudentController().handle); // casdastro de aluno
exports.routes.get('/students', new ListStudentsController_1.ListStudentsController().handle); // listagem de alunos
exports.routes.get('/students/overdue', new ListOverdueStudentsController_1.ListOverdueStudentsController().handle); // listagem de alunos com mensalidade atrasada
exports.routes.get('/students/:id', new GetStudentController_1.GetStudentController().handle); // detalhes de um aluno
exports.routes.put('/students/:id', new UpdateStudentController_1.UpdateStudentController().handle); // atualização de dados do aluno
exports.routes.delete('/students/:id', isAdmin_1.isAdmin, new DeleteStudentController_1.DeleteStudentController().handle); // exclusão de aluno (apenas admin)
// Pagamentos
exports.routes.post('/students/:id/payments', new CreatePaymentController_1.CreatePaymentController().handle); // criação de pagamento para um aluno
exports.routes.get('/students/:id/payments', new ListPaymentsByStudentController_1.ListPaymentsByStudentController().handle); // listagem de pagamentos de um aluno
exports.routes.patch('/payments/:id/status', new UpdatePaymentStatusController_1.UpdatePaymentStatusController().handle); // atualização do status de um pagamento
exports.routes.get('/payments/upcoming', new ListUpcomingPaymentsController_1.ListUpcomingPaymentsController().handle); // listagem de pagamentos com vencimento nos próximos 7 dias
exports.routes.get('/payments', new ListAllPaymentsController_1.ListAllPaymentsController().handle); // lista todos os pagamentos
// Fichas de Treino
exports.routes.post('/students/:id/workout-plans', new CreateWorkoutPlanController_1.CreateWorkoutPlanController().handle); // criação de ficha de treino para um aluno
exports.routes.get('/students/:id/workout-plans', new ListWorkoutPlansbyStudentController_1.ListWorkoutPlansByStudentController().handle); // listagem de fichas de treino de um aluno
exports.routes.get('/workout-plans/:id', new GetWorkoutPlanController_1.GetWorkoutPlanController().handle); // detalhes de uma ficha de treino
exports.routes.put('/workout-plans/:id', new UpdateWorkoutPlanController_1.UpdateWorkoutPlanController().handle); // atualização de dados de uma ficha de treino
exports.routes.delete('/workout-plans/:id', new DeleteWorkoutPlanController_1.DeleteWorkoutPlanController().handle); // exclusão de ficha de treino
exports.routes.patch('/workout-plans/:id/activate', new ActivateWorkoutPlanController_1.ActivateWorkoutPlanController().handle); // ativação de uma ficha de treino (define como ativa e desativa as outras do mesmo aluno)
// Exercícios (banco)
exports.routes.post('/exercises', isAdmin_1.isAdmin, new CreateExerciseController_1.CreateExerciseController().handle); // criação de exercício (apenas admin)
exports.routes.get('/exercises', new ListExercisesController_1.ListExercisesController().handle); // listagem de exercícios
exports.routes.put('/exercises/:id', isAdmin_1.isAdmin, new UpdateExerciseController_1.UpdateExerciseController().handle); // atualização de dados de um exercício (apenas admin)
exports.routes.delete('/exercises/:id', isAdmin_1.isAdmin, new DeleteExerciseController_1.DeleteExerciseController().handle); // exclusão de exercício (apenas admin)
// Bory records
exports.routes.post('/students/:id/body-records', new CreateBodyRecordController_1.CreateBodyRecordController().handle);
exports.routes.get('/students/:id/body-records', new ListBodyRecordsController_1.ListBodyRecordsController().handle);
// Chat (Personal ↔ Aluno por sala = studentId)
exports.routes.get('/chat/:studentId/stream', (req, res) => chatController.stream(req, res));
exports.routes.post('/chat/:studentId/messages', (req, res) => chatController.sendMessage(req, res));
exports.routes.get('/chat/:studentId/messages', (req, res) => chatController.getMessages(req, res));
// Templates de Fichas
exports.routes.get('/workout-templates', (req, res) => templateController.list(req, res));
exports.routes.post('/workout-templates', (req, res) => templateController.create(req, res));
exports.routes.post('/workout-templates/from-plan/:planId', (req, res) => templateController.createFromPlan(req, res));
exports.routes.get('/workout-templates/:id', (req, res) => templateController.get(req, res));
exports.routes.delete('/workout-templates/:id', (req, res) => templateController.delete(req, res));
//# sourceMappingURL=Routes.js.map