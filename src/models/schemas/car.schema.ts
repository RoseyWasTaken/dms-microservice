import { Schema } from 'mongoose'

const carSchema = new Schema({
  vin: { type: String, required: true, unique: true }
})

export default carSchema
