//Ganti text di index
function indexGantiText() {
	var jenisBarang = ['Komputer', 'Monitor', 'Keyboard', 'Mouse'];
	var textTengah = document.getElementById('textTengah');

	setInterval(() => {
		jenisBarang.push(jenisBarang.shift());
		textTengah.innerHTML = `Menyediakan berbagai jenis ${jenisBarang[1]} sesuai kebutuhanmu`;
	}, 5000);
}

//Waktu di footer
setInterval(() => {
	document.getElementById('tanggal').innerText = new Date().toLocaleString('en-US');
}, 1000);

//Ganti tab produk
var buttonDetail = document.getElementById('detail');
var buttonInfo = document.getElementById('info');
var tabDetail = document.querySelector('.tabDetail');
var tabInfo = document.querySelector('.tabInfo');

function bukaInfo() {
	buttonDetail.removeAttribute('disabled');
	buttonInfo.setAttribute('disabled', '');
	tabDetail.classList.add('hidden');
	tabInfo.classList.remove('hidden');
}
function bukaDetail() {
	buttonInfo.removeAttribute('disabled');
	buttonDetail.setAttribute('disabled', '');
	tabInfo.classList.add('hidden');
	tabDetail.classList.remove('hidden');
}

//Buka whatsapp ketika membeli
function bukaWhatsapp() {
	var pilihan = confirm('Apa anda yakin ingin membeli barang ini?');
	if (pilihan) {
		window.location = 'https://wa.me/6285817268388';
	}
}
