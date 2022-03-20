/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
	export const ReactComponent: any;
	export const content: any;
}

interface IClassNames {
	[className: string]: string;
}

declare module '*.module.css' {
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.module.scss' {
	const classNames: IClassNames;
	export = classNames;
}
export {};
