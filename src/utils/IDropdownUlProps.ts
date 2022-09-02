export interface IDropdownUlProps {
    group?: string | null;
    values: string[];
    dropdownTheme?: 'light' | 'dark' | undefined;
    setPickedItems: React.Dispatch<React.SetStateAction<string[]>>;
    pickedItems: string[];
    dropdownOpen: boolean;
};