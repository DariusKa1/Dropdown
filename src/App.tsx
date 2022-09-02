import Dropdown from './components/Dropdown/Dropdown';
import { dummyDataForDropdown } from './utils/dummyDataForDropdown';

const App = () => {
  return (
      <Dropdown 
        dropdownData={dummyDataForDropdown}
        // dropdownTheme={'dark'}
        // dropdownFont={'Courier New'}
      />
  );
};

export default App;
