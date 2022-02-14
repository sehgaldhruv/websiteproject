async function getData(){
    const abc = await fetch("api.json");
    const data = await abc.json();

    console.log(data.cars[0].Car_ID);

    function openHTML(){
        // window.open(`batteries/${data.cars[0].Battery[0]}.html`)
    }
    openHTML();
}

function createModal(){
    
}

async function createModal(){
    
}

getData();


