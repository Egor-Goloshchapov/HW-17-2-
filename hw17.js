const textInput = document.getElementById('textInput');
const button = document.getElementById('changeButton');

button.addEventListener('click', () => {
  button.textContent = textInput.value;
});




const image = document.getElementById('image');
image.src = ''; 



const link = document.getElementById('link');
const image2 = document.getElementById('image2');

link.href = '';
image2.alt = 'Опис нового зображення';

