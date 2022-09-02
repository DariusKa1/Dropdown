import React from 'react';

const addOrRemovePickedItem = (pickedItems: string[], valueToAddOrRemove: string, setPickedItems: React.Dispatch<React.SetStateAction<string[]>>) => {
  if (pickedItems.includes(valueToAddOrRemove)) {
    setPickedItems(pickedItems.filter((pickedItem) => pickedItem !== valueToAddOrRemove));
  } else {
    setPickedItems([...pickedItems, valueToAddOrRemove]);
  }
}

export default addOrRemovePickedItem