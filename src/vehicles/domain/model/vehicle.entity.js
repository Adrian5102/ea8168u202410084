import {DateTime} from "../../../shared/domain/model/date-time.js";

/**
 * Vehicle entity within the vehicles bounded context.
 *
 * @class Vehicle
 */
export class Vehicle {
    constructor({ id = '', sectionId = '', vehicleCategoryId = '', vehicleId = '', vehicleName = '', quantity = '', registeredAt = ''}) {

        let dateTime;
        try {
            dateTime = registeredAt instanceof DateTime ? registeredAt : new DateTime(registeredAt);
        } catch (e) {
            throw new Error('  registeredAt must be a valid date');
        }

        this.id = id;
        this.sectionId = sectionId;
        this.vehicleCategoryId = vehicleCategoryId;
        this.vehicleId = vehicleId;
        this.vehicleName = vehicleName;
        this.quantity = quantity;
        this.registeredAt = dateTime;
    }

}