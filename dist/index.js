"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const magicvodroutes_1 = __importDefault(require("./api/magicvodroutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use((0, cors_1.default)());
app.use("/api/magica", magicvodroutes_1.default);
app.get("/", (req, res) => {
    res.send("Do not use this");
});
app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
});
