interface DropdownOptions {
  label: string;
  onClick?: () => void;
}
interface DropdownProps {
  options: DropdownOptions[];
}

export const Dropdown = ({ options }: DropdownProps) => {
  return (
    <div className='absolute right-0 top-4 w-28 rounded-md bg-gray-200 font-pretendard text-white shadow-lg'>
      {options.map((option, index) => (
        <div key={option.label}>
          {index > 0 && <div className='border-t border-gray-300' />}
          <button className='w-full py-3 text-center' onClick={option?.onClick}>
            {option.label}
          </button>
        </div>
      ))}
    </div>
  );
};
