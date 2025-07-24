import { TabType } from '@/components/molecules/homeList/HomeListTab';

export type ListItem = { title: string; date: string };

export type TabListData = {
  todo?: ListItem[];
  done?: ListItem[];
};

export const mockData: Record<TabType, TabListData> = {
  together: {
    todo: [
      { title: '함께 준비할 리스트 1', date: '2025.07.21' },
      { title: '함께 준비할 리스트 2', date: '2025.07.24' },
      { title: '함께 준비할 리스트 3', date: '2025.07.23' },
      { title: '함께 준비할 리스트 4', date: '2025.07.10' },
    ],
    done: [{ title: '함께 완료한 리스트', date: '2025.07.22' }],
  },
  bride: {
    todo: [
      { title: '예신 준비할 리스트 1', date: '2025.07.21' },
      { title: '예신 준비할 리스트 2', date: '2025.07.24' },
      { title: '예신 준비할 리스트 3', date: '2025.07.23' },
    ],
    done: [{ title: '예신 완료한 리스트', date: '2025.07.21' }],
  },
  groom: {
    done: [{ title: '예랑 완료한 리스트', date: '2025.07.23' }],
  },
};
