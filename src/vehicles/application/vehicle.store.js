/**
 * Application service store for the Vehicles bounded context.
 * It coordinates category and tutorial use cases and keeps UI-facing state.
 *
 * @module useVehiclesStore
 */
import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {VehiclesApi} from "../infrastructure/vehicles-api.js";
import {VehicleAssembler} from "../infrastructure/vehicle.assembler.js";


const vehicleApi = new VehiclesApi();

const useVehiclesStore = defineStore('vehicles', () => {

    /**
     * List of vehicles entities.
     * @type {import('vue').Ref<Tutorial[]>}
     */
    const vehicles = ref([]);
    /**
     * List of errors encountered during API operations.
     * @type {import('vue').Ref<Error[]>}
     */
    const errors = ref([]);
    /**
     * Whether categories have been loaded from the API.
     * @type {import('vue').Ref<boolean>}
     */
    const vehiclesLoaded = ref(false);
    /**
     * Whether vehicles have been loaded from the API.
     * @type {import('vue').Ref<boolean>}
     */
    /**
     * Number of loaded vehicles.
     * @type {import('vue').ComputedRef<number>}
     */
    const vehiclesCount = computed(() => {
        return vehiclesLoaded ? vehicles.value.length : 0;
    });

    /**
     * Loads vehicles from infrastructure and updates the application state.
     * @returns {void}
     */
    function fetchVehicles() {
        vehicleApi.getVehicles().then(response => {
            vehicles.value = VehicleAssembler.toEntitiesFromResponse(response);
            vehiclesLoaded.value = true;
            console.log(vehiclesLoaded.value);
            console.log(vehicles.value);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Finds a vehicle entity by identifier.
     */
    function getVehicleById(id) {
        let idNum = parseInt(id);
        return vehicles.value.find(category => category["id"] === idNum);
    }

    /**
     * Creates a vehicle through infrastructure and appends it to local state.
     */
    function addVehicle(vehicle) {
        vehicleApi.createVehicle(vehicle).then(response => {
            const resource = response.data;
            const newVehicle = VehicleAssembler.toEntityFromResource(resource);
            vehicles.value.push(newVehicle);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    return {
        vehicles,
        errors,
        vehiclesLoaded,
        vehiclesCount,
        fetchVehicles,
        getVehicleById,
        addVehicle,
    }
});

export default useVehiclesStore();