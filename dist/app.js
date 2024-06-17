"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const libroRoute_1 = __importDefault(require("./routes/libroRoute"));
const ejemplarRoute_1 = __importDefault(require("./routes/ejemplarRoute"));
const autorRoute_1 = __importDefault(require("./routes/autorRoute"));
const usuarioRoute_1 = __importDefault(require("./routes/usuarioRoute"));
const app = (0, express_1.default)();
// Middleware para analizar JSON en las solicitudes POST y PUT
app.use(express_1.default.json());
// Rutas
app.use('/api/v1/libros', libroRoute_1.default);
app.use('/api/v1/ejemplares', ejemplarRoute_1.default);
app.use('/api/v1/autores', autorRoute_1.default);
app.use('/api/v1/usuarios', usuarioRoute_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map