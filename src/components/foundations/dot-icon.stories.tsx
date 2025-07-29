import type { Meta, StoryObj } from '@storybook/react'
import { Dot } from './dot-icon'

const meta: Meta<typeof Dot> = {
  component: Dot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Dot size="sm" />
        <span>Small</span>
      </div>
      <div className="flex items-center gap-2">
        <Dot size="md" />
        <span>Medium</span>
      </div>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Dot className="text-green-500" />
        <span>Success</span>
      </div>
      <div className="flex items-center gap-2">
        <Dot className="text-yellow-500" />
        <span>Warning</span>
      </div>
      <div className="flex items-center gap-2">
        <Dot className="text-red-500" />
        <span>Error</span>
      </div>
      <div className="flex items-center gap-2">
        <Dot className="text-blue-500" />
        <span>Info</span>
      </div>
      <div className="flex items-center gap-2">
        <Dot className="text-gray-500" />
        <span>Neutral</span>
      </div>
    </div>
  ),
}

export const InText: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="flex items-center gap-2">
        <Dot className="text-green-500" size="sm" />
        Online status indicator
      </p>
      <p className="flex items-center gap-2">
        <Dot className="text-yellow-500" size="sm" />
        Away status indicator
      </p>
      <p className="flex items-center gap-2">
        <Dot className="text-red-500" size="sm" />
        Offline status indicator
      </p>
    </div>
  ),
}
