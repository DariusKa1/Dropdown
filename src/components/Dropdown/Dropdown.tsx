import { FC, useEffect, useState } from 'react';
import useDataValidation from '../../utils/hooks/useDataValidation';
import { IDropdownProps } from '../../utils/IDropdownProps';
import { 
  DropdownOptionsStyled, 
  DropdownScreenButtonStyled, 
  DropdownScreenStyled, 
  DropdownSelectedItemsStyled, 
  DropdownStyled, 
} from './Dropdown.styles';
import DropdownSelectedItem from './DropdownSelectedItem';
import DropdownUl from './DropdownUl';
import { action } from '@storybook/addon-actions';

const Dropdown: FC<IDropdownProps> = (props) => {
  const [pickedItems, setPickedItems] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //dataIsRady is data that can be sent to an API for searching items with same tags as picked in dropdown.
  const dataIsReady = useDataValidation(pickedItems, dropdownOpen);
  useEffect(() => {
    dataIsReady && console.log(pickedItems)
  }, [dataIsReady, pickedItems]);
  
  return (
    <DropdownStyled 
      dropdownFont={props.dropdownFont} 
      dropdownTheme={props.dropdownTheme}
    >
      <DropdownScreenStyled dropdownTheme={props.dropdownTheme}>
        <DropdownSelectedItemsStyled>
          {
            pickedItems.length <= 0 ?
            <p>Please pick some items...</p> :  
            pickedItems.map(
              item => 
                <DropdownSelectedItem 
                  key={item} 
                  value={item} 
                  dropdownTheme={props.dropdownTheme}
                  setPickedItems={setPickedItems}
                  pickedItems={pickedItems}
                />
            )
          }
        </DropdownSelectedItemsStyled>
        <DropdownScreenButtonStyled 
          onClick={() => {setDropdownOpen(!dropdownOpen); action('button-clicked')}} 
          dropdownTheme={props.dropdownTheme}
          dropdownOpen={dropdownOpen}
        >
          <p>V</p>
        </DropdownScreenButtonStyled>
      </DropdownScreenStyled>
      {
        dropdownOpen &&
        <DropdownOptionsStyled dropdownTheme={props.dropdownTheme}>
          {
            props.dropdownData.map(
              group => 
                <DropdownUl
                  key={group.id}
                  group={group.group}
                  values={group.values}
                  dropdownTheme={props.dropdownTheme}
                  setPickedItems={setPickedItems}
                  pickedItems={pickedItems}
                  dropdownOpen={dropdownOpen}
                />
            )
          }
        </DropdownOptionsStyled>
      }
    </DropdownStyled>
  )
}

export default Dropdown;
