"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const name_controller_1 = require("../controllers/name.controller");
const router = express_1.default.Router();
router.put('/nombre', name_controller_1.Prueba);
router.get('/stock', name_controller_1.Stock);
exports.default = router;
