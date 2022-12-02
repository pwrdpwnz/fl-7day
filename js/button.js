// const btn = document.querySelector('#butt_obmen');

btn.addEventListener("click", () => {
    const outPrice = document.querySelector("#out-price").value;
    const inPrice = document.querySelector("#in-price").value;
    const labelLeft = document.querySelector("#label-left").innerHTML;
    const labelRight = document.querySelector("#label-right").innerHTML;
    const icoLeft = document.querySelector("#step-chage-val-inde1").innerHTML;
    const icoRight = document.querySelector(".item-left").innerHTML;
    const emailInput = document.querySelector("#email-input").value;
    const bankCardInput = document.querySelector("#account3").value;
    const fromCode = document.querySelector('#from-code').innerHTML
    const toCode = document.querySelector('#to-code').innerHTML
  
  
    const data = {
      outPrice,
      inPrice,
      labelLeft,
      icoLeft,
      labelRight,
      icoRight,
      emailInput,
      bankCardInput,
      fromCode,
      toCode
    };
    sessionStorage.setItem("data", JSON.stringify(data));
    
    window.location = "form.html";
  });