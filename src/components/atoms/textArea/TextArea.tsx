import { ChangeEvent, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { isValidText } from '@/utils/validation';

export const textAreaVariants = cva(
  'w-full resize-none overflow-hidden text-ellipsis bg-transparent leading-5 focus:outline-none focus:ring-0',
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
  ({ value, onChange, maxLength, placeholder, ...props }, ref) => {
    const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target;

      if (
        value === '' ||
        (isValidText(value) && (!maxLength || value.length <= maxLength))
      ) {
        onChange(value);
      }
    };

    return (
      <div ref={ref} className='w-full gap-2 rounded-lg bg-gray-100 p-5'>
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

        {maxLength && (
          <span
            className={`flex justify-end text-[14px] leading-[18px] ${value.trim() ? 'text-gray-600' : 'text-gray-400'}`}
          >{`${value.length}/${maxLength}`}</span>
        )}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
export default TextArea;
