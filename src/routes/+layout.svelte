<script lang="ts">
	// IMPORTED STORES
	import { initializeStates } from '$stores';
	import { updateMedia, windowWidth } from '$stores/mediaStates';
	// IMPORTED LIB-UTILS
	import { onMount } from 'svelte';

	// UTILS
	const handleResize = () => windowWidth.set(window.innerWidth);

	// LIFECYCLES
	onMount(async () => {
		await initializeStates();
		updateMedia();
	});
</script>

<svelte:window on:resize={handleResize} />

<div class="relative w-screen h-screen overflow-hidden">
	<slot />
</div>
