//DOM Selection
// document.getElementById() -> mengembalikan element
// const judul =document.getElementById('judul');
// judul.style.color='red';
// judul.style.backgroundColor='#ccc';
// judul.innerHTML='Rido Trimanto';

// document.getElementsByTagName()
//HTMLColections
// const p =document.getElementsByTagName('p');

// for(let i=0;i<p.length; i++){
// p[i].style.backgroundColor='lightblue';
// }


// const h1 =document.getElementsByTagName('h1')[0];
// h1.style.fontSize='50px';

// document.getElementsByClassName()
// --> HTMLColection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML='ini diubah dari java script';

// document.querySelector() --> element
// const p4 =document.querySelector('#b p');
// p4.style.color ='green';
// p4.style.fontSize='40px';


// const li2 =document.querySelector('section ul li:nth-child(2)');
// li2.style.backgroundColor='orange';

// const p =document.querySelector('p')
// p.innerHTML='ini diubah melalui java script'


// document.querySelectorAll
// const p =document.querySelectorAll('p')
// for(let i=0; i<p.length; i++){
// 	p[i].style.backgroundColor='lightblue'

//}

//DOM manipulation

// buat elemen baru
// const pBaru = document.createElement('p');
// const teksBaru=document.createTextNode('paragraf baru');
// simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksBaru);


// simpan pBaru di akhir section A
// const sectionA =document.getElementById('a')
// sectionA.appendChild(pBaru);



// const liBaru =document.createElement('li');
// const teksLiBaru =document.createTextNode('item baru');
// liBaru.appendChild(teksLiBaru);

// const ul =document.querySelector('section#b ul');
// const li2 =ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);


// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);


// const sectionB = document.getElementById('b');
// const p4 =sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru =document.createTextNode('Judul baru');

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4)

// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';
// h2Baru.style.backgroundColor = 'lightgreen';



const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
    p3.style.backgroundColor='lightblue';
}

function ubahWarnaP2() {
    p2.style.backgroundColor='lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick =ubahWarnaP2;


const p4 =document.querySelector('section#b p');
p4.addEventListener('click', function() {
	const ul =document.querySelector('section#b ul');
	const liBaru =document.createElement('li');
	const teksLiBaru = document.createTextNode('item baru');
	liBaru.appendChild(teksLiBaru);
	ul.appendChild(liBaru);

});
















