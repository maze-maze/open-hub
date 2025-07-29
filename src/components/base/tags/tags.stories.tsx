import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagGroup, TagList } from './tags'

const meta: Meta<typeof Tag> = {
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tag component for labeling, categorizing, and filtering content with support for selection, removal, and various visual indicators.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
    },
    dot: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TagGroup label="Default tags">
      <TagList>
        <Tag id="tag1">Design</Tag>
        <Tag id="tag2">Development</Tag>
        <Tag id="tag3">Marketing</Tag>
      </TagList>
    </TagGroup>
  ),
}

export const WithCount: Story = {
  render: () => (
    <TagGroup label="Tags with count">
      <TagList>
        <Tag id="tag1" count={12}>Design</Tag>
        <Tag id="tag2" count={8}>Development</Tag>
        <Tag id="tag3" count={24}>Marketing</Tag>
      </TagList>
    </TagGroup>
  ),
}

export const WithDot: Story = {
  render: () => (
    <TagGroup label="Tags with dot">
      <TagList>
        <Tag id="tag1" dot>Active</Tag>
        <Tag id="tag2" dot>Pending</Tag>
        <Tag id="tag3" dot>Completed</Tag>
      </TagList>
    </TagGroup>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <TagGroup label="Tags with avatar">
      <TagList>
        <Tag
          id="tag1"
          avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        >
          Tom Cook
        </Tag>
        <Tag
          id="tag2"
          avatarSrc="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        >
          Emily Chen
        </Tag>
      </TagList>
    </TagGroup>
  ),
}

export const Closable: Story = {
  render: () => (
    <TagGroup label="Closable tags">
      <TagList>
        <Tag id="tag1" onClose={() => {}}>Closable</Tag>
        <Tag id="tag2" onClose={() => {}}>Remove me</Tag>
        <Tag id="tag3" onClose={() => {}}>Delete</Tag>
      </TagList>
    </TagGroup>
  ),
}

export const Selectable: Story = {
  render: () => (
    <TagGroup label="Selectable tags" selectionMode="multiple">
      <TagList>
        <Tag id="design">Design</Tag>
        <Tag id="development">Development</Tag>
        <Tag id="marketing">Marketing</Tag>
        <Tag id="sales">Sales</Tag>
      </TagList>
    </TagGroup>
  ),
}

export const SingleSelection: Story = {
  render: () => (
    <TagGroup label="Single selection tags" selectionMode="single">
      <TagList>
        <Tag id="option1">Option 1</Tag>
        <Tag id="option2">Option 2</Tag>
        <Tag id="option3">Option 3</Tag>
      </TagList>
    </TagGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Small</h3>
        <TagGroup label="Small tags" size="sm">
          <TagList>
            <Tag id="tag1">Small</Tag>
            <Tag id="tag2" count={5}>With Count</Tag>
            <Tag id="tag3" dot>With Dot</Tag>
          </TagList>
        </TagGroup>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Medium</h3>
        <TagGroup label="Medium tags" size="md">
          <TagList>
            <Tag id="tag4">Medium</Tag>
            <Tag id="tag5" count={5}>With Count</Tag>
            <Tag id="tag6" dot>With Dot</Tag>
          </TagList>
        </TagGroup>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Large</h3>
        <TagGroup label="Large tags" size="lg">
          <TagList>
            <Tag id="tag7">Large</Tag>
            <Tag id="tag8" count={5}>With Count</Tag>
            <Tag id="tag9" dot>With Dot</Tag>
          </TagList>
        </TagGroup>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <TagGroup label="Disabled tags">
      <TagList>
        <Tag id="tag1">Normal</Tag>
        <Tag id="tag2" isDisabled>Disabled</Tag>
        <Tag id="tag3">Normal</Tag>
      </TagList>
    </TagGroup>
  ),
}

export const Complex: Story = {
  render: () => (
    <TagGroup label="Complex tags" selectionMode="multiple" size="md">
      <TagList>
        <Tag
          id="tag1"
          avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          count={12}
          onClose={() => {}}
        >
          Tom Cook
        </Tag>
        <Tag
          id="tag2"
          dot
          count={8}
          onClose={() => {}}
        >
          Active Project
        </Tag>
        <Tag id="tag3" count={24}>Marketing</Tag>
      </TagList>
    </TagGroup>
  ),
}
