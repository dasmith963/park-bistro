export default function loadContactPage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createContactSection());
}

function createContactSection() {
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact');
  return contactSection;
}