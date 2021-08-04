// 添加千分位
export function fmoney(s, n){
	n = n > 0 && n <= 20 ? n : 2
   	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""
   	let l = s.split(".")[0].split("").reverse() 
   	let r = s.split(".")[1]
    let t = ""
   	for(let i = 0; i < l.length; i++ ){   
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "")
   	}
   	return t.split("").reverse().join("") + "." + r
}
// 移除千分位
export function rmoney(s){   
   return parseFloat(s.replace(/[^\d\.-]/g, ""));   
}
// 1111 -> 壹仟壹佰壹拾壹元整
// 数字转金额大写文字
export const digitUppercase = (n) => {
  const fraction = ['角', '分']
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  const unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']]
  let head = n < 0 ? '欠' : ''
  n = Math.abs(n)
  let s = ''
  for (let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
  }
  s = s || '整'
  n = Math.floor(n)
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = ''
    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p
      n = Math.floor(n / 10)
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整')
}