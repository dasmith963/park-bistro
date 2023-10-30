import addText from "../helpers/addText";

export default function loadContactPage() {
  const main = document.querySelector('.content');
  main.replaceChildren(createContactSection());
}

function createContactSection() {
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact');

  contactSection.append(
    createContactInfo(),
    createForm()
  );

  return contactSection;
}

function createContactInfo() {
  const container = document.createElement('div');

  const sectionHeader = document.createElement('h2');
  sectionHeader.textContent = 'We\'d love to hear from you';

  container.append(
    sectionHeader,
    addText('Please call us @ (555) 555-5555'),
    addText('or email us using the contact form')
  );

  return container;
}

function createForm() {
  const formContainer = document.createElement('div');
  const form = document.createElement('form');
  form.setAttribute('action', '#');

  formContainer.appendChild(form);
  return formContainer;
}