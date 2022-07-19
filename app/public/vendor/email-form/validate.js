/**
* PHP Email Form Validation - v3.2
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let form = document.querySelector('.email-form');

 
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
    
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!')
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      const body =  extractValueOfForm(thisForm);
    
        email_form_submit(thisForm, action, body);
    });
 

  function email_form_submit(thisForm, action, formData) {
    const hearders = new Headers()
    hearders.append('Content-Type', 'application/json')
    fetch(action, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: hearders
    })
    .then(response => {
      if( response.ok ) {
        return response
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
      }
    })
    .then(data => {
      console.log(data);
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.add('d-block');
      thisForm.reset();
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }


  function extractValueOfForm(form){
    const inputs = form.querySelectorAll('input');
    const textarea = form.querySelector('textarea');
    const rawvalues = {message: textarea.value}
    inputs.forEach((input)=>{
      rawvalues[input.name] = input.value
    })
    return rawvalues;
  }

})();
