const input = document.querySelector("input");
const button = document.querySelector("button");
let select = document.querySelector("select");
const content = document.querySelector("textarea");
const job = `
        Dear Hiring Manager,
I am writing to express my interest in the Software Developer Fresher.I am a recent graduate of Anna University with a Bachelor of Engineering in Computer Science.

I have a strong background in software development, with experience in a variety of programming languages like Python,Java, Javascript,SQL Plsql and Angular and Django frameworks. I am also proficient in data structures and algorithms, and I have a good understanding of software engineering principles.

In my previous internship at Anna Silicon Technology contribute in Full stack development (Angular14)

I have attached my resume for your review.

Thank you for your time and consideration.

Sincerely,

POOVARASAN.R 

Mail:rpoovarasan479@gmail.com 

Phone: + 91 91503 71784

GitHub: github.com/flowerking22

LinkedIn: https://www.linkedin.com/in/poovarasan-r-82379a222


        `;
// button.addEventListener('click', function () {
//     // let url=select.querySelector('option:checked').value;
//     let url = select.querySelector('option:checked');

//     if (url.innerText == 'gmail') {
//         if (content.value == '') {
//             url.value += input.value + '?Subject=' + job;
//         }
//         else {
//             url.value += input.value + '?Subject=' + content.value.trim();
//         }
//     }
//     else {
//         // url.value+=input.value+'&text='+content.value;
//         url.value += input.value + '&text=' + content.value.trim();

//     }
//     // alert(url.value);
//     window.open(url.value, '_blank');
//     // document.querySelector('body').innerHTML+=url.value;
//     // alert(content.value);

// });
const options = {
  whatsapp: "https://api.whatsapp.com/send/?phone=",
  gmail: "mailto:"
  // whatsapp:'http://wa.me/+91',
};
// select.setAttribute('id', 'select');
for (let i in options) {
  let option = document.createElement("option");
  option.value = options[i];
  option.textContent = i;
  select.appendChild(option);
  let b = document.createElement("button");
  // b.textContent=i;
  b.classList.add("button");
  b.setAttribute("type", "button");

  // if(i=='whatsapp'){
  // b.classList.add('whatsapp');

  // }
  // else{
  b.classList.add(i);

  // }
  b.dataset.href = options[i];

  b.addEventListener("click", (e) => {
    chat(b);
    alert(b.dataset.href);
  });
  document.querySelector(".buttons").appendChild(b);
}
select.addEventListener("change", () => {
  if (select.querySelector("option:checked").textContent != "whatsapp") {
    input.setAttribute('inputmode',"");
  }
});
function chat(e) {
  let target = e.dataset.href;
  console.log(target);
  if (e.innerText == "gmail") {
    if (content.value == "") {
      target += input.value + "?Subject=" + job;
    } else {
      target += input.value + "?Subject=" + content.value.trim();
    }
  } else {
    // url.value+=input.value+'&text='+content.value;
    target += input.value + "&text=" + content.value.trim();
  }
  // alert(url.value);
  // console.log(target);
  window.open(target, "_blank");
}
