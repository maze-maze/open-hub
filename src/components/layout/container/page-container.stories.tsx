import type { Meta, StoryObj } from '@storybook/react'
import PageContainer from './page-container'

const meta: Meta<typeof PageContainer> = {
  component: PageContainer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Page container component that provides consistent page-level layout with top padding and responsive container behavior.',
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
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Page Title</h1>
        <p className="text-gray-600">
          This is content inside a PageContainer. It automatically handles responsive layout,
          top padding for fixed headers, and consistent spacing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded">Card 1</div>
          <div className="bg-gray-100 p-4 rounded">Card 2</div>
        </div>
      </div>
    ),
  },
}

export const WithContent: Story = {
  args: {
    children: (
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to your dashboard</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Total Users</h3>
            <p className="text-2xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Revenue</h3>
            <p className="text-2xl font-bold text-green-600">$12,345</p>
          </div>
          <div className="bg-white border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Orders</h3>
            <p className="text-2xl font-bold text-purple-600">456</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-white border rounded-lg p-6">
            <p>This would contain recent activity content...</p>
          </div>
        </section>
      </div>
    ),
  },
}
