import { FC } from 'react';
import { IDropdownUlProps } from '../../utils/IDropdownUlProps';
import { DropdownUlNameStyled, DropdownUlStyled } from './Dropdown.styles';
import DropdownLi from './DropdownLi';

const DropdownUl: FC<IDropdownUlProps> = (props) => {
  return (
      <DropdownUlStyled dropdownTheme={props.dropdownTheme}>
        {
          props.group && 
          <DropdownUlNameStyled >{props.group}:</DropdownUlNameStyled>
        }
        {
          props.values.map(
            value => 
              <DropdownLi
                key={value}
                value={value}
                dropdownTheme={props.dropdownTheme}
                setPickedItems={props.setPickedItems}
                pickedItems={props.pickedItems}
                dropdownOpen={props.dropdownOpen}
              />
          ) 
        }
      </DropdownUlStyled>
  )
}

export default DropdownUl;