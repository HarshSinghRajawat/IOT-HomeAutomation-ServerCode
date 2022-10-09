
function setRelay(relay,status){

let xhr=new XMLHttpRequest();
var json='{ "Relay":"'+relay+'" , "status":"'+status+'" }';
xhr.open('POST','/relay');
xhr.setRequestHeader('processData','true');
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(json);

}


function turnOnR1(){
    setRelay("1","on");
}
function turnOnR2(){
    setRelay("2","on");
}
function turnOnR3(){
    setRelay("3","on");
}
function turnOnR4(){
    setRelay("4","on");
}
function turnOnR5(){
    setRelay("5","on");
}
function turnOnR6(){
    setRelay("6","on");
}
function turnOnR7(){
    setRelay("7","on");
}
function turnOnR8(){
    setRelay("8","on");
}
function turnOffR1(){
    setRelay("1","off");
}
function turnOffR2(){
    setRelay("2","off");
}
function turnOffR3(){
    setRelay("3","off");
}
function turnOffR4(){
    setRelay("4","off");
}
function turnOffR5(){
    setRelay("5","off");
}
function turnOffR6(){
    setRelay("6","off");
}
function turnOffR7(){
    setRelay("7","off");
}
function turnOffR8(){
    setRelay("8","off");
}
