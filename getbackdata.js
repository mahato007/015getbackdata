function savetoLocalStorage(event){
    event.preventDefault();
    let ch1=event.target.name.value;
    let ch2=event.target.email.value;
    let ch3=event.target.pwd.value;

    const obj={
        ch1,
        ch2,
        ch3
    }
    axios.post("https://crudcrud.com/api/2981e7d857954b41b7df025d6b8f4581/studentData",obj)
    .then((res)=>{
        showonScreen(res.data);
        console.log(res);
    }).catch((err)=>console.log(err));

    // showonScreen(obj);
}

window.addEventListener("DOMContentLoaded",()=>{
    const data=axios.get("https://crudcrud.com/api/2981e7d857954b41b7df025d6b8f4581/studentData")
    .then((response)=>{
        for(var i=0;i<response.data.length;i++)
        {
            showonScreen(response.data[i])
        }
    })
    .catch((error)=>{console.log(error)
    })
    console.log(data);
})

function showonScreen(obj){
    let item=document.getElementById("list");
    let childel=document.createElement("li");
    childel.textContent=obj.ch1+"-"+obj.ch2+"-"+obj.ch3;
    const deletebtn=document.createElement("input");
    deletebtn.type="button";
    deletebtn.value="Delete";
    deletebtn.onclick=()=>{
        item.removeChild(childel);
    }
    childel.appendChild(deletebtn);

    const editbtn=document.createElement("input");
    editbtn.type="button";
    editbtn.value="Edit";
    editbtn.onclick=()=>{
        localStorage.removeItem(obj.ch1)
    }
    childel.appendChild(editbtn);
    item.appendChild(childel);
}
