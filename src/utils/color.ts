export function getContrastColor(hexColor: string): string {
  // #을 제거
  const hex = hexColor.replace("#", "");

  // RGB 값 추출
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // 밝기 계산 (YIQ 공식)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // 밝기에 따라 검정(#000) 또는 흰색(#fff) 선택
  return brightness > 128 ? "#000000" : "#ffffff";
}
