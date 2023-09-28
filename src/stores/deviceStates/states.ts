// IMPORTED LIB-UTILS
import { writable } from 'svelte/store';

// STATES
export const battery = writable({
	charging: false,
	level: 0,
});
export const internet = writable({
	connected: true,
});
export const deviceStates = { battery, internet };
