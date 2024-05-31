<template>
	<div class="flex flex-col justify-center p-5">
		<div class="flex flex-col items-center justify-center min-w-96">
			<h1 class="text-4xl font-bold mb-4 text-center">
				Takeoff & Landing
			</h1>
			<input
				type="text"
				placeholder="Start typing to find airports you visited"
				class="input input-bordered w-full max-w-xs p-2 text-center"
				v-model="search"
				@input="fetchAirports"
			/>
		</div>
		<div
			class="flex flex-col items-center justify-center"
			v-if="airports.length"
		>
			<select
				class="select select-bordered w-full p-2 max-w-xs"
				v-model="visitedAirports"
				@change="onAirportChange"
			>
				<option
					v-for="airport in airports"
					:key="airport.iata"
					:value="airport"
				>
					{{ airport.iata }} - {{ airport.name }}
				</option>
			</select>
		</div>
	</div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
import { ref } from 'vue';

import { defineEmits } from 'vue';

const emit = defineEmits(['update']);
const props = defineProps({
	// visitedAirports: {
	// 	type: Array,
	// 	default: () => [],
	// },
	// airports: {
	// 	type: Array,
	// 	default: () => [],
	// },
});

const search = ref('');
let airports = ref('');
let visitedAirports = ref('');

async function fetchAirports() {
	airports = await $fetch(
		'https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?name=' +
			search.value,
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'airports-by-api-ninjas.p.rapidapi.com',
				'x-rapidapi-key': config?.public.apiKey,
			},
		}
	);
}

function onAirportChange(event: Event) {
	console.debug('🚀   onAirportChange  event:', event);
	console.debug('🚀   onAirportChange  event:', event.target!);

	emit('update', selectedAirport);
}
</script>
