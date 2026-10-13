import {reactive} from "vue";
import {Showroom} from "../domain/model/showrooms.entity.js";
import {ShowroomApi} from "../infrastructure/showroom-api.js";
import {ShowroomAssembler} from "../infrastructure/showrooms.assembler.js";

const showroomApi = new ShowroomApi();
const showroomAssembler = new ShowroomAssembler();

/**
 * Reactive application store that coordinates use cases for news management.
 *
 * @remarks
 * In DDD, this serves as an Application Service, managing the interaction
 * between UI components and infrastructure-driven data acquisition.
 *
 * @type {ShowroomStore}
 */
export const ShowroomStore = reactive({
    showrooms: [],
    vehicles: [],
    errors: [],
    currentShowroom: null,
    /**
     * Sets the active showrooms and triggers article retrieval.
     *
     * @param {Source} showrooms
     * @returns {void}
     */
    setCurrentShowroom(showrooms) {
        this.currentShowroom = showrooms;
    },
    /**
     * Loads the showrooms list and selects the first showrooms.
     *
     * @returns {void}
     */
    loadShowrooms() {
        this.errors = [];
        showroomApi.getShowroom().then(response => {
            this.showrooms = showroomAssembler.toEntitiesFromResponse(response);
            if (this.showrooms.length > 0 && !this.currentShowroom) this.setCurrentShowroom(this.showrooms[0]);
        }).catch(message => {
            this.errors.push(message);
            this.showrooms = [];
        });
    },

});