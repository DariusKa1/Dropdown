export interface IDropdownSelectedItemProps {
    value: string;
    dropdownTheme:'light' | 'dark' | undefined;
    setPickedItems: React.Dispatch<React.SetStateAction<string[]>>;
    pickedItems: string[];
};