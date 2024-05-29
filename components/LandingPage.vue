<template>
	<div class="mt-4">
		<ClientOnly fallback-tag="span" fallback="Loading 3D Globe...">
			<AirportSearch @add-airport="addAirport" />
			<GlobeGl :airports="selectedAirports" />
		</ClientOnly>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedAirports = ref([]);

const addAirport = newAirport => {
	console.log('partent fired', newAirport);

	selectedAirports.value.push(newAirport);
};
</script>
