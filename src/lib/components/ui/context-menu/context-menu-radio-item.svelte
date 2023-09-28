<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = ContextMenuPrimitive.RadioItemProps;
	type $$Events = ContextMenuPrimitive.RadioItemEvents;

	let className: $$Props['class'] = undefined;
	export let value: ContextMenuPrimitive.RadioItemProps['value'];
	export { className as class };
</script>

<ContextMenuPrimitive.RadioItem
	class={cn(
		'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		'flex-start-center gap-2',
		className,
	)}
	{value}
	{...$$restProps}
	on:click
	on:keydown
	on:focusin
	on:focusout
	on:pointerdown
	on:pointerleave
	on:pointermove
>
	<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
		<ContextMenuPrimitive.RadioIndicator>
			<i class="ph-fill ph-dot-outline text-xl" />
		</ContextMenuPrimitive.RadioIndicator>
	</span>
	<slot />
</ContextMenuPrimitive.RadioItem>
