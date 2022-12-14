import { Schema } from 'mongoose'

const carSchema = new Schema({
  vin: { type: String, required: true, unique: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  color: { type: String, required: true },
  year: { type: Number, required: true }
})

export default carSchema
