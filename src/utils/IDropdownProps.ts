import { IDropdownData } from './IDropdownData';

export interface IDropdownProps {
    dropdownData: IDropdownData[];
    dropdownTheme?: 'light' | 'dark' | undefined;
    dropdownFont?: string | undefined;
};