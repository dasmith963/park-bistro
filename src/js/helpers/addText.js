export default function addText(text) {
  const para = document.createElement('p');
  para.textContent = text;
  return para;
}