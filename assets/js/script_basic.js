//////////////////////////////////
//          Variables           //
//////////////////////////////////




//////////////////////////////////
//            Time              //
//////////////////////////////////

function today() {
  var main_h2_El = document.getElementById('time-h2')
  main_h2_El.innerText = new Date().toLocaleString()
}

//////////////////////////////////
//            Save              //
//////////////////////////////////

function setLocalStorage() {

}





//////////////////////////////////
//            main              //
//////////////////////////////////

function main() {
  today()
}

main()