import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../buttons/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card/card'
import { Dialog, DialogTrigger, Modal, ModalOverlay } from './modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
⚠️ **Work in Progress Component** ⚠️

Modal component for displaying content in an overlay dialog with backdrop and focus management.
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <DialogTrigger>
      <Button>Open Modal</Button>
      <ModalOverlay>
        <Modal>
          <Dialog>
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Modal Title</CardTitle>
                <CardDescription>
                  This is a simple modal dialog example.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the modal content. You can put any content here.</p>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  <Button color="secondary">Cancel</Button>
                  <Button>Confirm</Button>
                </div>
              </CardFooter>
            </Card>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  ),
}

export const SimpleContent: Story = {
  render: () => (
    <DialogTrigger>
      <Button>Open Simple Modal</Button>
      <ModalOverlay>
        <Modal>
          <Dialog>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 className="text-lg font-semibold mb-4">Simple Modal</h2>
              <p className="mb-4">This is a simple modal with basic content.</p>
              <Button>Close</Button>
            </div>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  ),
}

export const LargeModal: Story = {
  render: () => (
    <DialogTrigger>
      <Button>Open Large Modal</Button>
      <ModalOverlay>
        <Modal>
          <Dialog>
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>Large Modal</CardTitle>
                <CardDescription>
                  This is a larger modal with more content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>This modal contains more content and takes up more space.</p>
                  <p>You can include forms, images, or any other content here.</p>
                  <div className="bg-gray-50 p-4 rounded">
                    <h3 className="font-medium mb-2">Example Section</h3>
                    <p>This is an example of additional content within the modal.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2 w-full justify-end">
                  <Button color="secondary">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </CardFooter>
            </Card>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  ),
}

export const DestructiveAction: Story = {
  render: () => (
    <DialogTrigger>
      <Button color="danger">Delete Item</Button>
      <ModalOverlay>
        <Modal>
          <Dialog>
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Delete Item</CardTitle>
                <CardDescription>
                  Are you sure you want to delete this item? This action cannot be undone.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex gap-2 w-full justify-end">
                  <Button color="secondary">Cancel</Button>
                  <Button color="danger">Delete</Button>
                </div>
              </CardFooter>
            </Card>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  ),
}
