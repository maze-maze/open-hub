import type { Meta, StoryObj } from '@storybook/react'
import { ButtonGroup, ButtonGroupItem } from './button-group'

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A button group component that allows users to select single or multiple options from a set of toggle buttons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple', 'none'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    selectionMode: 'single',
  },
  render: args => (
    <ButtonGroup {...args}>
      <ButtonGroupItem>Option 1</ButtonGroupItem>
      <ButtonGroupItem>Option 2</ButtonGroupItem>
      <ButtonGroupItem>Option 3</ButtonGroupItem>
    </ButtonGroup>
  ),
}

export const Single: Story = {
  args: {
    selectionMode: 'single',
    defaultSelectedKeys: ['option1'],
  },
  render: args => (
    <ButtonGroup {...args}>
      <ButtonGroupItem id="option1">Option 1</ButtonGroupItem>
      <ButtonGroupItem id="option2">Option 2</ButtonGroupItem>
      <ButtonGroupItem id="option3">Option 3</ButtonGroupItem>
    </ButtonGroup>
  ),
}

export const Multiple: Story = {
  args: {
    selectionMode: 'multiple',
    defaultSelectedKeys: ['option1', 'option3'],
  },
  render: args => (
    <ButtonGroup {...args}>
      <ButtonGroupItem id="option1">Option 1</ButtonGroupItem>
      <ButtonGroupItem id="option2">Option 2</ButtonGroupItem>
      <ButtonGroupItem id="option3">Option 3</ButtonGroupItem>
    </ButtonGroup>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: args => (
    <ButtonGroup {...args}>
      <ButtonGroupItem>Option 1</ButtonGroupItem>
      <ButtonGroupItem>Option 2</ButtonGroupItem>
      <ButtonGroupItem>Option 3</ButtonGroupItem>
    </ButtonGroup>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup size="sm">
        <ButtonGroupItem>Small</ButtonGroupItem>
        <ButtonGroupItem>Small</ButtonGroupItem>
        <ButtonGroupItem>Small</ButtonGroupItem>
      </ButtonGroup>
      <ButtonGroup size="md">
        <ButtonGroupItem>Medium</ButtonGroupItem>
        <ButtonGroupItem>Medium</ButtonGroupItem>
        <ButtonGroupItem>Medium</ButtonGroupItem>
      </ButtonGroup>
      <ButtonGroup size="lg">
        <ButtonGroupItem>Large</ButtonGroupItem>
        <ButtonGroupItem>Large</ButtonGroupItem>
        <ButtonGroupItem>Large</ButtonGroupItem>
      </ButtonGroup>
    </div>
  ),
}
