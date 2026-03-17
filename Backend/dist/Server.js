"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const App_1 = require("./App");
const PORT = process.env.PORT || 3333;
App_1.app.listen(PORT, () => {
    console.log(`🏋️  GymFlow API rodando na porta ${PORT}`);
});
//# sourceMappingURL=Server.js.map