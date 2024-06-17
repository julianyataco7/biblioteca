"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorController_1 = require("../controller/autorController");
const router = express_1.default.Router();
router.post('/', autorController_1.insertarAutor);
router.get('/', autorController_1.listarAutores);
router.get('/:id', autorController_1.obtenerAutor);
router.put('/:id', autorController_1.modificarAutor);
router.patch('/:id', autorController_1.eliminarAutor);
exports.default = router;
//# sourceMappingURL=autorRoute.js.map