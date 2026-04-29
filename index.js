// //*/ F1 API for Schedule */
// fetch(
//     "https://f1api.dev/api/current",
// )
//     .then((response) => response.json())
//     .then((jsonContent) => console.log(jsonContent));

// */ Next Race */
// async function loadNextRace() {
//     try {
//         const res = await fetch('https://f1api.dev/api/current/next');
//         const data = await res.json();

//         const race = data.race[0];

//         const raceDate = race.schedule.race.date;
//         const raceTime = race.schedule.race.time;

//         // Combine date + time (if time exists)
//         let dateObj;
//         if (raceTime) {
//             dateObj = new Date(`${raceDate}T${raceTime}`);
//         } else {
//             dateObj = new Date(raceDate);
//         }

//         // Format nicely
//         const formatted = dateObj.toLocaleString(undefined, {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//             hour: raceTime ? '2-digit' : undefined,
//             minute: raceTime ? '2-digit' : undefined,
//         });

//         document.getElementById('race-info').innerHTML = `
//           <strong>${race.raceName || "Next Race"}</strong><br>
//           ${formatted}
//         `;

//     } catch (err) {
//         console.error(err);
//         document.getElementById('race-info').textContent = 'Failed to load race data.';
//     }
// }

// //*/ F1 API for Drivers */
// fetch(
//     "https://f1api.dev/api/drivers/search?q=",
// )
//     .then((response) => response.json())
//     .then((jsonContent) => console.log(jsonContent));



// //*/ F1 API for Driver Standings */
// fetch(
//     "https://f1api.dev/api/current/drivers-championship",
// )
//     .then((response) => response.json())
//     .then((jsonContent) => console.log(jsonContent));




// * / F1 Api data for teams standings */

// fetch(
//     "https://f1api.dev/api/current/constructors-championship",
// )
//     .then((response) => response.json())
//     .then((jsonContent) => console.log(jsonContent));


const teamImages = {
    "Alpine": "./assets/team cards/alpine team card.png",
    "Aston Martin": "./assets/team cards/aston martin team card.png",
    "Audi": "./assets/team cards/audi team card.png",
    "Cadillac": "./assets/team cards/cadillac team card.png",
    "Ferrari": "./assets/team cards/ferrari team card.png",
    "Haas": "./assets/team cards/haas team card.png",
    "McLaren": "./assets/team cards/McLaren team card.png",
    "Mercedes": "./assets/team cards/mercedes team card.png",
    "Racing Bulls": "./assets/team cards/racing bulls team card.png",
    "Red Bull Racing": "./assets/team cards/red bull team card.png",
    "Williams": "./assets/team cards/williams team card.png",
};



// const container = document.querySelector('.gridContainer__teams');

// async function loadTeams() {
//     const res = await fetch('https://f1api.dev/api/current/constructors-championship');
//     const data = await res.json();

//     const teams = data; // or data.response depending on API

//     container.innerHTML = teams
//     map(team => {
//         return `
//        <img
//          src="${teamImages[team.team_name]}"
//          class="team click"
//        />
//      `;
//     })
//         .join('');
// }

// // async function loadTeams() {
// //     const res = await fetch('https://api.openf1.org/v1/championship_teams?session_key=9839');
// //     const data = await res.json();

// //     const teams = data; // or data.response depending on API

// //     container.innerHTML = teams
// //         .map(team => {
// //             return `
// //         <div class="grid-container__teams">
// //           <img src="${team.team_logo}" alt="${team.team_name}" />
// //           <h3>${team.team_name}</h3>
// //           <p>Position: ${team.position_current}</p>
// //         </div>
// //       `;
// //         })
// //         .join('');
// // 
