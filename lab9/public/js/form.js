(function(){
    const staticForm = document.getElementById("static-form");
    if(staticForm){
        const textAreaELement = document.getElementById("textArea");
    
        staticForm.addEventListener("submit",event=>{
            event.preventDefault();

            try{
                let textAreaValue = textAreaELement.value;
                let textLowerCase = textAreaValue.toLowerCase();
                let textNonAlphanumeric = textLowerCase.replace(/[^\w]|_/g,"").replace(/\s+/g,"");
                let textArray = textNonAlphanumeric.split("");
                let reversedArray = textArray.reverse();
                let reversedText = reversedArray.join("");

                if(textNonAlphanumeric == reversedText && reversedText!= ""){
                    let getOrderList = document.getElementById("attempts");
                    let createdListSuccess = document.createElement("li");
                    createdListSuccess.setAttribute("class","is-palindrome");
                    createdListSuccess.innerHTML = textAreaValue;
                    getOrderList.appendChild(createdListSuccess);
                    //reference for add list :https://www.imooc.com/article/12888
                }else{
                    let getOrderList = document.getElementById("attempts");
                    let createdListFailure = document.createElement("li");
                    createdListFailure.setAttribute("class","not-palindrome");
                    createdListFailure.innerHTML = textAreaValue;
                    getOrderList.appendChild(createdListFailure);
                }
            }catch(e){

            }
        })
    }
})();