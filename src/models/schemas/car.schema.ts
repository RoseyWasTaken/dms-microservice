import { Schema, Types } from "mongoose";

const carSchema = new Schema ({
    vin: { type: String, required: true, unique: true },
    registrationNumber: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    visitId: { type: Types.ObjectId, unique: true }, // Only one car per visit
    clientId: { type: Types.ObjectId, require: true }, // One owner can have multiple cars
    // Making clientId a required information creates a potential issue with a CRM system along the way.
    // If we're sending out emails to a client and he informs us that the car has been sold
    // We won't be able to have the car on record without a client
})

export default carSchema 