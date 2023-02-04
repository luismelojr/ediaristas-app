import { ComponentMeta, ComponentStory } from '@storybook/react';

import UserInformation from './UserInformation';

export default {
  title: 'data-display/UserInformation',
  component: UserInformation,
} as ComponentMeta<typeof UserInformation>;

const Template: ComponentStory<typeof UserInformation> = (args) => (
  <UserInformation {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Luis Henrique',
  picture: 'https://github.com/luismelojr.png',
  rating: 4,
  description: 'Programador Full Stack',
};
