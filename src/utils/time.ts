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

export const detailDate = (pastTime: Date) => {
  const milliSeconds =
    new Date().getMilliseconds() - pastTime.getMilliseconds();
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
};
