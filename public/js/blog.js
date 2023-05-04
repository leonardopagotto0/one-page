async function getPosts() {

    takeBasicInfo();

    async function takeBasicInfo()
    {

        const postIdRequest = await fetch("/posts/ids.json");
        const postIds = await postIdRequest.json();

        postIds.forEach(async (id) => {
            const postPath = `/posts/${id}.json`;

            try {
                const postRequest = await fetch(postPath);
                const post = await postRequest.json();

                createPostCard(id, post.date, post.title);
            } catch (err) {
                console.log("Invalid JSON file: ", err);
            }
        })
    }

    async function createPostCard(id, date, title)
    {
        // Criando elementos
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("div");
        image.classList.add("image");
        image.style.backgroundImage = `url(/posts/images/${id}.jpg)`;

        const content = document.createElement("div");
        content.classList.add("content");

        const data = document.createElement("span");
        data.textContent = date;

        const titleElement = document.createElement("span");
        titleElement.classList.add("card-title");
        titleElement.textContent = title;

        // Adicionando elementos
        content.appendChild(data);
        content.appendChild(titleElement);

        card.appendChild(image);
        card.appendChild(content);

        // Adicionando card ao content
        const contentElement = document.getElementById("blog-content");
        contentElement.appendChild(card);

        return;
    }
}

getPosts();