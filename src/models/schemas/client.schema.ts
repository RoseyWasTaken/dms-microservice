import { Schema, Types } from "mongoose";

const clientSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    isCompany: { type: Boolean, default: false },
    taxNumber: { type: Number },
    phone: { type: Number, required: true },
    carId: { type: Types.ObjectId },
})

export default clientSchema