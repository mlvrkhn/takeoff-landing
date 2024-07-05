<template>
	<div class="flex flex-col justify-center p-5 mt-10">
		<div class="flex flex-col items-center justify-center min-w-96 mb-4">
			<h1 class="text-4xl font-bold mb-4 text-center">
				Takeoff & Landing
			</h1>
			<input
				type="text"
				placeholder="Start typing to find airports you visited"
				class="input input-bordered rounded w-full max-w-xs p-2 text-center"
				v-model="search"
				@keyup.enter="fetchAirports"
				@blur="fetchAirports"
			/>
		</div>
		<div
			class="flex flex-wrap gap-2 items-center justify-center"
			v-if="airports.length"
		>
			<el-tag
				v-for="airport in airports.filter(airport => airport.iata)"
				:key="airport.iata"
				closable
				type="success"
				class="inline-block mr-2 mb-2"
				@click="onAirportChange(airport)"
				@close="handleClose(airport)"
				hit
				size="large"
				round
			>
				{{ airport.iata }} - {{ airport.name.slice(0, 12) }}
			</el-tag>
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
let airports = ref([]);
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
	// emit('update', selectedAirport);
}

function handleClose(tag) {
	console.log('close tag: ', tag);
}
</script>
