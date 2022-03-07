//////////////////////////////////
//          Variables           //
//////////////////////////////////

var save_9am_btn = $('#save-9am')
var save_10am_btn = $('#save-10am')
var save_11am_btn = $('#save-11am')
var save_12pm_btn = $('#save-12pm')
var save_1pm_btn = $('#save-1pm')
var save_2pm_btn = $('#save-2pm')
var save_3pm_btn = $('#save-4pm')
var save_4pm_btn = $('#save-5pm')
var save_5pm_btn = $('#save-6pm')




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

function setLocalStorage(input) {

  localStorage.setItem('eventStorage', $('#text-9am').val())
}





//////////////////////////////////
//            main              //
//////////////////////////////////

function main() {

  today()

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