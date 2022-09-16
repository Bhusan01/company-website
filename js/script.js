var options = {
  strings: ["best IT solution", " IT consultancy", "perfect services"],
  typeSpeed: 80,
  startDelay: 10,
  loop: true,
};

var typed = new Typed("#typed", options);

// AOS
AOS.init({
  offset: 200,
  duration: 1000,
});

// stiky navigation
const body = document.body;
const heroSection = document.querySelector(".hero");
const observer = new IntersectionObserver(
  function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      body.classList.add("sticky");
    } else if (entry.isIntersecting) {
      body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSection);
