/**
 * Showroom entity within the vehicles bounded context.
 *
 * @class Showroom
 */
export class Showroom {
    constructor({ id = '', name = '', vehicleCategory = '', maxCapacity = ''}) {
        this.id = id;
        this.name = name;
        this.vehicleCategory = vehicleCategory;
        this.maxCapacity = maxCapacity;
    }
}