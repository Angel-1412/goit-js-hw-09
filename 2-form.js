import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector(".feedback-form"),l="feedback-form-state";let e={email:"",message:""};const s=()=>{localStorage.setItem(l,JSON.stringify(e))},m=localStorage.getItem(l);m&&(e=JSON.parse(m),t.elements.email.value=e.email,t.elements.message.value=e.message);t.addEventListener("input",a=>{e[a.target.name]=a.target.value,s()});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log("Form Data:",e),localStorage.removeItem(l),e={email:"",message:""},t.reset()});
//# sourceMappingURL=2-form.js.map
