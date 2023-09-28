// IMPORTED LIB-UTILS
import { get } from 'svelte/store';
// IMPORTED STORES
import { initialized } from '..';
import { mediaStates, BREAKPOINTS } from './states';

// UTILS
export const updateMedia = () => {
	if (!get(initialized)) return;

	const winWidth = window.innerWidth;

	mediaStates.isXS.set(winWidth < BREAKPOINTS.sm);
	mediaStates.isSM.set(winWidth >= BREAKPOINTS.sm && winWidth < BREAKPOINTS.md);
	mediaStates.isMD.set(winWidth >= BREAKPOINTS.md && winWidth < BREAKPOINTS.lg);
	mediaStates.isLG.set(winWidth >= BREAKPOINTS.lg && winWidth < BREAKPOINTS.xl);
	mediaStates.isXL.set(winWidth >= BREAKPOINTS.xl && winWidth < BREAKPOINTS['2xl']);
	mediaStates.is2XL.set(winWidth >= BREAKPOINTS['2xl']);

	mediaStates.isSMDown.set(winWidth < BREAKPOINTS.md);
	mediaStates.isMDDown.set(winWidth < BREAKPOINTS.lg);
	mediaStates.isLGDown.set(winWidth < BREAKPOINTS.xl);
	mediaStates.isXLDown.set(winWidth < BREAKPOINTS['2xl']);

	mediaStates.isXSUp.set(winWidth > BREAKPOINTS.sm);
	mediaStates.isSMUp.set(winWidth > BREAKPOINTS.md);
	mediaStates.isMDUp.set(winWidth > BREAKPOINTS.lg);
	mediaStates.isLGUp.set(winWidth > BREAKPOINTS.xl);
	mediaStates.isXLUp.set(winWidth > BREAKPOINTS['2xl']);
};
export const initializeMediaStates = () => {
	if (get(initialized)) updateMedia();
};
