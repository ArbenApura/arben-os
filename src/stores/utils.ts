// IMPORTED STORES
import { initializeMediaStates } from './mediaStates';
import { initialized } from './states';
// IMPORTED LIB-UTILS
import { get } from 'svelte/store';

// UTILS
export const initializeStates = async () => {
	if (get(initialized)) return;
	initialized.set(true);
	initializeMediaStates();
};
