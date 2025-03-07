import Upload from '@/assets/upload.svg';
import UploadActive from '@/assets/upload_active.svg';
import { CommentInput } from '@/components/molecules/comment';
import { ImageUploader } from './ImageUploader';

interface CommentBoxProps {
  text: string;
  setText: (text: string) => void;
}

export const CommentBox = ({ text, setText }: CommentBoxProps) => {
  const handleUploadText = () => {
    // text upload
    setText('');
  };

  return (
    <div className='absolute bottom-0 flex w-full items-center justify-between gap-3 bg-gray-100 px-5 py-2'>
      <ImageUploader />

      <CommentInput
        value={text}
        onChange={setText}
        placeholder='댓글 입력'
        minHeight={20}
        maxHeight={42}
        maxLineCount={3}
      />

      <div
        className={`cursor-pointer rounded-full p-2 ${text.trim() ? 'bg-primary-400' : 'bg-primary-100'}`}
        onClick={handleUploadText}
      >
        {text.trim() ? <UploadActive /> : <Upload />}
      </div>
    </div>
  );
};
