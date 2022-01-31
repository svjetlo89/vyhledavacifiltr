let userResult = document.querySelector(".userList");
let input = document.querySelector(".inputFilter");
let userList = [];
// console.log(userResult);
// console.log(input);

getData();

input.addEventListener("input", function(e){
    dataFilter(e.target.value);
});

async function getData(){
    let allUsers = await fetch("https://randomuser.me/api?results=10");

    let data = await allUsers.json();
    console.log(data);

    userResult.innerHTML = "";

    data.results.forEach(user => {
        let li = document.createElement("li");

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="userInformation">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
            `
        userResult.appendChild(li);

        userList.push(li);
    });
}

function dataFilter(inputText){
    userList.forEach(user1 => {
        if(user1.innerText.toLowerCase().includes(inputText.toLowerCase())){
            user1.classList.remove("hide");
        } else{
            user1.classList.add("hide");
        }
    });
}