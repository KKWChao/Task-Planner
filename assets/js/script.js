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
#####################################################################
<-                             CODE                                -> 
#####################################################################
##################################################################### 
*/

var main_El = $('#main-container')

function timeCreator() {
  var ul_El = document.createElement('ul')
  main_El.append(ul_El)
  console.log(1)
  for (let i=0; i<24; i++) {
    var li_El = document.createElement('li')
    li_El.setAttribute('data-type', i)

    li_El.innerHTML += i+1
    ul_El.appendChild(li_El)
    
  }
}

function setListText(idx) {
  var listItem = $('li[data-type|=idx]')
}





function main() {
  timeCreator()
}
main()