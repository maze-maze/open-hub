import type { Meta, StoryObj } from '@storybook/react'
import { Star01 } from '@untitledui/icons'
import { FeaturedIcon } from './featured-icons'

const meta: Meta<typeof FeaturedIcon> = {
  component: FeaturedIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['brand', 'gray', 'success', 'warning', 'error'],
    },
    theme: {
      control: 'select',
      options: ['light', 'gradient', 'dark', 'outline', 'modern', 'modern-neue'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: Star01,
    size: 'md',
    color: 'brand',
    theme: 'light',
  },
}

export const Light: Story = {
  args: {
    icon: Star01,
    theme: 'light',
    color: 'brand',
  },
}

export const Gradient: Story = {
  args: {
    icon: Star01,
    theme: 'gradient',
    color: 'brand',
  },
}

export const Dark: Story = {
  args: {
    icon: Star01,
    theme: 'dark',
    color: 'brand',
  },
}

export const Modern: Story = {
  args: {
    icon: Star01,
    theme: 'modern',
    color: 'gray',
  },
}

export const ModernNeue: Story = {
  args: {
    icon: Star01,
    theme: 'modern-neue',
    color: 'gray',
  },
}

export const Outline: Story = {
  args: {
    icon: Star01,
    theme: 'outline',
    color: 'brand',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <FeaturedIcon icon={Star01} size="sm" color="brand">
        <span className="sr-only">Small</span>
      </FeaturedIcon>
      <FeaturedIcon icon={Star01} size="md" color="brand">
        <span className="sr-only">Medium</span>
      </FeaturedIcon>
      <FeaturedIcon icon={Star01} size="lg" color="brand">
        <span className="sr-only">Large</span>
      </FeaturedIcon>
      <FeaturedIcon icon={Star01} size="xl" color="brand">
        <span className="sr-only">Extra Large</span>
      </FeaturedIcon>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <FeaturedIcon icon={Star01} color="brand" />
      <FeaturedIcon icon={Star01} color="gray" />
      <FeaturedIcon icon={Star01} color="success" />
      <FeaturedIcon icon={Star01} color="warning" />
      <FeaturedIcon icon={Star01} color="error" />
    </div>
  ),
}

export const Themes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon icon={Star01} theme="light" color="brand" />
        <span className="text-xs">Light</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon icon={Star01} theme="gradient" color="brand" />
        <span className="text-xs">Gradient</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon icon={Star01} theme="dark" color="brand" />
        <span className="text-xs">Dark</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon icon={Star01} theme="modern" color="gray" />
        <span className="text-xs">Modern</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon icon={Star01} theme="modern-neue" color="gray" />
        <span className="text-xs">Modern Neue</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <FeaturedIcon icon={Star01} theme="outline" color="brand" />
        <span className="text-xs">Outline</span>
      </div>
    </div>
  ),
}
