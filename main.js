import './style.css'

// Defining async function
async function getapi() {
  
  const url = "https://api.adviceslip.com/advice";
  // Storing response
  const response = await fetch(url);
  
  
  // Storing data in form of JSON
  var data = await response.json();
  
  var id = document.querySelector('#advice-id')
  console.log(id);
  // var id = (data.slip.id)
  var advice = (data.slip.advice)
  
  document.querySelector('#advice-id').textContent = String(data.slip.id)
  document.querySelector('#advice').textContent = String(data.slip.advice)

}
// Calling that async function
getapi();

console.log(document.getElementById('random'))
document.querySelector('#random').addEventListener('click', getapi)