function count(arr) {
	let map=new Map();
	arr=arr.split('');
	arr.forEach(value=>map.set(value,map.has(value)?map.get(value)+1:1));
	let result={};
	Array.from(map).sort((a,b)=>b[1]-a[1]).filter((value,index,arr)=>value[1]===arr[0][1]).forEach(value=>{result[value[0]]=value[1]});
	console.log(result);
}

count('aaaaabbdbdbb');