function today() {
  var main_h2_El = document.getElementById('time-h2')

  main_h2_El.innerText = new Date().toLocaleString()
}

today()