import type { Meta, StoryObj } from '@storybook/react';
import CommentImage from '@/assets/images/comment_image.png';
import DefaultProfile from '@/assets/images/default_profile.png';
import { Comment } from './';

const meta: Meta<typeof Comment> = {
  title: 'Components/Comment',
  component: Comment,
};

export default meta;
type Story = StoryObj<typeof Comment>;

// 기본 카드
export const Default: Story = {
  args: {
    name: '예신',
    text: '여기 완전 좋다 그치? 여기로 가볼까?',
    time: new Date(),
    profile: DefaultProfile,
    images: [
      CommentImage,
      CommentImage,
      CommentImage,
      CommentImage,
      CommentImage,
      CommentImage,
      CommentImage,
      CommentImage,
      CommentImage,
    ],
  },
  decorators: [
    (Story) => (
      <div className='w-[350px]'>
        <Story />
      </div>
    ),
  ],
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/cr2DuY0vceiMI5LlqWdKR2/Wedvice_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=1493-6711&t=C1C6AY6noGiQkf3h-4',
  },
};
