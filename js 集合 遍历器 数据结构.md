* Array
* Object
* Map
* Set

### Set
类似于数组，但成员的值都是唯一的，没有重复的值。
```
const s =new Set();

[2,3,5,4,2,2].forEach(x => s.add(x));

console.log(s);	// Set { 2, 3, 5, 4 }
for(let i of s) {
	console.log(i);	// 2 3 5 4
}
```

1. 接受一个数组作为参数，初始化它，可以去重
```
const set = new Set([1,2,3,4,4]);
console.log(set);	// Set {1,2,3,4}
console.log(...set);	// 1 2 3 4
console.log([...set]); 	// [ 1, 2, 3, 4 ]
```
2. 接受一个类数组
```
function divs() {
	return [...document.querySelectorAll('div')];
}

const set = new Set(divs());
console.log(set.size);
```
类似于
```
function divs() {
	return [...document.querySelectorAll('div')];
}

// const set = new Set(divs());
const set = new Set();
divs().forEach(div => set.add(div))
console.log(set.size);
```

向Set中add值，不会发生类型转换，类似于===