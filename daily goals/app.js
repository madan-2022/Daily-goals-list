const title=document.getElementById("title");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");

let ans=[];

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    removealltask()
    ans.push({
        title:title.value,
        description:description.value
    })
    showalltask();
    console.log(ans);
})

function showalltask(){
    ans.forEach((value,index) => {
        const div=document.createElement("div");
    div.setAttribute("class","task");

    const innerdiv=document.createElement("div");
    div.append(innerdiv);

    const p=document.createElement("p");
    p.innerText=value.title;
    innerdiv.append(p);

    const span=document.createElement("span");
    span.innerText=value.description;
    innerdiv.append(span);

    const btn=document.createElement("button");
    btn.innerText="-";
    div.append(btn);
    btn.addEventListener("click",()=>{
        removealltask()
        ans.splice(index,1);
        showalltask();
    })
    
    container.append(div);
    });
    
}

function removealltask(){
    ans.forEach((value,index)=>{
        const div=document.querySelector(".task");
        div.remove();
        
    })
}
