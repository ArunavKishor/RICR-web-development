function CalculateTip(){
    const bill=document.getElementById("billAmount").value;
     const service=document.getElementById("service").value;
      const persons=document.getElementById("persons").value;

      if(bill<=0||persons<=0){
        document.getElementById("tip").innerHTML="Please enter a valid value";
        return;
      }
      const tipp=bill*service;
      const total=tipp/persons;
      document.getElementById("tip").innerHTML=`Tip Amount<br><strong>${total.toFixed(2)} ₹ each</strong>`;
}