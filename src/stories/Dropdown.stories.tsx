import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '../components/Dropdown/Dropdown';
import { dummyDataForDropdown } from '../utils/dummyDataForDropdown';

export default {
    title: 'Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const original = Template.bind({});
original.args = {
  dropdownData: dummyDataForDropdown,
};

export const light = Template.bind({});
light.args = {
  dropdownData: dummyDataForDropdown,
  dropdownTheme: 'light'
};

export const dark = Template.bind({});
dark.args = {
    dropdownData: dummyDataForDropdown,
    dropdownTheme: 'dark'
};

export const originalWithCustomFont = Template.bind({});
originalWithCustomFont.args = {
    dropdownData: dummyDataForDropdown,
    dropdownFont: 'Courier New'
};