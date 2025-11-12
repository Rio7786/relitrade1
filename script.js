// ReliTrade — robust JS for navbar + reveal animations
document.addEventListener("DOMContentLoaded", function () {
  // Navbar scrolled class
  const nav = document.querySelector("nav");
  function onScroll() {
    if (window.scrollY > 30) {
      nav && nav.classList.add("scrolled");
    } else {
      nav && nav.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll);
  onScroll();

  // Intersection Observer for reveal + testimonials
  const items = document.querySelectorAll(".reveal, .testimonial");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // apply delay if provided on element via data-delay
          const delayAttr = entry.target.getAttribute("data-delay");
          const delay = delayAttr ? parseInt(delayAttr, 10) : 0;
          if (delay) {
            window.setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
          } else {
            entry.target.classList.add("visible");
          }
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    items.forEach(el => observer.observe(el));
  } else {
    // fallback for very old browsers
    items.forEach(el => el.classList.add("visible"));
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const handleScroll = () => {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
