/* console.log("코알라오바");
const urlString = ['documentation',[html-css[html,css],javascript]]
let id = new URL('https://coalacoding.com/documentation/') */

function editUrl() {
	const url = 'https://coalacoding.com/documentation/react/react/notion%ea%b3%bcnextjs%eb%a1%9c-%ea%b7%b8%ea%b2%83%ec%9d%84-%eb%a7%8c%eb%93%a4%ea%b8%b0';
	//const url=window.location.pathname;
	const path = url.split(/[\\/]+/);
	if (path.length > 5) {
		document.querySelector('main').classList.add('coala-toc-added');
		const tocLink = {
			headings: [],
			h1: document.querySelectorAll('h1'),
			h2: document.querySelectorAll('h2'),
			h3: document.querySelectorAll('h3'),
			merge: (els) => {
				console.log(els);
				els.forEach((el) => {
					const tag = el.tagName;
					const id = el.id;
					const text = el.innerText;
					tocLink.headings.push([tag, id, text]);
				});
			},
		};
		tocLink.merge(tocLink.h1);
		tocLink.merge(tocLink.h2);
		tocLink.merge(tocLink.h3);
		tocElement(tocLink.headings);
	}
}

function tocElement(links) {
	const toc = {
		el: document.createElement('div'),
		parent: document.querySelector('.coala-toc-added'),
		add: () => toc.parent.appendChild(toc.el),
		attr: () => toc.el.setAttribute('id', 'toc'),
		attrs: links.map(([tag, anc, text]) => {
			return [tag, anc, text];
		}),
		links: (attrs) =>
			attrs.forEach(([tag, id, text]) => {
				const anc = document.createElement('a');
				anc.href = `#${id}`;
				anc.innerText = text;
				const heading = document.createElement(tag);
				heading.appendChild(anc);
				toc.el.appendChild(heading);
			}),
	};
	if (toc.parent) {
		toc.attr();
		toc.add();
		toc.links(links);
	}
}

editUrl();
document.querySelectorAll('#toc a').forEach((a) => {
	a.addEventListener('click', (e) => {
		const hash = e.target.hash;
		const target = document.querySelector(hash);

		const previousTarget = document.querySelector('.coala-toc-target');
		if (previousTarget) {
			previousTarget.classList.remove('coala-toc-target');
		}

		target.classList.add('coala-toc-target');

		document.querySelectorAll('#toc a').forEach((link) => {
			link.classList.remove('coala-anc');
		});

		e.target.classList.add('coala-anc');
	});
});
