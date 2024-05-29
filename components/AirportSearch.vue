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
				@input="handleInput"
			/>
		</div>
		<div class="flex flex-col items-center justify-center">
			<select
				class="select select-bordered w-full p-2 max-w-xs"
				v-if="airports.length"
			>
				<option
					v-for="airport in airports"
					:key="airport.iata"
					@click="selectAirport(airport)"
				>
					{{ airport.iata || '000' }}: {{ airport.name }}
				</option>
			</select>
		</div>
	</div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
import { ref } from 'vue';

defineProps({
	selectedAirports: Array,
});

import { defineEmits } from 'vue';

const emit = defineEmits(['add-airport']);

const search = ref('');
let airports = ref([]);

async function handleInput() {
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

function selectAirport(airport) {
	console.log('airport selected');

	emit('add-airport', airport);
}
</script>
