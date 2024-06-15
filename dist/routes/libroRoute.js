"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const libroController_1 = require("../controller/libroController");
const router = express_1.default.Router();
router.post('/', libroController_1.insertarLibro);
router.get('/', libroController_1.listarLibros);
router.get('/:id', libroController_1.obtenerLibro);
router.put('/:id', libroController_1.modificarLibro);
router.patch('/:id', libroController_1.eliminarLibro);
exports.default = router;
//# sourceMappingURL=libroRoute.js.map