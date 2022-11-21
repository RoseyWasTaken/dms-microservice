import mongoose from 'mongoose';
import carSchema from './schemas/car.schema'
import appointmentSchema from './schemas/appointment.schema';
import clientSchema from './schemas/client.schema';
import ICar from '../interfaces/car.Interface';
import IAppointment from '../interfaces/appointment.interface';
import IClient from '../interfaces/client.interface';

const Car = mongoose.model<ICar>("Car", carSchema);
const Appointment = mongoose.model<IAppointment>("Appointment", appointmentSchema);
const Client = mongoose.model<IClient>("Client", clientSchema);

export { Car, Appointment, Client }