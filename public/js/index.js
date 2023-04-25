
async function setMap(element, opts)
{
    const mapElement = document.getElementById('map');
    const btns = element.parentElement.children;

    for(let i = 0; i < btns.length ; i++)
    {
        btns[i].style.backgroundColor = "white";
    }
    
    element.style.backgroundColor = "#a8dadc";

    const locations = {
        "sp": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.973065051744!2d-46.64758932378195!3d-23.533471160569828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce591d38fbb6dd%3A0x562e7e1ffac577d4!2sMuseu%20das%20Favelas!5e0!3m2!1spt-BR!2sbr!4v1682441099103!5m2!1spt-BR!2sbr"
        ,"gv": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14625.709298422287!2d-46.841032732655584!3d-23.58900279573601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0086d956b33b%3A0x17788d78a4cc25a5!2sGranja%20Viana%2C%20Cotia%20-%20SP%2C%2006345-290!5e0!3m2!1spt-BR!2sbr!4v1682441618849!5m2!1spt-BR!2sbr"
        ,"bp": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.462282586044!2d-46.53830278443401!3d-22.97002224590669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec9b872e7d58d%3A0x984814861ef280c7!2sAv.%20Dom%20Pedro%20I%2C%20485%20-%20Jardim%20Nova%20Braganca%2C%20Bragan%C3%A7a%20Paulista%20-%20SP%2C%2012914-481!5e0!3m2!1spt-BR!2sbr!4v1643160094735!5m2!1spt-BR!2sbr"
    }

    Object.keys(locations).forEach(l => {
        if(l == opts) mapElement.src = locations[l];
    });
}

