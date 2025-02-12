import { cva } from 'class-variance-authority';
import { ChangeEvent, forwardRef } from 'react';

const textAreaVariants = cva(
  'h-[105px] w-full resize-none overflow-hidden text-ellipsis bg-transparent focus:outline-none focus:ring-0',
  {
    variants: {
      variant: {
        main: 'text-white',
        none: 'text-gray-500 placeholder-gray-500',
      },
    },
    defaultVariants: {
      variant: 'main',
    },
  },
);

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
}

export const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(
  ({ value, onChange, maxLength = 100, placeholder, ...props }, ref) => {
    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target;

      onChange(value);
    };

    return (
      <div ref={ref} className='w-[350px] gap-2 rounded-lg bg-gray-100 p-5'>
        <textarea
          value={value}
          onChange={handleOnChange}
          maxLength={maxLength}
          placeholder={placeholder}
          className={textAreaVariants({
            variant: value.trim() ? 'main' : 'none',
          })}
          {...props}
        />
        <span
          className={`flex justify-end text-[14px] ${value.trim() ? 'text-gray-600' : 'text-gray-400'}`}
        >{`${value.length}/${maxLength}`}</span>
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
export default TextArea;
