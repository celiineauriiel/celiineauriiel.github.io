document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active sections for animate on scroll
            sec.classList.add('show-animate');
        }
        //repeat animate on scrolls
        else {
            sec.classList.remove('show-animate');
        } 
    });

    //sticky headernya
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);

}

    var swiperExperiences = new Swiper(".experiences-container", {
      spaceBetween: 32,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const skillsContent = document.getElementsByClassName('skills-content');
    const skillsHeader = document.querySelectorAll('.skills-header');

    function toggleSkills() {
      const itemClass = this.parentNode.className;

      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close';
      }

      if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open';
      } else {
        this.parentNode.className = 'skills-content skills-close';
      }
    }

    skillsHeader.forEach((el) => {
      el.addEventListener('click', toggleSkills);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const emailSubjectInput = form.querySelector('input[name="email-subject"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const phoneInput = form.querySelector('input[name="phone"]');
  
    form.addEventListener("submit", function (e) {
        clearErrorMessages(); // Bersihkan pesan kesalahan sebelum validasi

        // Validasi nama, email, email subject, dan pesan harus diisi
        if (!nameInput.value) {
            e.preventDefault(); // Mencegah pengiriman formulir
            displayErrorMessage("name-error", "Nama wajib diisi.");
        }

        if (!emailInput.value) {
            e.preventDefault();
            displayErrorMessage("email-error", "Email wajib diisi.");
        }

        if (!emailSubjectInput.value) {
            e.preventDefault();
            displayErrorMessage("email-subject-error", "Email Subject wajib diisi.");
        }

        if (!messageInput.value) {
            e.preventDefault();
            displayErrorMessage("message-error", "Pesan wajib diisi.");
        }

        // Validasi format email
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (emailInput.value && !emailRegex.test(emailInput.value)) {
            e.preventDefault();
            displayErrorMessage("email-error", "Format email tidak valid.");
        }

        // Validasi nomor hp (jika diisi)
        if (phoneInput.value) {
            const phoneRegex = /^\d{10,13}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                e.preventDefault();
                displayErrorMessage("phone-error", "Format nomor hp tidak valid.");
            }
        }

        // Jika tidak ada pesan kesalahan, tampilkan pesan sukses
        // Jika tidak ada pesan kesalahan, tampilkan pesan berhasil
    if (!document.querySelector(".error-msg").textContent) {
        alert("Berhasil di Kirim!");
    }
    });

    function displayErrorMessage(id, message) {
        const errorSpan = document.getElementById(id);
        errorSpan.innerHTML = message;
        errorSpan.style.color = "red";
    }

    function clearErrorMessages() {
        const errorSpans = document.querySelectorAll(".error-msg");
        errorSpans.forEach(function (errorSpan) {
            errorSpan.innerHTML = "";
        });
    }
});
