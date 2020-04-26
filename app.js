const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
//Creating the function constructor of Person
function Person(firstname,lastname,email,info){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.info = info;
}


//Gettin all info from user input
function getAllInfo(){
    let firstName = document.querySelector(".firstname").value;
    let lastName = document.querySelector(".lastname").value;
    let email = document.querySelector(".email").value;
    let info = document.querySelector(".your-info").value;

    firstName = new Person(firstName,lastName,email,info);
    
    return {
        info:firstName,
    }
}


//Adding items to local storage
function addAllItemsToLocal(){
    let info = getAllInfo().info;
    if(info.firstname !== "" || info.lastname !== ""){
        let getItemFromLocal = localStorage.getItem("data");
        getItemFromLocal = JSON.parse(getItemFromLocal);
        if(getItemFromLocal !== null){
            getItemFromLocal = {
                ...getItemFromLocal,
                [info.firstname]:info,
            }
        }else{
            getItemFromLocal = {
                [info.firstname]:info,
            };
        }
        
        localStorage.setItem("data",JSON.stringify(getItemFromLocal));
    }
    location.reload();
    
}

function displayInfo(){
    //Getting items from local storage
    let allInfo = localStorage.getItem("data");
    //parsing json to js object
    allInfo = JSON.parse(allInfo);
    //creating a list of objects
    listOfAllInfo = Object.values(allInfo);
    
    for(let i=listOfAllInfo.length-1;i>=0;i--){
        let date = new Date();
        let html = `<div class="all-infos"><div class="info"><div \
                class="left"><img src="images/profile.png" alt="" class="profile"">\
                </div><div class="right"><p><b>Author:</b><br><span class="firstname">${listOfAllInfo[i].firstname}</span> ${listOfAllInfo[i].lastname} </p><p>${listOfAllInfo[i].email}\
                </p><h3 style="color:rgb(32, 25, 25);margin-top:20px;">Your Details:</h3>\
                <p style="color:rgb(39, 36, 36)">${listOfAllInfo[i].info}</p>
                
                </div><i class="fa fa-trash-o fa-2x"></i></div></div>`;

        let x = document.querySelector(".infos");
        x.innerHTML += html;
        resetInputField();
    }
        
    
    
    
    
}
displayInfo();





function resetInputField(){
    document.querySelector(".firstname").value = "";
    document.querySelector(".lastname").value = "";
    document.querySelector(".email").value = "";
    document.querySelector(".your-info").value = "";
}









/*
if(allInfo.firstname !=="" || allInfo.lastname !== ""){
        let html = `<div class="all-infos"><div class="info"><div \
                class="left"><img src="images/profile.png" alt="" class="profile"">\
                </div><div class="right"><p><b>Author:</b><br>${allInfo.firstname} ${allInfo.lastname} </p><p>${allInfo.email}\
                </p><h3 style="color:rgb(32, 25, 25);margin-top:20px;">Your Details:</h3>\
                <p style="color:rgb(39, 36, 36)">${allInfo.info}</p><p>Published at:</p>
                <p class="date" style="color:gray;"></p></div></div></div>`;

        addAllItemsToLocal(allInfo);
        resetInputField();
    }

*/