import type { Meta, StoryObj } from '@storybook/react'
import { User01 } from '@untitledui/icons'
import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatar component for displaying user profile images, initials, or placeholder icons with various sizes and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline'],
    },
    verified: {
      control: 'boolean',
    },
    contrastBorder: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    alt: 'User avatar',
  },
}

export const WithImage: Story = {
  args: {
    size: 'md',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'Tom Cook',
  },
}

export const WithInitials: Story = {
  args: {
    size: 'md',
    initials: 'TC',
    alt: 'Tom Cook',
  },
}

export const WithIcon: Story = {
  args: {
    size: 'md',
    placeholderIcon: User01,
    alt: 'User',
  },
}

export const WithStatus: Story = {
  args: {
    size: 'md',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
    alt: 'Tom Cook',
  },
}

export const Verified: Story = {
  args: {
    size: 'md',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    verified: true,
    alt: 'Tom Cook',
  },
}

export const WithContrastBorder: Story = {
  args: {
    size: 'md',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    contrastBorder: true,
    alt: 'Tom Cook',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xxs" initials="XS" />
      <Avatar size="xs" initials="XS" />
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
      <Avatar size="xl" initials="XL" />
      <Avatar size="2xl" initials="2XL" />
    </div>
  ),
}

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="md"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        status="online"
        alt="Online user"
      />
      <Avatar
        size="md"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        status="offline"
        alt="Offline user"
      />
    </div>
  ),
}

export const Complex: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="lg"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        status="online"
        verified={true}
        contrastBorder={true}
        alt="Verified online user"
      />
    </div>
  ),
}
