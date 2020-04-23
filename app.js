document.querySelector(".fa-plus-circle").addEventListener("click",()=>{
    clickEvent();
    deleteItem();
    
})
document.addEventListener("keypress",function(event){
    if(event.keyCode == 13){
        clickEvent();
        deleteItem();
        
    }
    
})

function clickEvent(){
    let inputField = document.querySelector(".add-to-do");
    if(inputField.value !== ""){
        let text = "<div class=\"item\"><p class=\"para\"><i class=\"fa fa-check-circle\" style=\"font-size: 20px;margin-right: 5px;color: aqua;\"></i><span class=\"info-detail\">$Exercise</span><span><i class=\"fa fa-times-circle\" style=\"float:right;font-size: 20px;color:red;\"></i></span></p></div>";
        let newText = text.replace("$Exercise",inputField.value);
        document.querySelector(".items").insertAdjacentHTML("beforeend",newText);
    }
    inputField.value = "";
   
}
function deleteItem(){
    let items = document.querySelectorAll(".fa-times-circle");
    items.forEach(item =>{
        item.addEventListener("click",(event) =>{
            event.target.parentNode.parentNode.parentNode.remove();
        });
        item.addEventListener("mouseover",(event) =>{
            event.target.style.color = 'brown';
        })
        item.addEventListener("mouseout",(event) =>{
            event.target.style.color = 'red';
        })
    })
    

    let tick = document.querySelectorAll(".fa-check-circle");
    tick.forEach(item =>{
        item.addEventListener("click",(e) =>{
            let color = e.target.style.color;
            
            if(color == 'aqua'){
                e.target.style.color = 'brown';
                e.target.nextSibling.style.color = 'gray';
                e.target.nextSibling.style.fontStyle = 'italic';
                e.target.nextSibling.style.textDecoration = 'line-through';
            }else{
                e.target.style.color = 'aqua';
                e.target.nextSibling.style.color = 'black';
                e.target.nextSibling.style.fontStyle = 'normal';
                e.target.nextSibling.style.textDecoration = 'none';
            }
        })
    })

    
    
}








/*document.querySelector(".fa-check-circle").addEventListener("click",(event)=>{
    if(event.target.style.color == 'aqua'){
        event.target.style.color = 'brown';
        document.querySelector(".info-detail").style.textDecoration = 'line-through';
        document.querySelector(".info-detail").style.color = 'gray';
        document.querySelector(".info-detail").style.fontStyle = 'italic';
    }else{
        event.target.style.color = 'aqua';
        document.querySelector(".info-detail").style.textDecoration = 'none';
        document.querySelector(".info-detail").style.color = 'black';
        document.querySelector(".info-detail").style.fontStyle = 'normal';
    }
})
*/