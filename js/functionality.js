var scale=window.devicePixelRatio;
var hgt=window.screen.height;
var wdt=window.screen.width;
var hgt_scaled=hgt*scale;
var wdt_scaled=wdt*scale;
var r=wdt_scaled/hgt_scaled;
var siteWidth = 1280;
var scale1 = screen.width /siteWidth;
console.log(scale1);
document.getElementById("width_value").setAttribute("value",wdt_scaled);
document.getElementById("length_value").setAttribute("value",hgt_scaled);
document.getElementById("main").innerHTML = document.getElementById('op1').innerHTML;
linkWithResizer();
size2dpi();
function resolution(){
    wdt_scaled=document.getElementById("width_value").value;
    hgt_scaled=document.getElementById("length_value").value;
    if(document.getElementById('op1button').style.display=='none'){
        size2dpi();
    }
    else if(document.getElementById('op2button').style.display=='none'){
        dpi2size();
    }
}
function output_resizer(w,h){
var output1=document.getElementById('output');
output1.style.height= h/5+'px';
output1.style.width=w/5+'px';
}
output_resizer(wdt_scaled,hgt_scaled);

function show(parameter_id){
    clearOutput();
    document.getElementById('main').innerHTML=document.getElementById(parameter_id).innerHTML;
    linkWithResizer();
    if(parameter_id=='op1'){
        document.getElementById('op1button').style.display='none';
        document.getElementById('op2button').style.display='block';
        size2dpi();
    }
    if(parameter_id=='op2'){
        document.getElementById('op2button').style.display='none';
        document.getElementById('op1button').style.display='block';
        dpi2size();
    }
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function clearOutput(){
    document.getElementById("result_text").innerHTML="";
    document.getElementById("width_value").value=wdt*scale;
    document.getElementById("length_value").value=hgt*scale; 
    wdt_scaled=document.getElementById("width_value").value;
    hgt_scaled=document.getElementById("length_value").value;
}
function size2dpi(){
    var mylist = document.getElementById("myList");  
    var dpi;
    var d = document.getElementById("size").value;
    if(mylist.selectedIndex==0){
    dpi= Math.sqrt(hgt_scaled*hgt_scaled+wdt_scaled*wdt_scaled)/d;
    }
    else if(mylist.selectedIndex==1){
        dpi=wdt_scaled/d;   
    }
    else if(mylist.selectedIndex==2){
        dpi=hgt_scaled/d;
    }
    dpi=Math.round(dpi);
    if(d==0){
        dpi='&infin;';
    }
    document.getElementById("result_text").innerHTML=numberWithCommas(dpi)+"<br>ppi";
}
function dpi2size(){
    var dpi=document.getElementById("dpi").value;
    if(dpi!=0){
    var height=hgt_scaled/dpi;
    var width=wdt_scaled/dpi;
    var size=Math.sqrt(height*height + width*width);
    size=Math.round(size*10)/10;
    }
    else{
        size='&infin;'
    }
    document.getElementById("result_text").innerHTML=numberWithCommas(size)+"<br>inches";
}
function linkWithResizer(){
    var inputs = document.getElementsByTagName('input');
    for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener('input', resizeInput);
    }
}
function resizeInput() {
    this.style.width = (this.value.length+1) + "ch";
}
