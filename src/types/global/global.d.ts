declare module '*.module.css';

declare module '*.png' {
	const url: string;
	export default url;
}

declare module '*.svg' {
	const url: string;
	export default url;
}
