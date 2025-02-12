// 메모 기능에서 사용하는 타입들을 정의힙니다.

export type MemoSize = 'small' | 'medium';

type SizeConfigItem = {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
};
//

// 정의된 size에 따른 최대/최소 크기 정보
export const SIZE_CONFIG: Record<MemoSize, SizeConfigItem> = {
  small: { minWidth: 58, maxWidth: 155, minHeight: 34, maxHeight: 52 },
  medium: { minWidth: 63, maxWidth: 173, minHeight: 37, maxHeight: 58 },
};

// textarea 사이즈 타입
export type Dimensions = {
  width: number;
  height: number;
};

// textarea의 크기를 업데이트 한 후 반환되는 타입
export type UpdateDimensions = {
  width: number;
  height: number;
  textHeight: number;
  maxTextHeight: number;
};
