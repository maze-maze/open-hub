import type { Meta, StoryObj } from '@storybook/react'
import HStack from './h-stack'

const meta: Meta<typeof HStack> = {
  component: HStack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'HStack component for arranging items horizontally with configurable spacing and alignment options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end', 'between'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

function ExampleItems() {
  return (
    <>
      <div className="bg-blue-100 p-2 rounded">Item 1</div>
      <div className="bg-green-100 p-2 rounded">Item 2</div>
      <div className="bg-yellow-100 p-2 rounded">Item 3</div>
    </>
  )
}

export const Default: Story = {
  args: {
    children: <ExampleItems />,
    size: 'md',
    alignment: 'start',
  },
}

export const Small: Story = {
  args: {
    children: <ExampleItems />,
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: <ExampleItems />,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    children: <ExampleItems />,
    size: 'lg',
  },
}

export const AlignStart: Story = {
  args: {
    children: <ExampleItems />,
    alignment: 'start',
  },
}

export const AlignCenter: Story = {
  args: {
    children: <ExampleItems />,
    alignment: 'center',
  },
}

export const AlignEnd: Story = {
  args: {
    children: <ExampleItems />,
    alignment: 'end',
  },
}

export const AlignBetween: Story = {
  args: {
    children: <ExampleItems />,
    alignment: 'between',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Small (sm)</h3>
        <div className="border p-4 rounded">
          <HStack size="sm">
            <ExampleItems />
          </HStack>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Medium (md)</h3>
        <div className="border p-4 rounded">
          <HStack size="md">
            <ExampleItems />
          </HStack>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Large (lg)</h3>
        <div className="border p-4 rounded">
          <HStack size="lg">
            <ExampleItems />
          </HStack>
        </div>
      </div>
    </div>
  ),
}

export const Alignments: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Start</h3>
        <div className="border p-4 rounded w-full">
          <HStack alignment="start">
            <ExampleItems />
          </HStack>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Center</h3>
        <div className="border p-4 rounded w-full">
          <HStack alignment="center">
            <ExampleItems />
          </HStack>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">End</h3>
        <div className="border p-4 rounded w-full">
          <HStack alignment="end">
            <ExampleItems />
          </HStack>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Between</h3>
        <div className="border p-4 rounded w-full">
          <HStack alignment="between">
            <ExampleItems />
          </HStack>
        </div>
      </div>
    </div>
  ),
}
