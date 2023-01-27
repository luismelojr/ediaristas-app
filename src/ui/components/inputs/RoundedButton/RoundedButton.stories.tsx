import { ComponentMeta, ComponentStory } from '@storybook/react';

import RoundedButton from './RoundedButton';

export default {
  title: 'inputs/RoundedButton',
  component: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

const Template: ComponentStory<typeof RoundedButton> = (args) => (
  <RoundedButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Rounded Button',
  variant: 'contained',
};
