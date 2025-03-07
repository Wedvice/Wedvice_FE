import { PropsWithChildren } from 'react';

interface ModalProps {
  onClose: () => void;
}

export const Modal = ({ onClose, children }: PropsWithChildren<ModalProps>) => {
  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black/50'
      onClick={onClose}
    >
      <div
        className='bg-gray-200 p-5 rounded-lg shadow-lg'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
