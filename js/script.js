// Variabel untuk menyimpan indeks slide saat ini
let currentIndex = 0;
// Ambil semua elemen slide
const slides = document.querySelectorAll(".slide");
// Fungsi untuk menampilkan slide berdasarkan indeksnya
function showSlide(index) {
  // Sembunyikan semua slide
  slides.forEach((slide) => (slide.style.display = "none"));
  // Tampilkan slide dengan indeks tertentu
  slides[index].style.display = "block";
  // Tandai slide aktif dengan kelas 'active'
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}
// Fungsi untuk menampilkan slide selanjutnya
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
// Fungsi untuk menampilkan slide sebelumnya
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}
// Fungsi untuk mengatur slider otomatis
function autoSlider() {
  nextSlide(); // Tampilkan slide selanjutnya
}
// Mengatur interval slider otomatis (misalnya, setiap 3 detik)
setInterval(autoSlider, 3000);

// VALIDATOR
function validateForm() {
  var nama = document.forms["message-form"]["nama"].value;
  var email = document.forms["message-form"]["email"].value;
  var interested = document.forms["message-form"]["interested"].value;
  
  if (nama == "" || email == "" || interested == "") {
    alert("tidak boleh kosong");
    return false;
  }
  
  document.getElementById("sender-nama").innerText = nama;
  document.getElementById("sender-email").innerText = email;
  document.getElementById("sender-interested").innerText = interested;
  return false;
  // document.getElementById("sender-nama").innerText = nama;
  // document.getElementById("sender-email").innerText = email;
  // document.getElementById("sender-interested").innerText = interested;


  setSenderUI(nama, email, interested);
}

 // Fungsi untuk menampilkan data input pada UI
 function setSenderUI(nama, email, interested) {
  // Setel konten untuk tampilan sender info
  document.getElementById("sender-nama").innerText = nama;
  document.getElementById("sender-email").innerText = email;
  document.getElementById("sender-interested").innerText = interested;
}