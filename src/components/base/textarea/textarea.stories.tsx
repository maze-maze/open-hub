import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './textarea'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'TextArea component for multi-line text input with label, hint text, validation states, and customizable sizing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
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
    label: 'Description',
    placeholder: 'Enter your description here...',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description here...',
    hint: 'Please provide a detailed description.',
  },
}

export const WithTooltip: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description here...',
    tooltip: 'This field accepts markdown formatting',
  },
}

export const Required: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description here...',
    isRequired: true,
  },
}

export const Invalid: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description here...',
    isInvalid: true,
    hint: 'Description must be at least 10 characters long.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description here...',
    isDisabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'Description',
    value: 'This is a read-only description that cannot be edited.',
    isReadOnly: true,
  },
}

export const WithValue: Story = {
  args: {
    label: 'Description',
    defaultValue: 'This is a pre-filled description that can be edited.',
  },
}

export const Complex: Story = {
  render: () => (
    <div className="w-96">
      <TextArea
        label="Project Description"
        placeholder="Describe your project in detail..."
        hint="Include goals, requirements, and any special considerations."
        tooltip="Use markdown for formatting"
        isRequired
        rows={6}
      />
    </div>
  ),
}
