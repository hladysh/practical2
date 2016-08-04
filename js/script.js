 // Оголошення спрощеного доступу по .querySelector()
 function getE(a) {
   return document.querySelector(a);
 }

 // Доступ до форми  
 var ds = document.forms;


 //Валідація Форми
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
   var df = document.forms.form_validate;

   resetError(df.from.parentNode);
   if (!df.from.value) {
     showError(df.from.parentNode, ' Введіть ваше імя');
     // getE('.name_form')
   }
   else if (df.from.value.length < 3) {
     showError(df.from.parentNode, ' Імя не повинно бути менше 3 букви');
   }
   else if (df.from.value.length > 12) {
     showError(df.from.parentNode, ' Імя повинно бути менше 12 букв');
   }

   resetError(df.password.parentNode);
   resetError(df.password2.parentNode);
   if (!df.password.value) {
     showError(df.password.parentNode, ' Введіть пароль');
   }
   else if (df.password.value.length < 6) {
     showError(df.password.parentNode, ' пароль має бути більше 6 букв');
   }
   else if (df.password.value != df.password2.value) {
     showError(df.password2.parentNode, ' Паролі не співпадають');
   }

   resetError(df.to.parentNode);
   if (!df.to.value) {
     showError(df.to.parentNode, ' Вкажіть куди');
   }

   resetError(df.message.parentNode);
   if (!df.message.value) {
     showError(df.message.parentNode, ' Введіть ваше повідомлення');
   }
   else if (df.message.value.length < 10) {
     showError(df.message.parentNode, ' ваше повідомлення менше 10 букв');
   }
 }

 //Клік на кнопку валідації форми
 getE(".btn_validate").onclick = function(e) {
   e.preventDefault();
   validate(this.df);

 }


 getE('.btn_list_add').onclick = function() {
   getE('.type_list').style.display = "block";
 }


 getE('.type_list').onchange = function() {
     var type_list = ds.list_content.type_list.value;
     var type_list_style;
     if (type_list == 'ul') {
       getE('.type_list_ul').style.display = "block";
       getE('.type_list_ol').style.display = "none";
       getE('.type_list_ul').onchange = function() {
         type_list_style = ds.list_content.type_list_ul.value;
         getE('.number_list').style.display = "block";
       }
     }
     else if (type_list == 'ol') {
       getE('.type_list_ol').style.display = "block";
       getE('.type_list_ul').style.display = "none";
       getE('.type_list_ol').onchange = function() {
         type_list_style = ds.list_content.type_list_ol.value;
         getE('.number_list').style.display = "block";
       }
     }

     document.getElementById('number_list').onblur = function() {
       getE('.btn_save_list').style.display = "block";
     }

     getE('.btn_save_list').onclick = function(e) {
       e.preventDefault();
       var numberli = parseInt(ds.list_content.numli.value);

       var tablelist = '<' + type_list + ' type= ' + type_list_style + '>';
       for (var i = 1; i <= numberli; i++) {
         tablelist += '<li>' + "list item  " + i.toString() + '</li>';
       }
       tablelist += '<' + type_list + '>';
       getE('.window').innerHTML = tablelist;
     }
   }
   // Кнопка блокування при нажиманні якої потрібно буде ввести пароль
 getE('.btn_block').onclick = function() {
   getE('.pop_ap').style.display = "block";
   getE('.wrap_popap').style.display = "block";

 }
 var uzer_password = '123';
 getE('.btn_unlock').onclick = function(e) {
   e.preventDefault();
   if (ds.user_password.input_passwords.value != uzer_password) {
     getE('.alert_wrong').style.display = "block";
     ds.user_password.input_passwords.value = "";
   }
   else {
     ds.user_password.input_passwords.value = "";
     getE('.pop_ap').style.display = "none";
     getE('.wrap_popap').style.display = "none";
   }

 }

 //Показати приховатипарольякий вводить користувач
 getE('.btn_password_open').onclick = function(e) {
   e.preventDefault();
   ds.form_validate.password.type = "text";
 }
 getE('.btn_password_open2').onclick = function(e) {
   e.preventDefault();
   ds.form_validate.password2.type = "text";
 }