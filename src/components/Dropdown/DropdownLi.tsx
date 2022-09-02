import { FC } from "react";
import addOrRemovePickedItem from "../../utils/functions/addOrRemovePickedItem";
import useSelected from "../../utils/hooks/useSelected";
import { IDropdownliProps } from "../../utils/IDropdownLiProps";
import { DropdownLiStyled } from "./Dropdown.styles";

const DropdownLi: FC<IDropdownliProps> = (props) => {
  const selected = useSelected(props.pickedItems, props.value);
  const listItemClickHandler = () => {
    addOrRemovePickedItem(props.pickedItems, props.value, props.setPickedItems);
  };
  return (
    <DropdownLiStyled
      onClick={listItemClickHandler}
      dropdownTheme={props.dropdownTheme}
      selected={selected}
    >
      {props.value}
    </DropdownLiStyled>
  );
};

export default DropdownLi;
