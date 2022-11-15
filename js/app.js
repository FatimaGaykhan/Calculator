function Calc(){
    var value1=document.getElementById('credit').value;
    var value2=document.getElementById('time').value;
    var value3=document.getElementById('percent').value;
    var credit=Number(value1);
    var time=Number(value2);
    var percent=Number(value3);
    
    var button = document.getElementById('btn');

   document.getElementById('sum').innerHTML=(credit*percent/100)+credit;
   document.getElementById('monthlypayment').innerHTML=((credit*percent/100)+credit)/time;

}