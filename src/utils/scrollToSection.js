export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (!section) return;

  const headerOffset = 112;
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: sectionTop - headerOffset,
    behavior: "smooth",
  });

  window.history.replaceState(null, "", window.location.pathname);
}