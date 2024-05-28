<template>
	<div class="mt-4">
		<ClientOnly fallback-tag="span" fallback="Loading 3D Globe...">
			<div class="flex flex-col items-center justify-center min-h-15">
				<h1 class="text-4xl font-bold mb-4 text-center">
					Takeoff & Landing
				</h1>
				<input
					type="text"
					placeholder="Start typing to find airports you visited"
					class="input input-bordered w-full max-w-xs p-2 rounded-lg text-center"
					v-model="search"
					@input="handleInput"
				/>
			</div>
			<GlobeGl />
		</ClientOnly>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const search = ref('');

async function handleInput() {
	const data = await $fetch(
		'https://airports-by-api-ninjas.p.rapidapi.com/v1/airports?name=London',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'airports-by-api-ninjas.p.rapidapi.com',
				'x-rapidapi-key':
					'b7ea270eedmshb2757dd9d8ad841p19c27fjsndcfb97a04617',
			},
		}
	);
	console.log('API data:', data);
}
</script>
