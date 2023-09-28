<script lang="ts">
	// IMPORTED ASSETS
	import ArbenOSDarkSVG from '$assets/icons/arben-os-dark.svg';
	// IMPORTED COMPONENTS
	import { Button, Tooltip } from '$lib';
	import DateButton from './components/DateButton.svelte';
	import ToolsButton from './components/ToolsButton.svelte';
</script>

<div
	class="taskbar absolute right-0 bottom-0 w-full h-[45px]
    bg-slate-100 dark:bg-slate-900 opacity-90 border-t flex-start-center items-stretch gap-[2px] px-[3px] sm:px-4 py-[3px]"
>
	<Tooltip.Root>
		<Tooltip.Trigger class="h-full">
			<Button class="min-w-[39px] max-w-[39px] h-full flex-center p-[6px]" variant="ghost">
				<img class="w-full" src={ArbenOSDarkSVG} alt="" />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content sideOffset={8}>Start</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger class="h-full">
			<Button class="min-w-[39px] max-w-[39px] h-full flex-center p-[6px]" variant="ghost">
				<i class="ph ph-magnifying-glass" />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content sideOffset={8}>Search</Tooltip.Content>
	</Tooltip.Root>
	<Button class="min-w-[39px] max-w-[39px] h-full flex-center p-[6px]" variant="ghost">
		<i class="ph ph-square-half" />
	</Button>
	<div class="flex-grow" />
	<ToolsButton />
	<DateButton />
</div>

<style lang="scss">
	.taskbar {
		.ph {
			@apply text-2xl;
		}
	}
</style>
