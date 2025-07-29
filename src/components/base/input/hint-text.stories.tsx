import type { Meta, StoryObj } from '@storybook/react'
import { HintText } from './hint-text'

const meta: Meta<typeof HintText> = {
  component: HintText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Hint text component for providing additional information or error messages for form inputs.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isInvalid: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is a helpful hint text.',
  },
}

export const Error: Story = {
  args: {
    children: 'This field is required.',
    isInvalid: true,
  },
}

export const LongText: Story = {
  args: {
    children: 'This is a longer hint text that provides more detailed information about what the user should enter in this field.',
  },
}

export const Examples: Story = {
  render: () => (
    <div className="space-y-4 max-w-sm">
      <div>
        <HintText>Normal hint text</HintText>
      </div>
      <div>
        <HintText isInvalid>Error message</HintText>
      </div>
      <div>
        <HintText>
          Longer hint text that provides more context and guidance for the user.
        </HintText>
      </div>
    </div>
  ),
}
