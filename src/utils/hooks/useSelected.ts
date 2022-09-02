import { useEffect, useState } from 'react';

const useSelected = (pickedItems: string[], isSelected: string) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    pickedItems.includes(isSelected) ? setSelected(true) : setSelected(false);
  },[pickedItems, isSelected]);
  return selected;
};

export default useSelected;