// Variabel untuk menyimpan indeks slide saat ini
let currentIndex = 0;

// Ambil semua elemen slide
const slides = document.querySelectorAll('.slide');

// Fungsi untuk menampilkan slide berdasarkan indeksnya
function showSlide(index) {
  // Sembunyikan semua slide
  slides.forEach(slide => slide.style.display = 'none');

  // Tampilkan slide dengan indeks tertentu
  slides[index].style.display = 'block';

  // Tandai slide aktif dengan kelas 'active'
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
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
