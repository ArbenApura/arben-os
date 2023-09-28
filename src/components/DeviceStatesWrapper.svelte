<script lang="ts">
	// IMPORTED STORES
	import { deviceStates, internet } from '$stores/deviceStates';
	// IMPORTED LIB-UTILS
	import { onMount } from 'svelte';

	// STATES
	let battery: any;

	// UTILS
	const handleOnline = () => internet.set({ connected: true });
	const handleOffline = () => internet.set({ connected: false });
	const updateBattery = async () => {
		if (!battery || typeof battery.charging !== 'boolean' || typeof battery.level !== 'number')
			return;
		deviceStates.battery.set({
			charging: battery.charging,
			level: battery.level * 100,
		});
	};

	// LIFECYCLES
	onMount(async () => {
		// @ts-ignore
		battery = await navigator.getBattery();
		if (!battery) return;
		updateBattery();
		battery.addEventListener('chargingchange', updateBattery);
		battery.addEventListener('levelchange', updateBattery);
	});
	onMount(() => async () => {
		if (!battery) return;
		battery.removeEventListener('chargingchange', updateBattery);
		battery.removeEventListener('levelchange', updateBattery);
	});
</script>

<svelte:window on:online={handleOnline} on:offline={handleOffline} />
