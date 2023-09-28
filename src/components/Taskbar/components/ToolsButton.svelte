<script lang="ts">
	// IMPORTED STORES
	import { battery, internet } from '$stores/deviceStates';
	// IMPORTED LIB-UTILS
	import { onMount } from 'svelte';
	// IMPORTED COMPONENTS
	import { Button, Tooltip } from '$lib';

	// REACTIVE STATES
	$: batteryIcon = (() => {
		if ($battery.charging) return 'ph ph-battery-charging';
		const level = $battery.level;
		if (level >= 90) return 'ph ph-battery-full';
		if (level >= 70 && level < 90) return 'ph ph-battery-high';
		if (level >= 50 && level < 70) return 'ph ph-battery-medium';
		if (level >= 1 && level < 50) return 'ph ph-battery-low';
		else return 'ph ph-battery-empty';
	})();

	// LIFECYCLES
	onMount(() => {});
</script>

<Button class="flex-center gap-2 h-full px-3" variant="ghost">
	<Tooltip.Root>
		<Tooltip.Trigger class="flex-center">
			<i class="ph {$internet.connected ? 'ph-wifi-high' : 'ph-wifi-x'}" />
		</Tooltip.Trigger>
		<Tooltip.Content sideOffset={16}>
			Internet {$internet.connected ? 'connected' : 'not connected'}
		</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger class="flex-center">
			<i class="ph ph-speaker-simple-high opacity-50" />
		</Tooltip.Trigger>
		<Tooltip.Content sideOffset={16}>Volume not yet supported</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger class="flex-center">
			<i class={batteryIcon} />
		</Tooltip.Trigger>
		<Tooltip.Content sideOffset={16}>
			Battery status: {$battery.level}% {$battery.charging ? '[charging]' : 'remaining'}
		</Tooltip.Content>
	</Tooltip.Root>
</Button>
