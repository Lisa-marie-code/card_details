
function validateNum() {
  let numDetails = document.getElementById("number_details").value;
  let carding =  /^\d{16}$/;

  if (carding.test(numDetails)) {
    document.getElementById("num_error").style.visibility = "hidden";
    
    console.log(numDetails);
  } else {
    document.getElementById("num_error").style.visibility = "visible";
    document.getElementsByName("number-exact")[0].style.borderColor = "red";
  }
  }

  

  
document.getElementById('holder_details').oninput = () =>{
 let holder = document.getElementById('card_name_new').innerText = document.getElementById('holder_details').value;
 console.log(holder);
 localStorage.setItem('holder',JSON.stringify(holder));
}

document.getElementById('number_details').oninput = () =>{
  document.getElementById('card_number_new').innerText = document.getElementById('number_details').value;
}

document.getElementById('exp_month').oninput = () =>{
  document.getElementById('month_span').innerText = document.getElementById('exp_month').value;
}

document.getElementById('exp_year').oninput = () =>{
  document.getElementById('year_span').innerText = document.getElementById('exp_year').value;
}

document.getElementById('exp_cvc').oninput = () =>{
  document.getElementById('cvc_newInput').innerText = document.getElementById('exp_cvc').value;
}




if(validateNum){
let confirmSuccess = document.getElementById('confirm_cover');

confirmSuccess.style.display = 'block';
}else{
  confirmSuccess.style.display = 'none';
}