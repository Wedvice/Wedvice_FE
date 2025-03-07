import { isValidText } from '@/utils/validation';
import { cva } from 'class-variance-authority';
import { ChangeEvent, forwardRef } from 'react';

const textInputVariants = cva(
  'flex-1 bg-transparent focus:outline-none focus:ring-0',
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

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
}

export const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  ({ value, onChange, maxLength, placeholder, ...props }, ref) => {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (
        value === '' ||
        (isValidText(value) && (!maxLength || value.length <= maxLength))
      ) {
        onChange(value);
      }
    };

    return (
      <div
        ref={ref}
        className='flex w-full items-center justify-between gap-[38px] rounded-lg bg-gray-100 p-5'
      >
        <input
          type='text'
          value={value}
          onChange={handleOnChange}
          maxLength={maxLength}
          placeholder={placeholder}
          className={textInputVariants({
            variant: value.trim() ? 'main' : 'none',
          })}
          {...props}
        />

        {maxLength && (
          <span
            className={`text-[14px] ${value.trim() ? 'text-gray-600' : 'text-gray-400'}`}
          >{`${value.length}/${maxLength}`}</span>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
export default TextInput;
