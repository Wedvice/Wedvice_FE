export const CommentDropdown = () => {
  return (
    <div className='h-25 absolute right-0 top-4 w-28 rounded-md bg-gray-200 font-pretendard text-white shadow-lg'>
      <button className='w-full py-3 text-center'>수정하기</button>
      <div className='border-[1px] border-gray-300' />
      <button className='w-full py-3 text-center'>삭제하기</button>
    </div>
  );
};
