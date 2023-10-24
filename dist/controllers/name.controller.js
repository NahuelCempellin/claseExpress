"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = exports.Prueba = exports.Puerto = void 0;
const objeto = {
    nombre: "Maxi",
    edad: 29,
    mascota: "No tengo.",
    id: 1234
};
const stock = [
    {
        item: "",
        cantidad: 1,
    },
    {
        item: "",
        cantidad: 2,
    }
];
const Puerto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send(`El puerto esta en el puerto 3000`);
});
exports.Puerto = Puerto;
const Prueba = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.query;
    const { edad } = req.body;
    try {
        if (objeto.nombre === nombre) {
            res.status(200).send({ message: "El usuario existe.", objeto });
        }
        else {
            res.status(400).send({ message: "El usuario no tiene mascota." });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.Prueba = Prueba;
const Stock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cantidad } = req.query;
    console.log(cantidad);
    const numero = Number(cantidad);
    try {
        const items = stock.filter((el) => el.cantidad === numero);
        if (items.length >= 0) {
            res.send(items);
        }
        else {
            res.status(404).send('Item no tiene stock');
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.Stock = Stock;
