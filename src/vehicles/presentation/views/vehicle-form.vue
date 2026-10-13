<script setup>
import {useI18n} from "vue-i18n";
import {useRoute, useRouter} from "vue-router";
import {computed, onMounted, ref} from "vue";
import {Vehicle} from "../../domain/model/vehicle.entity.js";
import {useVehiclesStore} from "../../application/vehicle.store.js";

const {t} = useI18n();
const route = useRoute();
const router = useRouter();
const store = useVehiclesStore();
const {errors, vehicles, addVehicle, fetchVehicles} = store;

const form = ref({title: '', summary: '', categoryId: null});
const isEdit = computed(() => !!route.params.id);

onMounted(() => {
  if (!vehicles.length) fetchVehicles();
  if (isEdit.value) {
    const tutorial = getVehicleById(route.params.id);
    if (vehicles) {
      form.value.vehicleCategoryId = vehicles.vehicleCategoryId;
      form.value.quantity = vehicles.quantity;
    } else router.push({name: 'home'});
  }
});

/**
 * Retrieves a vehicle by its ID.
 * @param {string} id - The ID of the vehicle.
 * @returns {Object|null} - The vehicle object if found, null otherwise.
 */
function getVehicleById(id) {
  return store.getVehicleById(id);
}

const saveVehicle = () => {
  /**
   * Saves the vehicle.
   * adds a new vehicle always.
   */
  const vehicle = new Vehicle({
    id: isEdit.value ? route.params.id : null,

  });
  if (isEdit.value) updateVehicle(vehicle); else addVehicle(vehicle);
  navigateBack();
};

/**
 * Navigates back to the home page.
 */
const navigateBack = () => {
  router.push({name: 'home'});
};
</script>

<template>
  <div class="p-4">
    <form @submit.prevent="saveVehicle">
      <div class="field mb-3">
        <label for="name">{{ t('vehicle.name') }}</label>
        <pv-input-text id="name" v-model="form.name" required class="w-full" />
      </div>
      <pv-button type="submit" :label="t('vehicle.save')" icon="pi pi-save" />
      <pv-button :label="t('vehicle.cancel')" severity="secondary" class="ml-2" @click="navigateBack" />
    </form>
    <div v-if="errors.length" class="text-red-500 mt-3">
      {{ t('errors.occurred') }}: {{ errors.map(e => e.message).join(', ') }}
    </div>
  </div>
</template>

<style scoped>

</style>