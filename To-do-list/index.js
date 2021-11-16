document.addEventListener("DOMContentLoaded",() => {
    
    const submit = document.getElementById("submit");
    const ul = document.querySelector(".ul");
    



    let count =0;
    submit.addEventListener("click",function(){
        count++;
    })


    function show()
    {


             const text = document.getElementById("text").value;
            
            if(text === ''){
                alert("Enter your To-Do-List")
            }
            else{
               

              
                if(count <= 9){
                    const answers = [text];
                    let newListItem = document.createElement('li');
                    newListItem.className = 'div1';
                    let check = document.createElement('input');
                    check.type = "checkbox";
                    check.className = 'check';
                    let button = document.createElement('button')
                    button.id = "button";
                    newListItem.textContent = answers;        
                    ul.appendChild(newListItem);
                    newListItem.appendChild(check); 
                    newListItem.appendChild(button);

                    button.onclick = function(){
                        ul.removeChild(newListItem);
                        newListItem.removeChild(check);
                        newListItem.removeChild(button);
                     }
                    
                   
                    
                 }
                else{
                    alert("reach the max limit of")
                }
               
            }
           
    }

    document.getElementById("submit").onclick = show;

    


   




















})