document.getElementById("add").addEventListener("click", ()=>{
    console.log("Updating list....");
    tit=document.getElementById('title').value;
   desc=document.getElementById('description').value;
    if(localStorage.getItem('itemJason')==null){
        itemJasonArray=[];
        itemJasonArray.push([tit,desc]);
        const myJSON = JSON.stringify(itemJasonArray);
        localStorage.setItem('itemsJason',myJSON)
    }
    else{
        itemJasonArrayStr=localStorage.getItem('itemJason')
        itemJasonArray=JASON.parse(itemJasonArrayStr);
        itemJasonArray.push([tit,desc]);
        const myJSON = JSON.stringify(itemJasonArray);
        localStorage.setItem('itemsJason',myJSON)
    }
});