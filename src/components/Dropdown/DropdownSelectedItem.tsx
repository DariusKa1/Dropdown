import { FC } from 'react';
import addOrRemovePickedItem from '../../utils/functions/addOrRemovePickedItem';
import { IDropdownSelectedItemProps } from '../../utils/IDropdownSelectedItemProps';
import { DropdownSelectedItemButtonStyled, DropdownSelectedItemStyled } from './Dropdown.styles';

const DropdownSelectedItem:FC<IDropdownSelectedItemProps> = (props) => {
  const onDeleteHandler = () => {
    addOrRemovePickedItem(props.pickedItems, props.value, props.setPickedItems);
  };
  return (
    <DropdownSelectedItemStyled dropdownTheme={props.dropdownTheme}>
      <p>{props.value}</p>
      <DropdownSelectedItemButtonStyled 
        dropdownTheme={props.dropdownTheme} 
        onClick={onDeleteHandler}>
          X
      </DropdownSelectedItemButtonStyled>
    </DropdownSelectedItemStyled>
  )
}

export default DropdownSelectedItem;