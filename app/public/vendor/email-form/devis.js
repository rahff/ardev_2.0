(function(){

    const devisForm = document.querySelector('#formDevis');
    devisForm.addEventListener('submit', function(event){
        event.preventDefault();
        const form = this;
        const action = form.getAttribute('action');
        form.querySelector('.loading').classList.add('d-block');
        form.querySelector('.error-message').classList.remove('d-block');
        form.querySelector('.sent-message').classList.remove('d-block');
        const formData = extractValueOfForm(form);
        sendDevis(form, action, formData)
    })

    function sendDevis(form, action, formData){
        const hearders = new Headers()
        hearders.append('Content-Type', 'multipart/form-data')
        fetch("http://localhost:1337/api/quotes", {
            method: 'POST',
            body: formData
        }).then(response => {
            if( response.ok ) {
              return response
            } else {
              throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
            }
          }).then(data => {
            console.log(data);
            form.querySelector('.loading').classList.remove('d-block');
            form.querySelector('.sent-message').classList.add('d-block');
            form.reset();
          })
          .catch((error) => {
            displayError(form, error);
          });
    }

    function extractValueOfForm(form){
        const formData = new FormData();
        const data = {};
        Array.from(form.elements).forEach(({ name, type, value, files, ...element }) => {
            if (!['submit', 'file'].includes(type)) {
                data[name] = value;
            } else if (type === 'file') {
                Array.from(files).forEach((file) => {
                    formData.append(`files.${name}`, file, file.name);
                });
            }
        });
        formData.append('data', JSON.stringify(data));
        return formData;
    }

    function displayError(form, error) {
        form.querySelector('.loading').classList.remove('d-block');
        form.querySelector('.error-message').innerHTML = error;
        form.querySelector('.error-message').classList.add('d-block');
      }
    
})()