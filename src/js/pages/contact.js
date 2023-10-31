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

  const userNameInputs = document.createElement('div');
  userNameInputs.append(
    createInput('text', 'First Name: ', 'first-name'),
    createInput('text', 'Last Name: ', 'last-name'),
  );

  form.append(
    userNameInputs,
    createInput('email', 'Email: ', 'user-email'),
    createInput('text', 'Subject: ', 'subject'),
    createTextArea()
  );

  formContainer.appendChild(form);
  return formContainer;
}

function createInput(type, labelName, id) {
  const formGroup = document.createElement('div');

  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.textContent = labelName;

  const input = document.createElement('input');
  input.setAttribute('type', type);
  input.setAttribute('name', id);
  input.setAttribute('id', id);

  formGroup.append(label, input);
  return formGroup;
}

function createTextArea() {
  const formGroup = document.createElement('div');

  const label = document.createElement('label');
  label.setAttribute('for', 'message');
  label.textContent = 'Message:';

  const textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'message');
  textArea.setAttribute('name', 'message');
  textArea.setAttribute('maxlength', '1000');
  textArea.setAttribute('cols', '30');
  textArea.setAttribute('rows', '10');

  formGroup.append(label, textArea);
  return formGroup;
}