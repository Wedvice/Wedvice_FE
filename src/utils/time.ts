// 시간 및 날짜를 포맷팅하는 util 함수들을 정의합니다.

/**
 * time 문자열을 Date 객체로 생성한 뒤 yyyy.MM.dd 형식으로 변환
 * 2025.02.27
 */
export const getFormattedTime = (time: string) => {
  const timeDate = new Date(time);

  const year = timeDate.getFullYear();
  const month = `0${(timeDate.getMonth() + 1).toString()}`.slice(-2);
  const date = `0${timeDate.getDate().toString()}`.slice(-2);

  return `${year}.${month}.${date}`;
};

/**
 * time 문자열을 Date 객체로 생성한 뒤 yyyy년 MM월 형식으로 변환
 * 2025년 02월
 */
export const getFormattedYearMonth = (time: string) => {
  const timeDate = new Date(time);

  const year = timeDate.getFullYear();
  const month = `0${timeDate.getMonth() + 1}`.slice(-2);

  return `${year}년 ${month}월`;
};
