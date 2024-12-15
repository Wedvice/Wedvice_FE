import type { Preview } from '@storybook/react';
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Dark', // 기본 테마 설정
      values: [
        // 선택 가능한 테마 설정
        { name: 'Dark', value: '#17181C' },
        { name: 'Light', value: '#FFFFFF' },
      ],
    },
  },
};

export default preview;
