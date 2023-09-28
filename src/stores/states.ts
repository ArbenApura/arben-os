// IMPORTED LIB-UTILS
import { writable } from 'svelte/store';

// STATES
export const initialized = writable<boolean>(false);
export const states = { initialized };
