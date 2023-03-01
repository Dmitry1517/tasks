export function stringToUpperCase(str) {
  if (!str) return str;
  return str.toLowerCase()[0].toUpperCase() + str.toLowerCase().slice(1);
}

export function getCorrectSpace(str) {
  return str
  .split(' ')
  .filter(item => item)
  .join(' ')
  .split(',')
  .map(item => item.trim())
  .join(', ')
  .split('. ')  
  .map(item => item.trim())
  .join('. ')
}

export function howManyWords(str) {
  return str.split(' ').length;
}

export function CounterWords(str) {
	this.str = str;
	this.count = function() {
		let arr = this.str.split('');
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === ',') arr.splice(i, 1);
		}
		let strToArr = arr.join('').toLowerCase().split(' ');
		const count = strToArr.reduce((acc, i) => {
			if (acc.hasOwnProperty(i)) acc[i] +=1;
			else acc[i] =1;
			return acc;
		}, {})
		return count;
	}
	this.render = function() {                               // Ответ представлен в табличной форме в index.html
		let counter = this.count(str);
		let table = document.querySelector('[data-table]');
		let tableInner = Object.entries(counter).map((item) => `
		  <tr>
				<td class="table__td">${item[0]}</td>
				<td class="table__td">${item[1]}</td>
			</tr>
		`).join('');

		table.innerHTML = `
		  <table class="table">
		  	<thead class="table__head">
		  		<tr>
		  			<td class="table__td">Слово</td>
		  			<td class="table__td">Количество</td>
		  		</tr>
		  	</thead>
		  	<tbody>
		  		${tableInner}
		  	</tbody>
		  </table>
		`
	}
}