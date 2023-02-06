let input = document.querySelector(".main");
let inputButton =document.querySelector(".add");
let html;
let selection = document.querySelector(".mila");
let editSelector;
let selectionOfFuture;
let selectionOfDelete;
let selectionOfContainer;
window.addEventListener("keypress",function(e){
   if(input.value.length!== 0){
    if(e.key =="Enter")
    {
        html =`<li class="lala"><span class="future">${input.value}</span><span><button class="qala">Edit</button><button class="delete">Delete</button></span></li>`+`<br>`;

        selection.insertAdjacentHTML("beforeend",html);
        

        



        input.value ="";
         
    }
    selectionOfFuture = document.querySelectorAll(".future");


        editSelector=document.querySelectorAll(".qala");
        
        for(let i=0;i<editSelector.length;i++)
        {
            
            let milan=i;
            editSelector[i].addEventListener("click",function(){
                input.value = selectionOfFuture[milan].textContent;
                selectionOfContainer[milan].style.display="none";
            })
        }
        selectionOfDelete = document.querySelectorAll(".delete");
        selectionOfContainer = document.querySelectorAll(".lala")
        for(let i=0;i<selectionOfDelete.length;i++)
        {
            let milan =i;
            selectionOfDelete[i].addEventListener("click",function(){
                selectionOfContainer[milan].style.display="none";
                })
            }}

        
})

inputButton.addEventListener("click",function(){
    if(input.value.length!==0){

         html =`<li class="lala"><span class="future">${input.value}</span><span><button class="qala">Edit</button><button class="delete">Delete</button></span></li>`+`<br>`;
        selection.insertAdjacentHTML("beforeend",html);


        selectionOfFuture = document.querySelectorAll(".future");


        editSelector=document.querySelectorAll(".qala");
        
        for(let i=0;i<editSelector.length;i++)
        {
        
            let milan=i;
            editSelector[i].addEventListener("click",function(){
                input.value = selectionOfFuture[milan].textContent;
                selectionOfContainer[milan].style.display="none";
            })
        }
        selectionOfDelete = document.querySelectorAll(".delete");
        selectionOfContainer = document.querySelectorAll(".lala")
        for(let i=0;i<selectionOfDelete.length;i++)
        {
            let milan =i;
            selectionOfDelete[i].addEventListener("click",function(){
                selectionOfContainer[milan].style.display="none";
                    
                })
            }

        }
        input.value ="";
        
});




