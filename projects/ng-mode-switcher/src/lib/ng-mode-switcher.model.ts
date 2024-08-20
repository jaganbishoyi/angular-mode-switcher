export enum Mode {
    LIGHT = "light",
    DARK = "dark",
    SYSTEM = "system"
}

export interface IModeStorage {

    save(mode: Mode, isSystem: boolean): void;

    getMode(): string;
}

export interface IConfig {
    legend: ILegend
}

export interface ILegend {
    visible: boolean;
    LIGHT?: string;
    DARK?: string;
    SYSTEM?: string;
}

