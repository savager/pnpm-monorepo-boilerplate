/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
	export const ReactComponent: any;
	export const content: any;
}

declare module '*.module.css' {
	const classes: { [className: string]: string };
	export default classes;
}
declare module '*.module.scss' {
	const content: { [className: string]: string };
	export default content;
}

export {};
