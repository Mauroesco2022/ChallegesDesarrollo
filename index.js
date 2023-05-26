const API_URL = 'https://jsonplaceholder.typicode.com';
const xhr = new XMLHttpRequest();

function onManejadorRespuesta() {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.response);
    console.log(data);
  }
}

xhr.addEventListener("load", onManejadorRespuesta);
xhr.open('GET', `${API_URL}/users`); 
xhr.send();