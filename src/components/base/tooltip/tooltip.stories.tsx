import type { Meta, StoryObj } from '@storybook/react'
import { HelpCircle } from '@untitledui/icons'
import { Button } from '../buttons/button'
import { Tooltip } from './tooltip'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tooltip component for displaying contextual information on hover or focus with customizable placement and timing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    arrow: {
      control: 'boolean',
    },
    delay: {
      control: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip title="Default tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Tooltip
      title="Tooltip Title"
      description="This is a more detailed description that provides additional context about the element."
    >
      <Button>Hover for more info</Button>
    </Tooltip>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <Tooltip title="Tooltip with arrow" arrow>
      <Button>Hover me</Button>
    </Tooltip>
  ),
}

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <Tooltip title="Top tooltip" placement="top">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip title="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip title="Left tooltip" placement="left">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip title="Right tooltip" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span>Information</span>
      <Tooltip title="This provides helpful information about the feature">
        <Button size="sm" color="tertiary">
          <HelpCircle />
        </Button>
      </Tooltip>
    </div>
  ),
}

export const DelayedTooltip: Story = {
  render: () => (
    <Tooltip title="This tooltip appears after 1 second" delay={1000}>
      <Button>Delayed tooltip (1s)</Button>
    </Tooltip>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Tooltip
      title="Long Tooltip Title"
      description="This is a very long tooltip description that demonstrates how the tooltip handles longer content. It should wrap properly and maintain good readability while providing detailed information to the user."
      arrow
    >
      <Button>Long content</Button>
    </Tooltip>
  ),
}

export const MultipleTooltips: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip title="This is the primary action">
        <Button color="primary">Primary Action</Button>
      </Tooltip>

      <Tooltip title="This is a secondary action">
        <Button color="secondary">Secondary Action</Button>
      </Tooltip>

      <Tooltip title="This is a tertiary action">
        <Button color="tertiary">Tertiary Action</Button>
      </Tooltip>
    </div>
  ),
}
