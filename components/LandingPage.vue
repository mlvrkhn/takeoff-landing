<template>
	<div class="mt-4">
		<ClientOnly fallback-tag="span" fallback="Loading 3D Globe...">
			<AirportSearch />
			<GlobeGl />
		</ClientOnly>
	</div>
</template>

<script setup lang="ts"></script>
