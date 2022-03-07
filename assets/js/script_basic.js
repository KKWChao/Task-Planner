//////////////////////////////////
//          Variables           //
//////////////////////////////////

// save buttons
var save_9am_btn = $('#save-9am')
var save_10am_btn = $('#save-10am')
var save_11am_btn = $('#save-11am')
var save_12pm_btn = $('#save-12pm')
var save_1pm_btn = $('#save-1pm')
var save_2pm_btn = $('#save-2pm')
var save_3pm_btn = $('#save-3pm')
var save_4pm_btn = $('#save-4pm')
var save_5pm_btn = $('#save-5pm')

// text boxes for styling




//////////////////////////////////
//            Time              //
//////////////////////////////////

function today() {
  var main_h2_El = document.getElementById('time-h2')
  var currentTime = new Date().getHours();

  main_h2_El.innerText = new Date().toLocaleString()

  console.log(currentTime)

  if (currentTime == 9) {
    $('#text-9am').css('background', 'rgba(255, 87, 51, 0.5)')
  } else if (currentTime > 9) {
    $('#text-9am').css('background', 'rgba(201, 201, 201, 0.5')
  } else {
    $('#text-9am').css('background', 'rgba( 177, 255, 132, 0.5')
  }

  if (currentTime == 10) {
    $('#text-10am').css('background', 'rgba(255, 87, 51, 0.5)')
  } else if (currentTime > 10) {
    $('#text-10am').css('background', 'rgba(201, 201, 201, 0.5')
  } else {
    $('#text-10am').css('background', 'rgba( 177, 255, 132, 0.5')
  }

  if (currentTime == 11) {
    $('#text-11am').css('background', 'rgba(255, 87, 51, 0.5)')
  } else if (currentTime > 11) {
    $('#text-11am').css('background', 'rgba(201, 201, 201, 0.5')
  } else {
    $('#text-11am').css('background', 'rgba( 177, 255, 132, 0.5')
  }

  if (currentTime == 12) {
    $('#text-12pm').css('background', 'rgba(255, 87, 51, 0.5)')
  } else if (currentTime > 12) {
    $('#text-12pm').css('background', 'rgba(201, 201, 201, 0.5')
  } else {
    $('#text-12pm').css('background', 'rgba( 177, 255, 132, 0.5')
  }

  if (currentTime == 13) {
    $('#text-1pm').css('background', 'rgba(255, 87, 51, 0.5)')
  } else if (currentTime > 13) {
    $('#text-1pm').css('background', 'rgba(201, 201, 201, 0.5')
  } else {
    $('#text-1pm').css('background', 'rgba( 177, 255, 132, 0.5')
  }

  if (currentTime == 14) {
    $('#text-2pm').css('background', 'rgba(255, 87, 51, 0.5)')
  } else if (currentTime > 14) {
    $('#text-2pm').css('background', 'rgba(201, 201, 201, 0.5')
  } else {
    $('#text-2pm').css('background', 'rgba( 177, 255, 132, 0.5')
  }
  
  if (currentTime == 15) {
    $('#text-3pm').css('background', 'rgba(255, 87, 51, 0.5)')
  } else if (currentTime > 15) {
    $('#text-3pm').css('background', 'rgba(201, 201, 201, 0.5')
  } else {
    $('#text-3pm').css('background', 'rgba( 177, 255, 132, 0.5')
  }

  if (currentTime == 16) {
    $('#text-4pm').css('background', 'rgba(255, 87, 51, 0.5)')
  } else if (currentTime > 16) {
    $('#text-4pm').css('background', 'rgba(201, 201, 201, 0.5')
  } else {
    $('#text-4pm').css('background', 'rgba( 177, 255, 132, 0.5')
  }

  if (currentTime == 17) {
    $('#text-5pm').css('background', 'rgba(255, 87, 51, 0.5)')
  } else if (currentTime > 17) {
    $('#text-5pm').css('background', 'rgba(201, 201, 201, 0.5')
  } else {
    $('#text-5pm').css('background', 'rgba( 177, 255, 132, 0.5')
  }
  



  
  
}

function colorTime() {
}



//////////////////////////////////
//           Loading            //
//////////////////////////////////

function getLocalStorage() {
  var am_9 = localStorage.getItem('9am') || "";
  var am_10 = localStorage.getItem('10am') || "";
  var am_11 = localStorage.getItem('11am') || "";
  var am_12 = localStorage.getItem('12pm') || "";
  var am_1 = localStorage.getItem('1pm') || "";
  var am_2 = localStorage.getItem('2pm') || "";
  var am_3 = localStorage.getItem('3pm') || "";
  var am_4 = localStorage.getItem('4pm') || "";
  var am_5 = localStorage.getItem('5pm') || "";

  $('#text-9am').val(am_9)
  $('#text-10am').val(am_10)
  $('#text-11am').val(am_11)
  $('#text-12pm').val(am_12)
  $('#text-1pm').val(am_1)
  $('#text-2pm').val(am_2)
  $('#text-3pm').val(am_3)
  $('#text-4pm').val(am_4)
  $('#text-5pm').val(am_5)
}


//////////////////////////////////
//            main              //
//////////////////////////////////

function main() {

  today()
  getLocalStorage()

  // eventlistners for each save icon
  save_9am_btn.on('click', () => {
    localStorage.setItem('9am', $('#text-9am').val())
  })
  save_10am_btn.on('click', () => {
    localStorage.setItem('10am', $('#text-10am').val())
  })
  save_11am_btn.on('click', () => {
    localStorage.setItem('11am', $('#text-11am').val())
  })
  save_12pm_btn.on('click', () => {
    localStorage.setItem('12pm', $('#text-12pm').val())
  })
  save_1pm_btn.on('click', () => {
    localStorage.setItem('1pm', $('#text-1pm').val())
  })
  save_2pm_btn.on('click', () => {
    localStorage.setItem('2pm', $('#text-2pm').val())
  })
  save_3pm_btn.on('click', () => {
    localStorage.setItem('3pm', $('#text-3pm').val())
  })
  save_4pm_btn.on('click', () => {
    localStorage.setItem('4pm', $('#text-4pm').val())
  })
  save_5pm_btn.on('click', () => {
    localStorage.setItem('5pm', $('#text-5pm').val())
  })
}

main()