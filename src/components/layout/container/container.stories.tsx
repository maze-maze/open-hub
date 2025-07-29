import type { Meta, StoryObj } from '@storybook/react'
import Container from './container'

const meta: Meta<typeof Container> = {
  component: Container,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Container component for consistent spacing and layout with configurable size variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is content inside a medium container.',
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    children: 'This is content inside a small container.',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: 'This is content inside a medium container.',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    children: 'This is content inside a large container.',
    size: 'lg',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="border rounded">
        <Container size="sm">
          <div className="bg-gray-100 p-2 rounded">Small Container (sm)</div>
        </Container>
      </div>
      <div className="border rounded">
        <Container size="md">
          <div className="bg-gray-100 p-2 rounded">Medium Container (md)</div>
        </Container>
      </div>
      <div className="border rounded">
        <Container size="lg">
          <div className="bg-gray-100 p-2 rounded">Large Container (lg)</div>
        </Container>
      </div>
    </div>
  ),
}
