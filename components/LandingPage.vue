<template>
	<div
		class="flex justify-center items-center h-screen w-screen flex-col md:flex-row overflow-y-auto"
	>
		<ClientOnly fallback-tag="span" fallback="Loading 3D Globe...">
			<div class="flex-shrink-0">
				<AirportSearch @add-airport="addAirport" />
			</div>
			<div class="flex-shrink-0 max-w-4/5">
				<GlobeGl :airports="selectedAirports" />
			</div>
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
