import Close from '@/assets/wed_icon/icon_20/close_default.svg';
import { BottomSheet } from '@/components/atoms/bottomSheet';
import { ChangeEvent, useEffect, useRef } from 'react';

const DEFAULT_BOTTOM_SHEET_HEIGHT = 290;
const MAX_IMAGE = 9;

interface BottomContentProps {
  images: string[];
  setImages: (images: string[]) => void;
  showGallery: boolean;
  setShowGallery: (value: boolean) => void;
  setBottomSheetHeight: (height: number) => void;
}

export const BottomContent = ({
  images,
  showGallery,
  setImages,
  setShowGallery,
  setBottomSheetHeight,
}: BottomContentProps) => {
  const observerRef = useRef<MutationObserver | null>(null);
  const isFirstOpenRef = useRef(true);

  useEffect(() => {
    if (!showGallery && observerRef.current) {
      isFirstOpenRef.current = true;
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, [showGallery]);

  const observeHeightChanges = () => {
    const bottomSheetElement = document.querySelector(
      '[data-rsbs-root="true"]',
    ) as HTMLElement;

    if (!bottomSheetElement) {
      return;
    }

    observerRef.current?.disconnect();

    observerRef.current = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'style') {
          if (isFirstOpenRef.current) {
            setBottomSheetHeight(DEFAULT_BOTTOM_SHEET_HEIGHT);
            return;
          }

          const computedStyle = getComputedStyle(bottomSheetElement);
          const newHeight = parseInt(
            computedStyle.getPropertyValue('--rsbs-overlay-h'),
            10,
          );
          const translateY = parseInt(
            computedStyle.getPropertyValue('--rsbs-overlay-translate-y'),
            10,
          );

          setBottomSheetHeight(
            newHeight === DEFAULT_BOTTOM_SHEET_HEIGHT
              ? newHeight - translateY
              : newHeight,
          );
        }
      });
    });

    observerRef.current.observe(bottomSheetElement, {
      attributes: true,
      attributeOldValue: true,
    });
  };

  const handleSpringStart = () => {
    observeHeightChanges();
  };

  const handleSpringEnd = () => {
    if (showGallery) {
      isFirstOpenRef.current = false;
    }
  };

  return (
    <BottomSheet
      open={showGallery}
      onSpringStart={handleSpringStart}
      onSpringEnd={handleSpringEnd}
      onDismiss={() => setShowGallery(false)}
      snapPoints={({ maxHeight }) => [DEFAULT_BOTTOM_SHEET_HEIGHT, maxHeight]}
      defaultSnap={() => DEFAULT_BOTTOM_SHEET_HEIGHT}
      blocking={false}
      header={
        <BottomSheetHeader
          images={images}
          setImages={setImages}
          setShowGallery={setShowGallery}
        />
      }
    >
      <BottomSheetContent images={images} setImages={setImages} />
    </BottomSheet>
  );
};

const BottomSheetHeader = ({
  images,
  setImages,
  setShowGallery,
}: {
  images: string[];
  setImages: (images: string[]) => void;
  setShowGallery: (value: boolean) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const openNativeGallery = () => {
    inputRef.current?.click();
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const fileArray = Array.from(event.target.files).map((file) =>
      URL.createObjectURL(file),
    );
    setImages(images ? [...images, ...fileArray] : [...fileArray]);
    setShowGallery(true);
  };

  return (
    <div className='flex items-center justify-between px-1 text-lg font-medium'>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        multiple
        className='hidden'
        onChange={handleImageUpload}
      />

      <div>
        <span className='text-white'>사진</span>
        <span className='ml-3 tracking-[2px] text-gray-700'>
          <span className='text-primary-500'>{images?.length ?? 0}</span>/
          {MAX_IMAGE}
        </span>
      </div>

      <button
        className='h-[34px] w-[83px] rounded-md bg-gray-300 text-sm text-gray-800'
        onClick={openNativeGallery}
      >
        사진 찾기
      </button>
    </div>
  );
};

const BottomSheetContent = ({
  images,
  setImages,
}: {
  images: string[];
  setImages: (images: string[]) => void;
}) => {
  return images.length ? (
    <div className='mt-2 grid grid-cols-3 gap-[3px]'>
      {images.map((src, index) => (
        <div key={index} className='relative'>
          <img
            src={src}
            alt={`User Update Image ${src}`}
            className='h-32 w-full object-cover'
          />
          <button
            className='absolute right-2 top-2 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-gray-50'
            onClick={() => setImages(images.filter((_, i) => i !== index))}
          >
            <Close />
          </button>
        </div>
      ))}
    </div>
  ) : (
    <div className='mt-[74px] text-center'>
      <span className='text-base text-gray-600'>
        앨범에서 사진을 찾아보세요.
      </span>
    </div>
  );
};
