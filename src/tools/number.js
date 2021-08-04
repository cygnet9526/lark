
// 转换数字 null 和 '' 都转成 0 处理
export function toNumber(val, defaultVal){
	const n = Number(val)
	return Number.isNaN(n)
	   ? defaultVal != null
	    ? defaultVal
	    : val
	   : n
}
// 转换数字 null 和 '' 不处理 
export function toNumberNull(val, defaultVal){
	const n = Number.parseFloat(val)
	return Number.isNaN(n)
		? defaultVal != null
			? defaultVal
			: val
		: n
}
// 保留 n 位数不进行四舍五入
export function toFixed (val, len) {
  let num = Math.pow(10, len)
  return Number.parseInt(val * num) / num
}
// 生成随机数 uuid的长度,默认7位 最长为20个字符 allNumber 是否全部由数字组成
export function uuid (len = 7, allNumber) {
  let id = ''
  len = allNumber ? Math.max(len - 1, 4) : len
  const type = allNumber ? 10 : 36
  if (len <= 10) {
    id = Math.random().toString(type).substring(3, 3 + len)
  } else {
    id =
      Math.random().toString(type).substring(3, 3 + 10) +
      Math.random().toString(type).substring(3, 3 + (len - 10))
  }
  return allNumber ? Math.floor(Math.random() * 9) + 1 + id : id
}
