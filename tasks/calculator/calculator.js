export function Calculator(a, b) {
	this.a = a.toString();
	this.b = b.toString();

	this.sum = function() {
		let a = this.a.replace(/^0+/, '').split('').reverse();
		let b = this.b.replace(/^0+/, '').split('').reverse();
		let result = [], max = Math.max(a.length, b.length);
		for (var m = 0, i = 0; i < max; i++) {
			let res = parseInt(a[i] || 0) + parseInt(b[i] || 0) + m;
			result[i] = res % 10;
			m = (res - result[i]) / 10;
		}
		if (m) result.push(m);
		return result.reverse().join('');
	}

	this.diff = function() {
		let arr1 = this.a.split('').reverse();
    let arr2 = this.b.split('').reverse();
    let result = [];
    for (let i = 0, b = 0, c = 0; i < arr1.length; i++) {
			b = arr1[i] - (arr2[i] || 0) + c;
			result[i] = b < 0 ? (c = -1, 10 + b) : (c = 0, b)
    }
    return result.reverse().join('').replace(/^0+/, '');
	}

	this.mul = function() {
		let aa = this.a.split('').reverse();
  	let bb = this.b.split('').reverse();
  	let result = [];
		for (let i = 0; i < aa.length; i++) {
			for (let j = 0; j < bb.length; j++) {
				let m = aa[i] * bb[j];
				result[i + j] = (result[i + j]) ? result[i + j] + m : m;
			}
		}
		for (let i = 0; i < result.length; i++) {
			let num = result[i] % 10;
			let move = Math.floor(result[i] / 10);
			result[i] = num;
			if (result[i + 1]) result[i + 1] += move;
			else if (move != 0) result[i + 1] = move;
		}
  	return result.reverse().join('');
	}

	this.div = function() {
		this.a = BigInt(a);
		this.b = BigInt(b);
		return this.a / this.b;
	}
}

