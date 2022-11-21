import { Schema, Types } from "mongoose";

const appointmentSchema = new Schema({
    appointmentDate: { type: Date, required: true},
    jobOrders: [String],
    statusCompleted: { type: Boolean, default: false },
    registrationNumber: { type: String, required: true },
    carId: { type: Types.ObjectId, required: true },
})

export default appointmentSchema;