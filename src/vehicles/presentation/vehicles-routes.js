// Lazy-loaded components
const vehicleForm = () => import('./views/vehicle-form.vue');

const vehiclesRoutes = [
    {   path: 'vehicle/items/new',          name: 'vehicles-inventory-new',    component: vehicleForm, meta: {title: 'New Vehicle Inventory Item'}},
];

export default vehiclesRoutes;