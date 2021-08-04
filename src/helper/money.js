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