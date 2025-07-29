import type { Meta, StoryObj } from '@storybook/react'
import Center from './center'

const meta: Meta<typeof Center> = {
  component: Center,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Center component for horizontally and vertically centering content using flexbox.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="bg-blue-100 p-4 rounded">
        Centered Content
      </div>
    ),
  },
}

export const WithText: Story = {
  args: {
    children: <p className="text-lg font-semibold">This text is centered</p>,
  },
}

export const WithCard: Story = {
  args: {
    children: (
      <div className="bg-white border rounded-lg p-6 shadow-sm max-w-sm">
        <h3 className="font-semibold mb-2">Centered Card</h3>
        <p className="text-gray-600">This card is perfectly centered in its container.</p>
      </div>
    ),
  },
}

export const FullHeight: Story = {
  render: () => (
    <div className="h-96 border rounded">
      <Center className="h-full">
        <div className="bg-green-100 p-6 rounded">
          <h3 className="font-semibold">Full Height Center</h3>
          <p>This content is centered in a full height container</p>
        </div>
      </Center>
    </div>
  ),
}

export const MultipleItems: Story = {
  args: {
    children: (
      <div className="space-x-4 flex">
        <div className="bg-red-100 p-3 rounded">Item 1</div>
        <div className="bg-yellow-100 p-3 rounded">Item 2</div>
        <div className="bg-blue-100 p-3 rounded">Item 3</div>
      </div>
    ),
  },
}
