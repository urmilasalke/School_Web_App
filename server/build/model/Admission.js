"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const optionSchema = new mongoose_1.Schema({
    grade: { type: String, required: true },
    fees: { type: Number, required: true },
    seats: { type: Number }
});
const gradeSchema = new mongoose_1.Schema({
    category: { type: String, required: true },
    options: [optionSchema]
});
module.exports = (0, mongoose_1.model)("admission", gradeSchema);
