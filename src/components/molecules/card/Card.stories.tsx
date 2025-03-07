'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Chip } from '../../../components/atoms/chip';

const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
  argTypes: {
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// 기본 카드
export const Default: Story = {
  render: (args) => {
    return (
      <Card checked={args.checked}>
        <Card.Checkbox checked={args.checked} />
        <Card.TaskTitle>촬영 업체 선택 </Card.TaskTitle>
        <Card.CostSpan>400,000 원</Card.CostSpan>
        <Chip rounded='sm' size='sm'>
          2024.11.19
        </Chip>
        <Chip type='blue' rounded='sm' size='sm'>
          예랑
        </Chip>
      </Card>
    );
  },
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/cr2DuY0vceiMI5LlqWdKR2/Wedvice_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=1899-49502&t=st8bJ1H7LQ9alnmh-4',
  },
};

// 가격 없는 카드
export const NoPriceCard: Story = {
  render: (args) => {
    return (
      <Card checked={args.checked}>
        <Card.Checkbox checked={args.checked} />
        <Card.TaskTitle>촬영 업체 선택</Card.TaskTitle>
        <Chip rounded='sm' size='sm'>
          2024.11.19
        </Chip>
        <Chip type='blue' rounded='sm' size='sm'>
          예랑
        </Chip>
      </Card>
    );
  },
};

NoPriceCard.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/cr2DuY0vceiMI5LlqWdKR2/Wedvice_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=1899-49504&t=st8bJ1H7LQ9alnmh-4',
  },
};

// 체크 박스 없는 카드
export const NoCheckboxCard: Story = {
  render: (args) => {
    return (
      <Card checked={args.checked}>
        <Card.TaskTitle>촬영 업체 선택</Card.TaskTitle>
        <Card.CostSpan>400,000 원</Card.CostSpan>
        <Chip rounded='sm' size='sm'>
          2024.11.19
        </Chip>
        <Chip type='blue' rounded='sm' size='sm'>
          예랑
        </Chip>
      </Card>
    );
  },
};

NoCheckboxCard.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/cr2DuY0vceiMI5LlqWdKR2/Wedvice_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=1899-49526&t=st8bJ1H7LQ9alnmh-4',
  },
};

// 체크 박스, 가격 없는 카드
export const NoCheckboxAndNoCost: Story = {
  render: (args) => {
    return (
      <Card checked={args.checked}>
        <Card.TaskTitle>
          촬영 업체 선택촬영 업체 선택촬영 업체 선택촬영 업체 선택촬영 업체 선택
        </Card.TaskTitle>
        <Chip type='blue' rounded='sm' size='sm'>
          예랑
        </Chip>
      </Card>
    );
  },
};

NoCheckboxAndNoCost.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/cr2DuY0vceiMI5LlqWdKR2/Wedvice_%EB%94%94%EC%9E%90%EC%9D%B8?node-id=1899-49633&t=st8bJ1H7LQ9alnmh-4',
  },
};
