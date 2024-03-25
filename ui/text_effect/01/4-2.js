const text = document.querySelector('.text').innerText;
let textsplit = [...text];
const sp = '<span>';
const an = '</span> ';
let textArr = textsplit
	.map(function (char) {
		return sp + char + an;
	})
	.join('');
console.log(textArr);
document.querySelector('.text').innerHTML = textArr;
const letters = document.querySelectorAll('.text span');
for (let i = 0; i < letters.length; i++) {
	letters[i].addEventListener('mouseover', function () {
		this.classList.add('active');
	});
}
