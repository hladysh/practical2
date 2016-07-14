

    function getE(a) {
    return document.querySelector(a);
    }
     var ds = document.forms;
function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
      
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
         
      } 
    }

    function validate(form) {
      var df = form.elements;

      resetError(df.from.parentNode);
      if (!df.from.value) {
        showError(df.from.parentNode, ' Введіть ваше імя');
      } else if (df.from.value.length < 3 ){
        showError(df.from.parentNode, ' Імя не повинно бути менше 3 букви');  
      } else if (df.from.value.length > 12 ){
        showError(df.from.parentNode, ' Імя повинно бути менше 12 букв');  
      }

      resetError(df.password.parentNode);
      resetError(df.password2.parentNode);
      if (!df.password.value) {
        showError(df.password.parentNode, ' Введіть пароль');
      } else if ( df.password.value.length < 6 ) {
         showError(df.password.parentNode, ' пароль має бути більше 6 букв'); 
      } else if (df.password.value != df.password2.value) {
        showError(df.password2.parentNode, ' Паролі не співпадають');
      }

      resetError(df.to.parentNode);
      if (!df.to.value) {
        showError(df.to.parentNode, ' Вкажіть куди');
      }

      resetError(df.message.parentNode);
      if (!df.message.value  ) {
        showError(df.message.parentNode, ' Введіть ваше повідомлення');
      } else if ( df.message.value.length < 10){
        showError(df.message.parentNode, ' ваше повідомлення менше 10 букв'); 
      } 
    //   getE('.list_content_content').style.display = "block";  
    }
    
    
    document.querySelector(".btn_validate").onclick=function (e) {
         e.preventDefault();
        validate(this.form);
       
    }
    
    


   
    
    
    getE('.btn_save_list').onclick = function(e) {
    e.preventDefault();
    var type_list = ds.list_content_content.type_list.value;
    var numberli = parseInt(ds.list_content_content.numli.value);
    var type_list_style = ds.list_content_content.type_list_style.value;
    
    // var tablelist = '<ul type=' + type_list + '>'; 
    
    
    var tablelist = '<' + type_list  + type_list_style  + '>'; 
    for (var i = 1; i <= numberli; i++) {
        tablelist += '<li>' + "list item  " + i.toString() + '</li>';
    }
    
    tablelist += '<' + type_list  + '>';
        getE('.window').innerHTML = tablelist
    

    

    // var this_value = getE('.window').innerHTML;
    // ds.text_redactor.redactor.value = this_value + tablelist;

    // getE('.container').style.display = "block";
    // getE('.add_table').style.display = "none";
    // getE('.text_redactor_wrap').style.display = "block";
    // getE('.text_redactor').style.display = "block";
    // getE('.window').style.display = "block";
    // getE('.btn_done').style.display = "block";
}
   
   
   document.getElementById('mySelect').onchange = function() {
       getE('.number_list').style.display = "block";
    }
    
    document.getElementById('mySelect2').onblur = function() {
       getE('.type_of_list').style.display = "block";
    }
    
    document.getElementById('type_list_style').onchange = function() {
       getE('.btn_save_list').style.display = "block";
    }

    getE('.btn_block').onclick= function() {
        getE('.pop_ap').style.display = "block";
        getE('.wrap_popap').style.display = "block";
        
    }
    var uzer_password = '123';
    // var this_password = ds.user_password.input_passwords.value;
    // var this_password = document.getElementById('input_password').value;
    getE('.btn_unlock').onclick= function(e) {
       e.preventDefault();
      // ds.user_password.input_passwords.value = "";
        if (ds.user_password.input_passwords.value  != uzer_password ) {
            getE('.alert_wrong').style.display= "block";
          ds.user_password.input_passwords.value = "";
        } else  {
            ds.user_password.input_passwords.value = "";
            getE('.pop_ap').style.display = "none";
            getE('.wrap_popap').style.display = "none";
            // ds.user_password.input_passwords.value = "";
        }
         
    }

    
     getE('.btn_password_open').onclick= function(e) {
        e.preventDefault();
        ds.form_validate.password.type = "text";
    }
         getE('.btn_password_open2').onclick= function(e) {
        e.preventDefault();
        ds.form_validate.password2.type = "text";
    }