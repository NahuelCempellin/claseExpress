"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const name_controller_1 = require("./controllers/name.controller");
const controller_routes_1 = __importDefault(require("./routes/controller.routes"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(controller_routes_1.default);
app.get('/', name_controller_1.Puerto);
exports.default = app;
