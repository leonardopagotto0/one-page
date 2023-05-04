requestPost();

async function requestPost()
{

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const response = await fetch(`/posts/${postId}.json`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });

    if(!response.ok){
        alert("Erro ao carregar postagem!");
        return;
    }

    const data = await response.json();
    const fields = Object.keys(data);

    for (let index = 0; index < fields.length; index++) {
        const field = fields[index];

        const element = document.getElementById(field);
        element.innerHTML = data[field];
    }
}

async function navegateTo(elementId)
{
    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: "smooth", block: "start"});
}

async function redirectUser(url)
{
    console.log("clieked");
    window.location.assign(url)

}