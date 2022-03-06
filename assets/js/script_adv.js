/* 
OUTLINE

#####################################################################
#####################################################################
<-                            NEEDED                               -> 
#####################################################################
#####################################################################


- current date display
- 1 hour time blocks -> 24 hour blocks
  - color coded blocks for time elapsed
- clickable time block to add events inside + update inside text
  - save button to local storage
- events are saved in local storage

#####################################################################
#####################################################################
<-                            OUTLINE                              -> 
#####################################################################
#####################################################################

1. FIGURE OUT LOCAL STORAGE
  a. var obj_day =   [
                    {
                      "00":"event",
                      "01":"event",
                      "02":"event",
                      ...
                      "22":"event",
                      "23":"event",
                      "24":"event"
                    }
                  ]

/* 
 one key

 obj[]

 key value pair 

 key = loop[i]

 obj.key = ""

 
*/

/*

2. SET UP JS FRAMEWORK
4. CREATE FUNCTIONS
3. CONNECT FUNCTIONS

#####################################################################
#####################################################################
<-                          PSEUDO CODE                            -> 
#####################################################################
#####################################################################


declare variables/DOM

layout

for (i=0; i<24; i++) {
  time_div = document.createElement('div')
  
  save_button = document.createElement('button')

  set ATTRIBUTES to have certain width/height
    class of time_period

  DATA ATTRIBUTES to distiguish each task
    time_div.setAttribute('data-id', 'i') or
    $('#time_period').data('id',i)

  DATA ATTRIBUTES for save button also

  function to LOAD tasks in innerhtml

  save_button = document.createElement('button')
  function to SAVE to LOCAL STORAGE

  main.append(time_div)
  time_div.append(button) - appended to time_div 

}
  

SAVE FUNCTION

DELETE FUNCTION

LOADLOCALSTORAGE FUNCTION

EDIT_TASK FUNCTION


*/

/* 
#####################################################################
##                                                                 ##
##                            CODE                                 ## 
##                                                                 ##
##################################################################### 
*/



/////////////////////////////////////////////////////////////////////

//                          VARIABLES                              //

/////////////////////////////////////////////////////////////////////

var main_El = $('#main-container')
var currentDate = new Date()
var dateTime = "Today: " + currentDate.getDate() + "/" 
                + (currentDate.getMonth() + 1) + "/"
                + currentDate.getFullYear() + " 0 "
                + currentDate.getHours() + ":"
                + currentDate.getMinutes() + ":"
                + currentDate.getSeconds();


/////////////////////////////////////////////////////////////////////

//                            TIME                                 //

/////////////////////////////////////////////////////////////////////

function today() {
  var main_h2_El = document.getElementById('time-h2')

  main_h2_El.innerText = new Date().toLocaleString()
}


/////////////////////////////////////////////////////////////////////

//                  SAVING/GETTING/DELETING                        //

/////////////////////////////////////////////////////////////////////

function saveLocalStorage(idx) {
  var main_h2_El = document.getElementById('time-h2')
  
  
}

function getLocalStorage() {

}


function deleteButtonFunction() {

}



/////////////////////////////////////////////////////////////////////

//                       CORE FUNCTION                             //

/////////////////////////////////////////////////////////////////////


function timeCreator() {
  var main_div_El = document.createElement('div')
  main_El.append(main_div_El)
  
  for (let i=0; i<24; i++) {
    // creating elements for time slots
    var time_a_El = document.createElement('a')
    time_a_El.setAttribute('data-type', i)

    time_a_El.innerHTML += i + " hour | "
    main_div_El.append(time_a_El)

    // save button for each time slot
    var save_button = document.createElement('button')
    save_button.setAttribute('data-type', i)
    save_button.innerHTML = "SAVE"

    time_a_El.append(save_button)
    
  }
}

/////////////////////////////////////////////////////////////////////

//                       MAIN FUNCTION                             //

/////////////////////////////////////////////////////////////////////


function main() {
  timeCreator()
  today()
}
main()