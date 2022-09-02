export interface IDropdownliProps { 
    value: string
    dropdownTheme?: 'light' | 'dark' | undefined;
    setPickedItems: React.Dispatch<React.SetStateAction<string[]>>;
    pickedItems: string[];
    dropdownOpen: boolean;
};