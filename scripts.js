// Write your JavaScript code here.
// Remember to pay attention to page loading!
function main() {
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
    

    btnTakeOff.addEventListener('click', function() {
        let takeoffConfirm = window.confirm('Conform that the shuttle is ready for takeoff.  Click OK to confirm.')
        if (takeoffConfirm) {
            flightStatus.innerHTML = 'Shuttle in flight.'
            shuttleBackground.style.backgroundColor = 'blue'
            spaceShuttleHeight.innerHTML = (height + 10000).toString()
        } else {
            alert('Takeoff cannot be completed.  Please try again.')
        }
    }); //end of takeoff button

    btnLanding.addEventListener('click', function() {
        window.confirm('The shuttle is landing. Landing gear engaged.')
        flightStatus.innerHTML = 'The shuttle has landed.'
        shuttleBackground.style.backgroundColor = 'green'
        spaceShuttleHeight.innerHTML = "0"
    }); //end of land button

    btnAbortMission.addEventListener('click', function() {
            let abortMissionConfirm = window.confirm('Confirm that you want to abort the mission.  Click OK confirm.')
            if (abortMissionConfirm) {
                flightStatus.innerHTML = 'Mission Aborted.'
                shuttleBackground.style.backgroundColor = 'green'
                spaceShuttleHeight.innerHTML = "0"

            } else {
                alert('Mission cannot be aborted.  Please try again.')
            }
        }) // end of Abort Mission button

    btnUp.addEventListener('click', function() {
        let rocketHeight = rocket.style.bottom
        rocketHeight = rocketHeight.substring(0, rocketHeight.length - 2)
        rocketHeight = Number(rocketHeight) + 10
        rocketHeight = rocketHeight.toString() + "px"
        rocket.style.bottom = rocketHeight
 
        height = Number(spaceShuttleHeight.innerHTML)
        if (height >= 0 && height <260000){
            spaceShuttleHeight.innerHTML = (height + 10000).toString()
        } else {
            alert("Shuttle has reached maximum altitude.  Please push the down button to begin descent.")
        } 
        
    });

    btnDown.addEventListener('click', function() {
        let rocketHeight = rocket.style.bottom
        rocketHeight = rocketHeight.substring(0, rocketHeight.length - 2)
        rocketHeight = Number(rocketHeight) - 10
        rocketHeight = rocketHeight.toString() + "px"
        rocket.style.bottom = rocketHeight
        height = Number(spaceShuttleHeight.innerHTML)
        if (height >= 10000) {
            spaceShuttleHeight.innerHTML = (height - 10000).toString()
        } else {
            alert("Shuttle height too low.  Request cannot be completed.")
        }
    });
    btnRight.addEventListener('click', function(){
        let rocketHoriz = rocket.style.left
        rocketHoriz = rocketHoriz.substring(0, rocketHoriz.length -2)
        rocketHoriz = Number(rocketHoriz) + 10
        rocketHoriz = rocketHoriz.toString() + "px"
        rocket.style.left = rocketHoriz
    });
    btnLeft.addEventListener('click', function(){
        let rocketHoriz = rocket.style.left
        rocketHoriz = rocketHoriz.substring(0, rocketHoriz.length -2)
        rocketHoriz = Number(rocketHoriz) - 10
        rocketHoriz = rocketHoriz.toString() + "px"
        rocket.style.left = rocketHoriz
        console.log(shuttleBackground);
    });

}
window.addEventListener('load', main);

