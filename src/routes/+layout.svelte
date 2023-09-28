<script lang="ts">
	// IMPORTED STORES
	import { initializeStates } from '$stores';
	import { updateMedia, windowWidth } from '$stores/mediaStates';
	// IMPORTED LIB-UTILS
	import { onMount } from 'svelte';
	// IMPORTED COMPONENTS
	import { ContextMenu } from '$lib';
	import { ContextMenuContent, Taskbar } from '$components';
	import DeviceStatesWrapper from '$components/DeviceStatesWrapper.svelte';

	// UTILS
	const handleResize = () => windowWidth.set(window.innerWidth);

	// LIFECYCLES
	onMount(async () => {
		await initializeStates();
		updateMedia();
	});
</script>

<svelte:window on:resize={handleResize} />

<DeviceStatesWrapper />

<ContextMenu.Root>
	<ContextMenu.Trigger>
		<div
			class="screen relative w-screen h-screen overflow-hidden bg-center bg-cover"
			style="background-image: url(wallpapers/3.png)"
		>
			<slot />
		</div>
	</ContextMenu.Trigger>
	<ContextMenuContent />
</ContextMenu.Root>

<ContextMenu.Root>
	<ContextMenu.Trigger>
		<Taskbar />
	</ContextMenu.Trigger>
</ContextMenu.Root>
