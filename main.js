document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // ✅ Calendar code here
  // =========================
  // If your calendar has event listeners or functions, paste them here

  // Example placeholder:
  const calendar = document.getElementById("calendar");
  if (calendar) {
    calendar.innerHTML = "Calendar still works here!";
    // ... your calendar setup continues
  }

  // =========================
  // ✅ Slider code below
  // =========================
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  }

  function changeSlide(step) {
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
  }

  function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 4000);
  }

  // Only run slider if images exist
  if (slides.length > 0) {
    showSlide(slideIndex);
    autoSlide();

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => changeSlide(-1));
      nextBtn.addEventListener("click", () => changeSlide(1));
    }
  }
});document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // ✅ Calendar code here
  // =========================
  // If your calendar has event listeners or functions, paste them here

  // Example placeholder:
  const calendar = document.getElementById("calendar");
  if (calendar) {
    calendar.innerHTML = "Calendar still works here!";
    // ... your calendar setup continues
  }

  // =========================
  // ✅ Slider code below
  // =========================
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  }
  document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // ✅ Calendar code here
    // =========================
    // If your calendar has event listeners or functions, paste them here
  
    // Example placeholder:
    const calendar = document.getElementById("calendar");
    if (calendar) {
      calendar.innerHTML = "Calendar still works here!";
      // ... your calendar setup continues
    }
  
    // =========================
    // ✅ Slider code below
    // =========================
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    function showSlide(index) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[index].style.display = "block";
    }
  
    function changeSlide(step) {
      slideIndex += step;
      if (slideIndex >= slides.length) slideIndex = 0;
      if (slideIndex < 0) slideIndex = slides.length - 1;
      showSlide(slideIndex);
    }
  
    function autoSlide() {
      changeSlide(1);
      setTimeout(autoSlide, 4000);
    }
  
    // Only run slider if images exist
    if (slides.length > 0) {
      showSlide(slideIndex);
      autoSlide();
  
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => changeSlide(-1));
        nextBtn.addEventListener("click", () => changeSlide(1));
      }
    }
  });
  function changeSlide(step) {
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
  }

  function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 4000);
  }

  // Only run slider if images exist
  if (slides.length > 0) {
    showSlide(slideIndex);
    autoSlide();

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => changeSlide(-1));
      nextBtn.addEventListener("click", () => changeSlide(1));
    }
  }
});