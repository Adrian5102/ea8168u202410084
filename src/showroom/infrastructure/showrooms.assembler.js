import {Showroom} from "../domain/model/showrooms.entity.js";

export class ShowroomAssembler {
    /**
     * @param {Object} resource - Showroom resource payload.
     * @returns {Showroom} Showroom entity.
     */
    static toEntityFromResource(resource) {
        return new Showroom({...resource})
    }

    /**
     * Parses tutorial resources from a response and maps them into entities.
     *
     * @param {import('axios').AxiosResponse<Array<Object>|Object>} response - HTTP response with vehicle resources.
     * @returns {Showroom[]} Showroom entities.
     */
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['showrooms'];

        return resources.map(resource => this.toEntityFromResource(resource));
    }
}