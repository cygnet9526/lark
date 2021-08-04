
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

