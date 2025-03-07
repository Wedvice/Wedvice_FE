import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const BasicModal: Story = {
  args: {
    children: (
      <div className='flex w-[320px] flex-col items-center justify-center'>
        <span className='text-lg text-white'>Title</span>

        <span className='pb-5 pt-3 text-sm text-gray-700'>Description</span>

        <div className='flex w-full justify-center gap-4'>
          <button className='h-[52px] w-[130px] rounded-md bg-gray-300 text-gray-800'>
            Text
          </button>
          <button className='h-[52px] w-[130px] rounded-md bg-red-200 text-white'>
            Text
          </button>
        </div>
      </div>
    ),
  },
};

BasicModal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/cr2DuY0vceiMI5LlqWdKR2/Wedvice_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=1403-38040&t=st8bJ1H7LQ9alnmh-4',
  },
};

export const ConfirmModal: Story = {
  args: {
    children: (
      <div className='flex w-[330px] flex-col justify-center'>
        <span className='text-lg font-bold text-white'>Title</span>

        <span className='pb-5 pt-3 text-sm text-gray-700'>Description</span>

        <div className='flex w-full justify-end gap-4'>
          <button className='h-[34px] w-[56px] rounded-md bg-gray-300 text-gray-800'>
            Text
          </button>
        </div>
      </div>
    ),
  },
};

ConfirmModal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/cr2DuY0vceiMI5LlqWdKR2/Wedvice_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=2294-24792&t=st8bJ1H7LQ9alnmh-4',
  },
};
