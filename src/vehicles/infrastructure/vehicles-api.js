import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const vehiclesEndpointPath     = import.meta.env.VITE_INVENTORY_ENDPOINT_PATH;

/**
 * Infrastructure gateway for Vehicles bounded-context endpoints.
 *
 * @class VehiclesApi
 * @extends BaseApi
 */
export class VehiclesApi extends BaseApi {
    /**
     * @type {BaseEndpoint}
     * @private
     */
    #vehiclesEndpoint;


    /** Creates endpoint clients for vehicles. */
    constructor() {
        super();
        this.#vehiclesEndpoint = new BaseEndpoint(this, vehiclesEndpointPath);
    }

    /**
     * Fetches all ve.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the vehicles' response.
     */
    getVehicles() {
        return this.#vehiclesEndpoint.getAll();
    }

    /**
     * Fetches a vehicle by its ID.
     * @param {number|string} id - The ID of the vehicle.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the vehicle response.
     */
    getVehicleById(id) {
        return this.#vehiclesEndpoint.getById(id);
    }

    /**
     * Creates a vehicle resource.
     * @param {Object} resource - vehicle resource payload.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the created vehicle response.
     */
    createVehicle(resource) {
        return this.#vehiclesEndpoint.create(resource);
    }
}