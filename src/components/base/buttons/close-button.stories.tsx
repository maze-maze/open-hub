import type { Meta, StoryObj } from '@storybook/react'
import { CloseButton } from './close-button'

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A specialized close button component with customizable size and theme variants for dismissing modals, notifications, and other UI elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    label: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'sm',
    theme: 'light',
  },
}

export const Light: Story = {
  args: {
    theme: 'light',
  },
}

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <CloseButton size="xs" />
      <CloseButton size="sm" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
    </div>
  ),
}

export const Themes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-white rounded">
        <CloseButton theme="light" />
      </div>
      <div className="p-4 bg-gray-900 rounded">
        <CloseButton theme="dark" />
      </div>
    </div>
  ),
}
