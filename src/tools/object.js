// 深拷贝
export function deepClone(obj){
	if (typeof obj !== 'object' && obj !== null) {return}
	let objNew = Array.isArray(obj) ? [] : {}
	for (let key in obj){
		if (obj.hasOwnProperty(key)){
			objNew[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
		}
	}
	return objNew
}
// 是否是对象
export function isObj(obj){
	return typeof obj === 'object' && obj !== null
}