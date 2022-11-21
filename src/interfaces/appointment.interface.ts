import { Types } from "mongoose";

interface IAppointment {
    appointmentDate: Date;
    jobOrders: string[];
    statusCompleted: boolean;
    registrationNumber: string;
    carId: Types.ObjectId;
}

export default IAppointment;