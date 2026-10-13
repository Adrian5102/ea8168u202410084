<script lang="js" setup>
import {useI18n} from "vue-i18n";
import {Showroom} from "../domain/model/showrooms.entity.js";


const {t} = useI18n();

const { showroom } = defineProps({showroom: {type: Showroom, required: true}});

</script>

<template>
  <pv-card class="m-2">
    <template #header>
      <p class="flex align-content-start flex-wrap">
        {{ showroom.name }}
      </p>
    </template>
    <template #content>
      <p class="flex align-content-start flex-wrap mt-4">
        {{ vehicle.vehicleName }}
      </p>
      <p class="flex align-content-start flex-wrap mt-4">
        {{ vehicle.quantity }}
      </p>
    </template>
    <template #footer>
      <div class="flex justify-content-between align-items-center">
        <p class="flex align-content-start flex-wrap mt-4">
          <h1>Total Vehicles: </h1>
          <h1>Available Capacity: </h1> {{ showroom.maxCapacity }}
        </p>
        <p v-if="showroom.id = 0">
          <span class="text-sm">{{ t('showroom.no-vehicles') }} </span>
        </p>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
</style>