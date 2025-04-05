import type { Meta, StoryObj } from '@storybook/angular';
import { ShellComponent } from './shell.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ShellComponent> = {
  component: ShellComponent,
  title: 'ShellComponent',
};
export default meta;
type Story = StoryObj<ShellComponent>;

export const Primary: Story = {
  args: {
    message: 'wair-shell works!',
  },
};

export const Heading: Story = {
  args: {
    message: 'wair-shell works!',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/shell works!/gi)).toBeTruthy();
  },
};
