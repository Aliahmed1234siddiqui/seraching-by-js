var company = document.getElementById("company");
var model = document.getElementById("model");
var list = document.getElementById("list");


var mobile = {

apple:{

    iphone10:{
        color:"black",
        camra:"100mpx",
        memory:340,
    },
    iphone11:{
        color:"blue",
        camra:"200mpx",
        memory:340,
    },
    iphone12:{
        color:"red",
        camra:"300mpx",
        memory:340,
    },
    iphone13:{
        color:"green",
        camra:"400mpx",
        memory:340,
    },
},
vivo:{
    
    y10:{
        color:"black",
        camra:"100mpx",
        memory:340,
    },
    v13:{
        color:"blue",
        camra:"200mpx",
        memory:340,
    },
    y9:{
        color:"red",
        camra:"300mpx",
        memory:340,
    },
    y4:{
        color:"green",
        camra:"400mpx",
        memory:340,
    },
},
redmi:{
    
    redmi10A:{
        color:"black",
        camra:"100mpx",
        memory:340,
    },
    redmi10C:{
        color:"blue",
        camra:"200mpx",
        memory:340,
    },
    redmi9C:{
        color:"red",
        camra:"300mpx",
        memory:340,
    },
    redmi12A:{
        color:"green",
        camra:"400mpx",
        memory:340,
    },
},
moto:{
    
    motostyle:{
        color:"black",
        camra:"100mpx",
        memory:340,
    },
    moto5G:{
        color:"blue",
        camra:"200mpx",
        memory:340,
    },
    motoE21:{
        color:"red",
        camra:"300mpx",
        memory:340,
    },
    motoE4:{
        color:"green",
        camra:"400mpx",
        memory:340,
    },
},
samsang:{
    
    galaxyA3:{
        color:"black",
        camra:"100mpx",
        memory:340,
    },
    samsangA04:{
        color:"blue",
        camra:"200mpx",
        memory:340,
    },
    samsang9:{
        color:"red",
        camra:"300mpx",
        memory:340,
    },
    samsangzFold:{
        color:"green",
        camra:"400mpx",
        memory:340,
    },
},


};

function serach(){
    // console.log(company.value+model.value);

    list.innerHTML += `
    <h1>FEATURE</h1>
    <h5> ${company.value }   ,  ${model.value}</h5>
    <li>color: ${mobile[company.value][model.value].color} </li>
    <li>camra: ${mobile[company.value][model.value].camra} </li>
    <li>memory: ${mobile[company.value][model.value].memory} </li>

    `
}
