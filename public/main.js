const newMessage = () => {
    //se construye el objeto que se enviará al API
    const message ={ 
        msg: document.getElementById('msg').value,
        validateName: document.getElementById('validateName').value,
        inputEmail4: document.getElementById('inputEmail4').value
        
    };

    
    if (message.msg !=='' && message.validateName !=='' && message.inputEmail4 !==''){
    //se define la ruta hacia donde se enviará la petición
    const url = '/api/messages'
    //se hace la petición con fetch
    fetch(url, {
        method: 'POST', //se define petición tipo POST
        body: JSON.stringify(message), //se convierte en String el objeto que se va enviar
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      //respuesta con error
      .catch(error => console.error('Error:', error))
      //respuesta exitosa
      .then(response => {
          getMessages();
          document.getElementById('msg').value ='';
          document.getElementById('validateName').value ='';
          document.getElementById('inputEmail4').value ='';
          
       
    //El mensaje ha sido creado
      }); 
    }   
};
const getMessages = () => {
    const url = 'api/messages';
    fetch(url)
    .then(res => res.json())
    .then(response => {
      const html = response.map(message => {
        return `<li class="list-group-item">${message.msg}</li>`
      }).join("");
      //el string construido se agrega en el div con id tweets
      document.getElementById('messages').innerHTML = `<ul class="list-group">
                                                      <li class="list-group-item active">Messages</li>
                                                      ${html}
                                                      </ul>`;
    });
  };


