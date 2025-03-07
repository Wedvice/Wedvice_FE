import { useState } from 'react';
import Plus from '@/assets/plus.svg';

export const ImageUploader = () => {
  const [images, setImages] = useState<string[]>([]);
  const [showGallery, setShowGallery] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);
    const fileArray = files.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...fileArray]);
    setShowGallery(true);
  };

  const openNativeGallery = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleDeleteImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleGalleryClose = () => {
    // 선택한 사진 닫는 기능
    setImages([]);
    setShowGallery(false);
  };

  const handleUploadImage = () => {
    // upload Image : images 변수에 저장되어 있음
    setImages([]);
    setShowGallery(false);
  };

  return (
    <>
      <input
        type='file'
        accept='image/*'
        multiple
        id='fileInput'
        className='hidden'
        onChange={handleImageUpload}
      />

      <div
        className='cursor-pointer rounded-full bg-gray-200 p-2'
        onClick={openNativeGallery}
      >
        <Plus />
      </div>

      {showGallery && (
        <div className='absolute bottom-0 left-0 z-50 w-full rounded-t-2xl bg-gray-200 py-5 shadow-lg'>
          <div className='flex items-center justify-between px-5 py-[4.5px] text-center text-lg font-medium text-white'>
            <button
              className='h-8 w-[52px] text-gray-600'
              onClick={handleGalleryClose}
            >
              닫기
            </button>
            <span>선택한 사진</span>
            <button
              className='h-8 w-[52px] rounded-full bg-primary-400 text-base'
              onClick={handleUploadImage}
            >
              전송
            </button>
          </div>

          <div className='mt-2 grid grid-cols-3 gap-[3px]'>
            {images.map((src, index) => (
              <div key={index} className='relative'>
                <img
                  src={src}
                  alt='업로드 하고자 하는 사진'
                  className='h-32 w-full object-cover'
                />
                <button
                  className='absolute right-1 top-1 h-6 w-6 rounded-full bg-red-500 text-xs text-white'
                  onClick={() => handleDeleteImage(index)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
