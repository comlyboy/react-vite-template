
export interface ITechStack {
	id: string;
	name: string;
	icons: string;
}

export enum PreferThemeEnum {
	DARK = 'dark',
	LIGHT = 'light',
	SYSTEM = 'system'
}

export type PreferThemeType = `${PreferThemeEnum}`;