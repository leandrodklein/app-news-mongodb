"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const NewsRouter_1 = __importDefault(require("./routes/NewsRouter"));
const app = (0, express_1.default)();
// Config JSON response
app.use(express_1.default.json());
// Solve CORS
app.use((0, cors_1.default)({ credentials: true, origin: 'http://localhost:3000' }));
// Public folder for images
app.use(express_1.default.static('public'));
// Routes
app.use('/news', NewsRouter_1.default);
app.listen(8080, () => {
    console.log('Servidor está em execução na porta 8080');
});
