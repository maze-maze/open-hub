import type { Meta, StoryObj } from '@storybook/react'
import { Mail01, SearchMd } from '@untitledui/icons'
import { Input, InputBase } from './input'

const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive input component with label, hint text, validation states, and icon support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    isDisabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
    },
    isReadOnly: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    icon: Mail01,
  },
}

export const WithHint: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    hint: 'We\'ll never share your email with anyone else.',
  },
}

export const WithTooltip: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    tooltip: 'This is a tooltip message',
  },
}

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    isRequired: true,
  },
}

export const Invalid: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    isInvalid: true,
    hint: 'Please enter a valid email address.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    isDisabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'Email',
    value: 'john@example.com',
    isReadOnly: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input label="Small" placeholder="Small input" size="sm" />
      <Input label="Medium" placeholder="Medium input" size="md" />
    </div>
  ),
}

export const WithShortcut: Story = {
  render: () => (
    <div className="w-80">
      <InputBase
        placeholder="Search..."
        icon={SearchMd}
        shortcut="⌘K"
      />
    </div>
  ),
}

export const Complex: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input
        label="Email"
        placeholder="Enter your email"
        icon={Mail01}
        hint="We'll never share your email with anyone else."
        tooltip="Email field with icon and hint"
        isRequired
      />
    </div>
  ),
}
