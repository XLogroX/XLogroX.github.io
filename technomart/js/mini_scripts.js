var index=document.querySelector(".index");if(index){var storage_name,storage_email,communication_link=index.querySelector(".write_us"),modal_communication=document.querySelector(".modal_communication"),communication_close=modal_communication.querySelector(".modal_close"),name_field=modal_communication.querySelector("[name=name]"),email_field=modal_communication.querySelector("[name=email]"),letter_field=modal_communication.querySelector("[name=letter]"),form=modal_communication.querySelector("form"),storage_support=!0;try{storage_name=localStorage.getItem("name"),storage_email=localStorage.getItem("email")}catch(e){storage_support=!1}communication_link.addEventListener("click",function(e){e.preventDefault(),modal_communication.classList.add("modal_shown"),storage_name&&storage_email?(name_field.value=storage_name,email_field.value=storage_email,letter_field.focus()):name_field.focus()}),communication_close.addEventListener("click",function(e){e.preventDefault(),modal_communication.classList.remove("modal_shown"),modal_communication.classList.remove("modal_eror")}),form.addEventListener("submit",function(e){name_field.value&&email_field.value&&letter_field.value?storage_support&&(localStorage.setItem("name",name_field.value),localStorage.setItem("email",email_field.value)):(e.preventDefault(),modal_communication.classList.remove("modal_eror"),modal_communication.offsetWidth=modal_communication.offsetWidth,modal_communication.classList.add("modal_eror"))});var map_link=document.querySelector(".map_link"),modal_map=document.querySelector(".modal_map"),map_close=modal_map.querySelector(".modal_close");map_link.addEventListener("click",function(e){e.preventDefault(),modal_map.classList.add("modal_shown")}),map_close.addEventListener("click",function(e){e.preventDefault(),modal_map.classList.remove("modal_shown")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(modal_communication.classList.contains("modal_shown")&&(e.preventDefault(),modal_communication.classList.remove("modal_shown"),modal_communication.classList.remove("modal_eror")),modal_map.classList.contains("modal_shown")&&(e.preventDefault(),modal_map.classList.remove("modal_shown")))})}var buy_link=document.querySelectorAll(".buy_btn"),modal_success_buy=document.querySelector(".modal_success_buy"),success_close=modal_success_buy.querySelector(".modal_close"),success_buttons=modal_success_buy.querySelectorAll(".button");Array.prototype.forEach.call(buy_link,function(e){e.addEventListener("click",function(e){e.preventDefault(),modal_success_buy.classList.add("modal_shown")})}),success_close.addEventListener("click",function(e){e.preventDefault(),modal_success_buy.classList.remove("modal_shown")}),Array.prototype.forEach.call(success_buttons,function(e){e.addEventListener("click",function(){modal_success_buy.classList.remove("modal_shown")})}),window.addEventListener("keydown",function(e){27===e.keyCode&&modal_success_buy.classList.contains("modal_shown")&&(e.preventDefault(),modal_success_buy.classList.remove("modal_shown"))});
