import { Types } from "mongoose";

interface IClient {
    firstName?: string;
    lastName?: string;
    isCompany: boolean;
    taxNumber?: number;
    phone: number;
    carId: Types.ObjectId;
}

export default IClient;