// 한글, 영어, 숫자, 공백(' ')만 허용하는 정규식
const validTextRegExp = /^[\p{L}\p{N} ]+$/u;

export const isValidText = (input: string) => {
  return validTextRegExp.test(input);
};
