interface ManagerSelectProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const managerMap = [
  { name: '함께', bgColor: 'bg-primary-400' },
  { name: '예신', bgColor: 'bg-pink' },
  { name: '예랑', bgColor: 'bg-blue' },
];

export const ManagerSelect = ({
  selectedValue,
  setSelectedValue,
}: ManagerSelectProps) => {
  return (
    <div className='flex w-full items-center justify-between rounded-lg bg-gray-100 p-5'>
      <span className='font-medium text-white'>담당자</span>
      <div className='flex gap-2'>
        {managerMap.map(({ name, bgColor }) => (
          <div
            key={name}
            className={`flex h-8 w-[52px] cursor-pointer items-center justify-center rounded-full ${name === selectedValue ? `text-white ${bgColor}` : 'bg-gray-200 text-gray-500'} `}
            onClick={() => setSelectedValue(name)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
