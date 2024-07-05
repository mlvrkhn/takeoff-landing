<template>
	<div class="">
		<div id="globeViz" />
	</div>
</template>

<script setup>
import Globe from 'globe.gl';

const gData = [...Array(30).keys()].map(() => ({
	lat: (Math.random() - 0.5) * 180,
	lng: (Math.random() - 0.5) * 360,
	size: 7 + Math.random() * 30,
	color: ['white'],
}));

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

onMounted(() => {
	setupGlobe();
});

function setupGlobe() {
	if (process.client) {
		console.log('client');
		Globe()
			.globeImageUrl(
				'//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
			)
			// .bumpImageUrl(
			// 	'//unpkg.com/three-globe/example/img/earth-topology.png'
			// )
			.backgroundColor('#EDEADE')
			// .pointsData(gData)
			.pointAltitude('size')
			.pointColor('color')
			// .width(1024)
			.width(window.innerWidth * 0.6)
			.htmlElementsData(gData)
			.htmlElement(d => {
				const el = document.createElement('div');
				el.innerHTML = markerSvg;
				el.style.color = d.color;
				el.style.width = `${d.size}px`;

				el.style['pointer-events'] = 'auto';
				el.style.cursor = 'pointer';
				el.onclick = () => console.info(d);
				return el;
			})(document.getElementById('globeViz'));
	}
}
</script>
