import type { Meta, StoryObj } from '@storybook/react'
import type { BadgeColors } from './badge-types'
import { Badge } from './badges'

const meta: Meta<typeof Badge> = {
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge component with multiple types, colors, and sizes for displaying status indicators, categories, and labels.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['gray', 'brand', 'error', 'warning', 'success', 'gray-blue', 'blue-light', 'blue', 'indigo', 'purple', 'pink', 'orange'],
    },
    type: {
      control: 'select',
      options: ['pill-color', 'color', 'modern'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
    size: 'md',
    color: 'gray',
    type: 'pill-color',
  },
}

export const PillColor: Story = {
  args: {
    children: 'Pill Badge',
    type: 'pill-color',
    color: 'brand',
  },
}

export const BadgeColor: Story = {
  args: {
    children: 'Badge Color',
    type: 'color',
    color: 'brand',
  },
}

export const BadgeModern: Story = {
  args: {
    children: 'Modern Badge',
    type: 'modern',
    color: 'gray',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge size="sm" color="brand">Small</Badge>
      <Badge size="md" color="brand">Medium</Badge>
      <Badge size="lg" color="brand">Large</Badge>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {(['gray', 'brand', 'error', 'warning', 'success', 'gray-blue', 'blue-light', 'blue', 'indigo', 'purple', 'pink', 'orange'] as BadgeColors[]).map(color => (
        <Badge key={color} color={color}>
          {color}
        </Badge>
      ))}
    </div>
  ),
}

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Badge type="pill-color" color="brand">Pill Color</Badge>
        <Badge type="color" color="brand">Badge Color</Badge>
        <Badge type="modern" color="gray">Badge Modern</Badge>
      </div>
    </div>
  ),
}
