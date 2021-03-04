var url= "https://api.exchangeratesapi.io/latest?base=";

async function convert(){
  var base = document.getElementById('Ba').value;
  var out = document.getElementById('PH').value;
  var amount = document.getElementById('AM').value;
  var finalValue;

  let response = await fetch(`${url}${base}`,{method:'GET'})
  let data = await response.json()

  finalValue = data.rates

  finalValue = finalValue[out]*Number(amount);
 
  var result = "Converted Amount of "+ amount+" "+ base+" is "+ finalValue +" "+out;

  document.getElementById('Converted').innerHTML = result;
}
function season()
{
    var r = prompt("Enter the  name of Season :");
    if (r == "winter"){
        document.getElementById('ama').innerHTML="Output : "+r;
    }
    else if (r == "summer"){
        document.getElementById('ama').innerHTML="Output : "+r;
    }
    else if (r == "spring"){
        document.getElementById('ama').innerHTML="Output : "+r;
    }
    else if (r == "fall"){
      document.getElementById('ama').innerHTML="Output : "+r;
    }
    else if(r == ""){
      document.getElementById('ama').innerHTML="null&empty input";
    }
    else {
        document.getElementById('ama').innerHTML="invalid season";
    }
    

    
}

