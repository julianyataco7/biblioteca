"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ejemplarController_1 = require("../controller/ejemplarController");
const router = express_1.default.Router();
router.post('/', ejemplarController_1.insertarEjemplar);
router.get('/', ejemplarController_1.listarEjemplares);
router.get('/:id', ejemplarController_1.obtenerEjemplar);
router.put('/:id', ejemplarController_1.modificarEjemplar);
router.patch('/:id', ejemplarController_1.eliminarEjemplar);
exports.default = router;
//# sourceMappingURL=ejemplarRoute.js.map