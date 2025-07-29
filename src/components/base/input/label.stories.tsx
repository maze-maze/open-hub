import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'

const meta: Meta<typeof Label> = {
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Label component for form inputs with optional required indicator and tooltip support.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isRequired: {
      control: 'boolean',
    },
    tooltip: {
      control: 'text',
    },
    tooltipDescription: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Email address',
  },
}

export const Required: Story = {
  args: {
    children: 'Email address',
    isRequired: true,
  },
}

export const WithTooltip: Story = {
  args: {
    children: 'Email address',
    tooltip: 'This is a helpful tooltip',
  },
}

export const WithTooltipAndDescription: Story = {
  args: {
    children: 'Email address',
    tooltip: 'Email address help',
    tooltipDescription: 'Enter a valid email address that you have access to.',
  },
}

export const RequiredWithTooltip: Story = {
  args: {
    children: 'Email address',
    isRequired: true,
    tooltip: 'This field is required',
    tooltipDescription: 'You must provide a valid email address to continue.',
  },
}

export const Examples: Story = {
  render: () => (
    <div className="space-y-4">
      <Label>Simple label</Label>
      <Label isRequired>Required label</Label>
      <Label tooltip="This is helpful">Label with tooltip</Label>
      <Label isRequired tooltip="Required field" tooltipDescription="This field must be filled out.">
        Required with detailed tooltip
      </Label>
    </div>
  ),
}
