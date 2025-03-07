import {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { textAreaVariants } from '@/components/atoms/textArea/TextArea';

interface CommentInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight: number;
  maxHeight?: number;
  maxLineCount?: number;
}

export const CommentInput = ({
  value,
  onChange,
  placeholder,
  minHeight,
  maxHeight = minHeight,
  maxLineCount,
  ...props
}: CommentInputProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [paddingTop, setPaddingTop] = useState<number | null>(null);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    if (!wrapperRef.current) return;
    const computedStyle = window.getComputedStyle(wrapperRef.current);
    setPaddingTop(parseInt(computedStyle.paddingTop, 10) || null);
  }, []);

  useLayoutEffect(() => {
    const textArea = textAreaRef.current;
    const wrapper = wrapperRef.current;
    if (!textArea || !wrapper || paddingTop === null) return;

    const { scrollHeight, clientHeight } = textArea;
    textArea.style.height = `${minHeight}px`;

    // 한 줄만 있을 때는 minHeight 유지
    if (scrollHeight === clientHeight) {
      wrapper.style.paddingTop = `${paddingTop}px`;
      return;
    }

    const lineCount = Math.floor(
      scrollHeight / parseInt(window.getComputedStyle(textArea).lineHeight, 10),
    );

    if (maxLineCount && lineCount >= maxLineCount) {
      textArea.style.height = `${maxHeight + paddingTop}px`;
      wrapper.style.paddingTop = '0px';
    } else {
      textArea.style.height = `${lineCount === 1 ? minHeight : maxHeight}px`;
      wrapper.style.paddingTop = `${paddingTop}px`;
    }
  }, [value, paddingTop]);

  return (
    <div
      ref={wrapperRef}
      className={'flex w-full rounded-md bg-gray-200 px-3 py-2'}
    >
      <textarea
        ref={textAreaRef}
        value={value}
        onChange={handleTextChange}
        placeholder={placeholder}
        className={textAreaVariants({
          variant: value.trim() ? 'main' : 'none',
        })}
        style={{
          height: `${minHeight}px`,
          minHeight: `${minHeight}px`,
          maxHeight: maxLineCount ? undefined : `${maxHeight}px`,
        }}
        {...props}
      />
    </div>
  );
};
