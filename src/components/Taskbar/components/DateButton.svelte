<script lang="ts">
	// IMPORTED LIB-UTILS
	import { onMount } from 'svelte';
	// IMPORTED UTILS
	import { MINUTE } from '$utils';
	// IMPORTED COMPONENTS
	import { Button, Tooltip } from '$lib';

	// STATES
	let time = '',
		date = '',
		hoverDate = '';
	let interval: NodeJS.Timeout;

	// UTILS
	const handleDate = () => {
		const currentDate = new Date();
		const day = currentDate.getDate();
		const month = currentDate.getMonth();
		const monthName = currentDate.toLocaleString('default', { month: 'long' });
		const week = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
		const year = currentDate.getFullYear();
		const hours = currentDate.getHours();
		const minutes = currentDate.getMinutes();
		const ampm = hours >= 12 ? 'pm' : 'am';
		const formattedHours = hours % 12 === 0 ? '12' : (hours % 12).toString();
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
		const formattedDay = day < 10 ? '0' + day : day;
		const formattedMonth = month < 10 ? '0' + month : month;
		time = `${formattedHours}:${formattedMinutes} ${ampm}`;
		date = `${formattedDay}/${formattedMonth}/${year}`;
		hoverDate = `${week}, ${day} ${monthName} ${year}`;
	};

	// LIFECYCLES
	onMount(() => {
		handleDate();
		interval = setInterval(handleDate, MINUTE / 2);
		return () => clearInterval(interval);
	});
</script>

<Tooltip.Root>
	<Tooltip.Trigger class="h-full">
		<Button class="flex-center h-full px-3" variant="ghost">
			<div class="flex items-end flex-col gap-[2px] text-xs">
				<p>{time}</p>
				<p>{date}</p>
			</div>
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content sideOffset={8}>{hoverDate}</Tooltip.Content>
</Tooltip.Root>
