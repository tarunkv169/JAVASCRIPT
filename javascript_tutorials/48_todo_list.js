
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let title_c = title.value
    let desc_c = desc.value
    localStorage.setItem("todo", JSON.stringify([title_c,desc_c]))
    console.log(e)

    todo.innerHTML = `<h3> ${title_c} </h3>
                      <p> ${desc_c} </p> `
    
    title.value = "";
    desc.value ="";
})


deletebtn.addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.removeItem();
    todo.innerHTML = "";
})


