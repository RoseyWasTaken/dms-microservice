import { Car } from "../models/models";



// public method() does not work, not sure what's the difference between public and static methods
class CarService {
    constructor(){

    }
    static createCar = async (carDTO) => {
        return Car.create(carDTO);
    }

    static getCarByID = async (carId) => {
        return Car.findById(carId);

    }
    static getCarByVin = async (vin) => {
        return Car.findOne({ vin });
    }
    
    static getCarByRegistrationNumber = async (registrationNumber) => {
        return Car.findOne({ registrationNumber });
    }
    
    static getCarsByMake = async (make) => {
        return Car.find({ make })
    }

    static updateCarRegistrationNumber = async (newRegistrationNumber, oldRegistrationNumber) => {
        const car = await this.getCarByRegistrationNumber(oldRegistrationNumber);
        const registrationNumberExists = await this.getCarByRegistrationNumber(newRegistrationNumber);
        if (!car) {
            throw new Error(`Car with registration number ${oldRegistrationNumber} registration number not found.`);
        }
        if (!registrationNumberExists) {
            throw new Error(`Car with registration number ${newRegistrationNumber} already exists.`);
        }
        Object.assign(car, newRegistrationNumber) // car is a mongoose document object containing registrationNumber: "oldReg", newReg is an object containing registrationNumber: "newReg", the returned object is an upsorted mongoose object with "newReg" 
        await car.save();
        return car;
    }

    static updateClientId = async (clientId, carId) => {
        const car = await this.getCarByID(carId);
        if (!car) {
            throw new Error(`Car with ID: ${carId} not found.`)
        }
        Object.assign(car, clientId);
        await car.save();
        return car;
    }
}

export default CarService