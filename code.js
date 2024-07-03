


async function youTube(){
    let JsonData = await fetch("./JsonData.json");
    let val = await JsonData.json();

    console.log(val);


    let playBox = document.getElementById("playBox");
    let playList = document.getElementById("playList");

   

    for(let i of val){
        let div = document.createElement("div");
        div.innerHTML = `<img src="${i.thumbnail}">
                        <h1 style="color:white;">${i.title}</h1>
                        <br><br>`
        
        playList.appendChild(div);

        div.addEventListener("click",()=>{
            playBox.innerHTML = `<video src="${i.video}" controls
                                autoplay</video>`
        })
        
    }
}
youTube();
// async function youTube(){
//     let JsonData = await fetch("./JsonData.json");
//     let val = await JsonData.json();

//     console.log(val);



//     let playBox = document.getElementById("playBox");
//     let playList = document.getElementById("playList");

//     for(let i of val){
//         let div = document.createElement("div");
//         div.innerHTML = `<img src="${i.thumbnail}">
//                         <h1>${i.title}</h1>
//                         <br><br>`
        
//         playList.appendChild(div);

//         div.addEventListener("click",()=>{
//             playBox.innerHTML = `<video src="${i.video}" controls
//                                 autoplay</video>`
//         })
        
//     }
// }
// youTube();