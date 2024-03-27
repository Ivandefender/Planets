// console.log(document)

const html = document.documentElement;
// console.log(html)
const URL = "./data.json";
const currentPlanet = new URLSearchParams(window.location.search).get('planet') ?? 'mercury';
console.log(currentPlanet);
// console.log(window);

const planetMenu = document.querySelector('.planet-menu');
planetMenu.addEventListener('click',()=>{
    html.classList.toggle('menu-open');
})

let tabIndex = 0;

async function addContent(){
    html.classList.add('fade');
    const planetsData = await loadData(URL);
    console.log(planetsData);

    const currentPlanetData = await getCurrentPlanetData(planetsData);
    // console.log(currentPlanetData);

    await new Promise((resolve, reject)=>{
        insertPlanetData(currentPlanetData);
        resolve();
    })
    setTimeout(()=>{
        html.classList.remove('fade');
    },300)
}

async function loadData(url){
    const responce = await fetch(url);
    const planetsData = await responce.json();
    return planetsData;  
}

function getCurrentPlanetData(json){
    for (const planet of json) {
        // console.log(planet);
        if(planet.name.toLowerCase() == currentPlanet.toLowerCase()){
            return planet;
        }
    }
    console.warn(`Планету з назвою ${currentPlanet} не знайдено`)
    return null;
}

function insertPlanetData(planetData){
    if(!planetData){
        console.error("Дані про планету не можуть бути відображені")
        return;
    }

    const planetImages = document.querySelector(".planet__images");
    const planetTitle = document.querySelector(".planet-info__title");

    const planetRotation = document.querySelector("#rotation");
    const planetRevolution = document.querySelector("#revolution");
    const planetRadius = document.querySelector("#radius");
    const planetTemperature = document.querySelector("#temperature");

    // console.log(planetData);

    const {name, overview, structure, geology, rotation, revolution, radius, temperature, images} = planetData;

    // console.log(name, geology, images);

    const imgKeys = Object.keys(images);
    // console.log(imgKeys);
    imgKeys.forEach((image, index)=>{
        // console.log(image, index);
        const img = document.createElement("img");
        img.src = `${images[image]}`
        img.alt = `${name} ${image}`
        // console.dir(img);
        if(index === tabIndex){
            img.classList.add("active");
        }
        planetImages.append(img);
    })

    // console.log(overview, structure, geology)

    // console.log(Object.values(overview));
    // console.log(Object.values(structure));
    // console.log(Object.values(geology));

     // const [overviewKeys, structureKeys, geologyKeys] = [overview, structure, geology].map((key)=>Object.values(key));
    // console.log(overviewKeys, structureKeys, geologyKeys);

    const info = [overview, structure, geology].map((key)=>Object.values(key));
    // console.log(info);

    const planetInfo = document.querySelector(".planet-info");

    info.forEach((key, index)=>{
        const div = document.createElement('div');
        div.classList.add("planet-info__body");
        div.innerHTML = `
        <p class="planet-info__text">${key[0]}
        </p>
        <p class="planet-info__source"><span>Source :</span><a href="${key[1]}" class="planet-info__source-link" target="_blank">Wikipedia</a></p>
        `;
        if(index === tabIndex){
            div.classList.add('active');
        }
        planetInfo.append(div);
    })

    document.title = name;
    planetTitle.textContent = name;
    planetRotation.textContent = rotation;
    planetRevolution.textContent = revolution;
    planetRadius.textContent = radius;
    planetTemperature.textContent = temperature;

    html.classList.add(`${currentPlanet}`);

}

const planetBtns = document.querySelectorAll('.planet__button');
console.log(planetBtns)

planetBtns.forEach((button, index)=>{
    if(index === 0){
        button.classList.add('active');
    }
    button.addEventListener('click',(e)=>{
        console.log(e);
        tabIndex = index;
        changePlanetInfo();
    })
    
})

function changePlanetInfo(){
    const planetImages = document.querySelectorAll('.planet__images img');
    planetImages.forEach((image, index)=>{
        // console.log(image)
        if(tabIndex === index){
            image.classList.add('active');
            if(tabIndex === 2){
                planetImages[0].classList.add('active');
                image.classList.add('additional');
            }
        } else{
            image.classList.remove('active');
        }
    })

    planetBtns.forEach((button, index)=>{
        if(tabIndex === index){
            button.classList.add('active');
        } else{
            button.classList.remove('active');
        }
    })

    const planetInfoBody = document.querySelectorAll('.planet-info__body');

    planetInfoBody.forEach((body, index)=>{
        if(tabIndex === index){
            body.classList.add('active');
        } else {
            body.classList.remove('active');
        }
    })
}


addContent();








// Nullish coalescing
// console.log(null ?? "Ok");
// console.log(undefined ?? "Ok");
// console.log("First operand" ?? "Ok");