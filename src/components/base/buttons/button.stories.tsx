import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

// アイコン用のコンポーネント
function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  )
}

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Modern button component with improved styling, built with React Aria Components and designed to match the existing design system.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'danger', 'danger-secondary'],
    },
    isLoading: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    showTextWhileLoading: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="tertiary">Tertiary</Button>
      <Button color="outline">Outline</Button>
      <Button color="danger">Danger</Button>
      <Button color="danger-secondary">Danger Secondary</Button>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button iconLeading={PlusIcon}>Create New</Button>
      <Button iconTrailing={ArrowRightIcon}>Continue</Button>
      <Button iconLeading={DownloadIcon} iconTrailing={ArrowRightIcon}>
        Download Now
      </Button>
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button iconLeading={HeartIcon} size="xs" />
      <Button iconLeading={PlusIcon} size="sm" />
      <Button iconLeading={DownloadIcon} size="md" />
      <Button iconLeading={ArrowRightIcon} size="lg" />
      <Button iconLeading={TrashIcon} size="xl" color="danger" />
    </div>
  ),
}

export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button isLoading>Loading</Button>
      <Button isLoading showTextWhileLoading>
        Loading with Text
      </Button>
      <Button isLoading color="secondary">
        Loading Secondary
      </Button>
      <Button isLoading iconLeading={DownloadIcon}>
        Downloading
      </Button>
    </div>
  ),
}

export const DisabledStates: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button isDisabled>Disabled Primary</Button>
      <Button isDisabled color="secondary">
        Disabled Secondary
      </Button>
      <Button isDisabled color="outline">
        Disabled Outline
      </Button>
      <Button isDisabled iconLeading={TrashIcon} color="danger">
        Disabled Danger
      </Button>
    </div>
  ),
}

export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Action Buttons</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button iconLeading={PlusIcon} color="primary">
            Add Item
          </Button>
          <Button iconLeading={DownloadIcon} color="secondary">
            Download
          </Button>
          <Button iconLeading={TrashIcon} color="danger">
            Delete
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Form Actions</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button color="primary">Save Changes</Button>
          <Button color="secondary">Cancel</Button>
          <Button iconTrailing={ArrowRightIcon} color="outline">
            Next Step
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Icon-only Actions</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button iconLeading={HeartIcon} size="sm" color="tertiary" />
          <Button iconLeading={DownloadIcon} size="sm" color="outline" />
          <Button iconLeading={TrashIcon} size="sm" color="danger-secondary" />
        </div>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  args: {
    children: 'Click me',
    color: 'primary',
    size: 'md',
  },
}
