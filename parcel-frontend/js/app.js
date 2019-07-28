import apiActions from './api/api-action';
import Home from './components/home';

import Missions from './components/missions';
import StellarBodies from './components/stellarBodies';
import Agencies from './components/agencies';

// import SingleMission from './components/singleMission';
import SingleStellarBody from './components/singleStellarBody';
// import SingleAgency from './components/singleAgency';

import AddStellarBodyModal from './components/add-stellarbody-modal';


pageBuild();

function pageBuild(){
    home();
    missions();
    stellarBodies();
    agencies();
    // singleMission();
    singleStellarBody();
    // singleAgency();
    //stellarBodyModal();
    myFunction();
}

function home(){
    const home = document.getElementById('nav_home');

    home.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44388/api/stellarbody',
            stellarbody => {
                document.querySelector('#root').innerHTML = Home(stellarbody);

            })
    });
};

function stellarBodies(){
    const stellarBody = document.getElementById('nav_stellarBody');

    stellarBody.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44388/api/stellarbody',
            stellarbody => {
                document.querySelector('#root').innerHTML = StellarBodies(stellarbody);
            })
    });

    document.getElementById('root').addEventListener('click', function(){
        if(event.target.classList.contains('add-stellarBody_submit')){
            const newBody = event.target.parentElement.querySelector('.add-stellarBody_name').value;
            const data = {
                id: 0,
                name: newBody
            };

            apiActions.postRequest('https://localhost:44388/api/stellarbody',
            data,
            stellar => {
                document.querySelector('#root').innerHTML = StellarBodies(stellar);
            })
        }
    });
        
    document.getElementById('root').addEventListener('click', function(){
        if (event.target.classList.contains('stellar_img')){
            const stellarBodyId = event.target.parentElement.querySelector('.stellar-body_id').value
            console.log(stellarBodyId)
            apiActions.getRequest('https://localhost:44388/api/stellarbody/' + stellarBodyId, 
            stellarBody => {
                document.querySelector('#root').innerHTML = SingleStellarBody(stellarBody)
            })
        }
    })
}

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
//   }

function missions(){
    const mission = document.getElementById('nav_mission');

    mission.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44388/api/mission',
            missions => {
                document.querySelector('#root').innerHTML = Missions(missions);
            })
    });

    document.getElementById('root').addEventListener('click', function(){
        if(event.target.classList.contains('add-mission_submit')){
            const newmission = event.target.parentElement.querySelector('.add-mission_name').value;
            const data = {
                id: 0,
                name: newmission
            };

            apiActions.postRequest('https://localhost:44388/api/mission',
            data,
            missions => {
                document.querySelector('#root').innerHTML = Missions(missions);
            })
        }
    });
}

function agencies(){
    const agency = document.getElementById('nav_agency');

    agency.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44388/api/agency',
            agencies => {
                document.querySelector('#root').innerHTML = Agencies(agencies);
            })
    });

    document.getElementById('root').addEventListener('click', function(){
        if(event.target.classList.contains('add-agency_submit')){
            const newagency = event.target.parentElement.querySelector('.add-agency_name').value;
            const data = {
                id: 0,
                name: newagency
            };

            apiActions.postRequest('https://localhost:44388/api/agency',
            data,
            agencies => {
                document.querySelector('#root').innerHTML = Agencies(agencies);
            })
        }
    });
}

function singleStellarBody(){

    // document.getElementById('root').addEventListener('click', function(){
    //     if (event.target.classList.contains('stellar-body_name')){
    //         const stellarBodyId = event.target.parentElement.querySelector('.stellar-body_id').value
    //         console.log(stellarBodyId)
    //         apiActions.getRequest('https://localhost:44388/api/stellarbody/'+ stellarBodyId, 
    //         stellarBody =>{
    //             document.querySelector('#root').innerHTML = SingleStellarBody(stellarBody)
    //         })
    //     }
    // })
}



    
// function stellarBodyModal(){
//     document.getElementById('root').addEventListener('click', function() {
//         if(event.target.classList.contains('add-stellarBody-modal')){
//             const modal = document.getElementById('boxbg')
//             const modalbox = document.getElementById('box')

//             modalbox.innerHTML = AddStellarBodyModal()
//             modal.style.display = 'block'
//         };
//     })

//     document.getElementById('root').addEventListener('click', function(){
//         if(event.target.classList.contains('add-stellarBody_submit')){
//             const newBody = event.target.parentElement.querySelector('.add-stellarBody_name').value;
//             const data = {
//                 id: 0,
//                 name: newBody
//             };

//             apiActions.postRequest('https://localhost:44388/api/stellarbody',
//             data,
//             stellar => {
//                 document.querySelector('#root').innerHTML = StellarBodies(stellar);
//             })
//         }
//     });
// }
