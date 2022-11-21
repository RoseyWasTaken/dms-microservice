import { Types } from "mongoose";

interface ICar {
    _id?: Types.ObjectId;
    vin: string;
    registrationNumber: string;
    make: string;
    model: string;
    year: number;
    visitId?: Types.ObjectId;
    clientId?: Types.ObjectId; // I assume that the flow for this will be first creating the client and then a car they own
}

export default ICar;