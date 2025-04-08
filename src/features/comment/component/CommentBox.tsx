import { useState } from 'react';
import { BottomContent } from './BottomContent';
import { TextFieldBottom } from './TextFieldBottom';

export const CommentBox = () => {
  const [text, setText] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [showGallery, setShowGallery] = useState(false);
  const [bottomSheetHeight, setBottomSheetHeight] = useState(0);

  const handleUpload = () => {
    // text, image upload
    if (text.trim()) {
      setText('');
    }
    if (showGallery && images.length > 0) {
      setImages([]);
      setShowGallery(false);
    }
  };

  return (
    <div
      className='absolute bottom-[34px] w-full'
      style={{ bottom: showGallery ? `${bottomSheetHeight}px` : '34px' }}
    >
      <TextFieldBottom
        text={text}
        setText={setText}
        showGallery={showGallery}
        setShowGallery={setShowGallery}
        handleUpload={handleUpload}
      />

      <BottomContent
        images={images}
        setImages={setImages}
        showGallery={showGallery}
        setShowGallery={setShowGallery}
        setBottomSheetHeight={setBottomSheetHeight}
      />
    </div>
  );
};
