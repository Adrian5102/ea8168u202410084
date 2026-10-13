import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const showroomsEndpointPath     = import.meta.env.VITE_SHOWROOM_ENDPOINT_PATH;

/**
 * Infrastructure gateway for Showroom bounded-context endpoints.
 *
 * @class ShowroomApi
 * @extends BaseApi
 */
export class ShowroomApi extends BaseApi {
    /**
     * @type {BaseEndpoint}
     * @private
     */
    #showroomEndpoint;


    /** Creates endpoint clients for showroom. */
    constructor() {
        super();
        this.#showroomEndpoint = new BaseEndpoint(this, showroomsEndpointPath);
    }

    /**
     * Fetches all showroom.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the showroom response.
     */
    getShowroom() {
        return this.#showroomEndpoint.getAll();
    }

    /**
     * Fetches a showroom by its ID.
     * @param {number|string} id - The ID of the showroom.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the showroom response.
     */
    getShowroomById(id) {
        return this.#showroomEndpoint.getById(id);
    }
}