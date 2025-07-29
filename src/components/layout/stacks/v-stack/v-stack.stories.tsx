import type { Meta, StoryObj } from '@storybook/react'
import VStack from './v-stack'

const meta: Meta<typeof VStack> = {
  component: VStack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'VStack component for arranging items vertically with configurable spacing and alignment options.',
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

export const Sizes: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Small (sm)</h3>
        <div className="border p-4 rounded">
          <VStack size="sm">
            <ExampleItems />
          </VStack>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Medium (md)</h3>
        <div className="border p-4 rounded">
          <VStack size="md">
            <ExampleItems />
          </VStack>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Large (lg)</h3>
        <div className="border p-4 rounded">
          <VStack size="lg">
            <ExampleItems />
          </VStack>
        </div>
      </div>
    </div>
  ),
}

export const Alignments: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <div>
        <h3 className="font-semibold mb-2">Start</h3>
        <div className="border p-4 rounded h-32">
          <VStack alignment="start">
            <ExampleItems />
          </VStack>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Center</h3>
        <div className="border p-4 rounded h-32">
          <VStack alignment="center">
            <ExampleItems />
          </VStack>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">End</h3>
        <div className="border p-4 rounded h-32">
          <VStack alignment="end">
            <ExampleItems />
          </VStack>
        </div>
      </div>
    </div>
  ),
}

export const WithDifferentContent: Story = {
  args: {
    children: (
      <>
        <h2 className="text-xl font-bold">Title</h2>
        <p className="text-gray-600">This is a description paragraph.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Action Button</button>
      </>
    ),
    size: 'lg',
    alignment: 'center',
  },
}
