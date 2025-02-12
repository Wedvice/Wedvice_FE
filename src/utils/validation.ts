// 한글, 영어, 숫자, 공백만 허용하는 정규식
const validTextRegExp = /^[\p{L}\p{N}\s]+$/u;

export const isValidText = (input: string) => {
  return validTextRegExp.test(input);
};
