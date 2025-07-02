import { PropsWithChildren } from 'react';

interface ModalProps {
  onClose: () => void;
}

export const Modal = ({ onClose, children }: PropsWithChildren<ModalProps>) => {
  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
      onClick={onClose}
    >
      <div
        className='rounded-lg bg-gray-200 p-5 shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
