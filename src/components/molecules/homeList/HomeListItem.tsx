'use client';

type Size = 'small' | 'medium';

const sizeConfig = {
  small: {
    wrapper: 'w-[334px] h-[63px]',
    padding: 'py-2 px-3',
    titleSize: 'text-base',
    round: 'rounded-md',
  },
  medium: {
    wrapper: 'w-[350px] h-[89px]',
    padding: 'p-5',
    titleSize: 'text-lg',
    round: 'rounded-lg',
  },
} as const;

interface HomeListProps {
  size?: Size;
  title: string;
  date?: string;
}

export const HomeListItem = ({
  size = 'medium',
  title,
  date,
}: HomeListProps): JSX.Element => {
  const { wrapper, padding, round, titleSize } = sizeConfig[size];

  return (
    <div
      className={`${wrapper} ${padding} ${round} bg-gray-100 font-medium active:bg-gray-200`}
    >
      <div className={`${titleSize} text-white`}>{title}</div>
      {date && (
        <div className='mt-2 text-sm leading-[18px] text-gray-600'>{date}</div>
      )}
    </div>
  );
};
