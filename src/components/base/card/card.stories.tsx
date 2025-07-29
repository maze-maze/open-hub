import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component with header, content, and footer sections for organizing related information.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <p>Card footer content.</p>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-96">
      <CardContent>
        <p>This is a simple card with just content.</p>
      </CardContent>
    </Card>
  ),
}

export const WithHeaderOnly: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Header Only Card</CardTitle>
        <CardDescription>This card only has a header section.</CardDescription>
      </CardHeader>
    </Card>
  ),
}

export const WithFooterOnly: Story = {
  render: () => (
    <Card className="w-96">
      <CardContent>
        <p>Card with footer</p>
      </CardContent>
      <CardFooter>
        <p>Footer content</p>
      </CardFooter>
    </Card>
  ),
}

export const Complex: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Complex Card</CardTitle>
        <CardDescription>
          This is a more complex card with all sections filled out with various content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p>This card demonstrates all the different sections working together.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <span>Updated 2 hours ago</span>
          <span>View details →</span>
        </div>
      </CardFooter>
    </Card>
  ),
}
