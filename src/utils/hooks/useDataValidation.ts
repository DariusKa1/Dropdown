import { useEffect, useState } from 'react';

const useDataValidation = (pickedItems: string[], dropdownOpen: boolean) => {
  const [readyToSend, setReadyToSend] = useState(false);
  useEffect(() => {
    if(pickedItems.length > 0 && dropdownOpen === false){
      setReadyToSend(true);
    }else{
      setReadyToSend(false);
    }
  }, [dropdownOpen, pickedItems]);
  return readyToSend;
}

export default useDataValidation