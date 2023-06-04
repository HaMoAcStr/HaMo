// 驼峰命名转中划线命名
export const camelCaseToLine = (v: string): string => {
  return v.replace(/([A-Z])/g, '-$1').toLowerCase()
}
