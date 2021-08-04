// 驼峰转换下划线
export function toLine (name) {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase()
}