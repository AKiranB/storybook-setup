import { Button, Props } from '../src/Button';
import React from 'react';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'I am a secondary',
};
