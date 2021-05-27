// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const btnTakeOff = document.getElementById('takeoff');
    const btnLanding = document.getElementById('landing');
    const btnAbortMission = document.getElementById('missionAbort');
    const btnUp = document.getElementById('up')
    const btnDown = document.getElementById('down')
    const btnLeft = document.getElementById('left')
    const btnRight = document.getElementById('right')
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');
    let height = Number(spaceShuttleHeight.innerHTML)



    // function changeHeight(heightChange, operation){
    //     let height = Number(spaceShuttleHeight.innerHTML)
    //     if(operation === "increase"){
    //         height += heightChange
    //     } else if (operation === "decrease"){
    //         height -= heightChange;
    //     }
    //     height = toString(height)
    //     spaceShuttleHeight.innerHTML = height
    // }

    // move_img(str) {
    //     let step = 10;
    //     switch (str) {
    //         case 'down':
    //             car x = rocket.offsetTop;
    //             x = x + step;
    //             rocket.style.top = x + 'px'
    //             break;
}
}
btnTakeOff.addEventListener('click', function() {
    let takeoffConfirm = prompt('Conform that the shuttle is ready for takeoff.  Type C for confirm.')
    if (takeoffConfirm.toUpperCase() == 'C' || takeoffConfirm.toUpperCase() == 'CONFIRM') {
        flightStatus.innerHTML = 'Shuttle in flight.'
        shuttleBackground.style.backgroundColor = 'blue'
        spaceShuttleHeight.innerHTML = (height + 10000).toString()
    } else {
        alert('Takeoff cannot be completed.  Please try again.')
    }
}); //end of takeoff button

btnLanding.addEventListener('click', function() {
    alert('The shuttle is landing. Landing gear engaged.')
    flightStatus.innerHTML = 'The shuttle has landed.'
    shuttleBackground.style.backgroundColor = 'green'
    spaceShuttleHeight.innerHTML = "0"
}); //end of land button

btnAbortMission.addEventListener('click', function() {
        let abortMissionConfirm = prompt('Confirm that you want to abort the mission.  Type C for confirm.')
        if (abortMissionConfirm.toUpperCase() == 'C' || abortMissionConfirm.toUpperCase() == 'CONFIRM') {
            flightStatus.innerHTML = 'Mission Aborted.'
            shuttleBackground.style.backgroundColor = 'green'
            spaceShuttleHeight.innerHTML = "0"

        } else {
            alert('Mission cannot be aborted.  Please try again.')
        }
    }) // end of Abort Mission button

btnUp.addEventListener('click', function() {

    height = Number(spaceShuttleHeight.innerHTML)
    spaceShuttleHeight.innerHTML = (height + 10000).toString()
});

btnDown.addEventListener('click', function() {
    move_img('down');
    height = Number(spaceShuttleHeight.innerHTML)
    if (height >= 10000) {
        spaceShuttleHeight.innerHTML = (height - 10000).toString()
    } else {
        alert("Shuttle height too low.  Request cannot be completed.")
    }

});

// btnRight.addEventListener('click', function(){

// });

// btnLeft.addEventListener('click', function(){

// });
// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.


}

// window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//   });
window.addEventListener('load', init);