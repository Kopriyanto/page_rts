const inputFields = document.querySelectorAll('.input-transformed');

inputFields.forEach((inputField) => {
  const label = inputField.nextElementSibling;

  inputField.addEventListener('input', handleInputChange);

  function handleInputChange() {
    if (inputField.value !== '') {
      label.classList.add('label-transform');
    } else {
      label.classList.remove('label-transform');
    }
  }
});

function navigateToAnotherPage(x){
    window.location.href = x
}

function loadContent(url){
    fetch(url)
    .then((response)=>response.text())
    .then((html)=>{
        document.getElementById('layout').innerHTML = html
    })
    .catch((error)=>{
        console.error('Error loading component:', error)
    })
}

loadContent('public/layout/login.html')
