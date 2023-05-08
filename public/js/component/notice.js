function notice()
{
    const notice = document.createElement("div");
    notice.classList.add("notice");

    const noticeContent = document.createElement("div");
    noticeContent.classList.add("content");

    const noticeTitle = document.createElement("span");
    noticeTitle.classList.add("title");
    noticeTitle.textContent = "Aviso:";

    const noticeText = document.createElement("span");
    noticeText.classList.add("text");
    noticeText.textContent = "Este site está em desenvolvimento ou manuntenção, portanto, algumas funcionalidades podem não estar disponíveis.";

    noticeContent.appendChild(noticeTitle);
    noticeContent.appendChild(noticeText);

    notice.appendChild(noticeContent);

    document.body.insertAdjacentElement("afterbegin", notice)
}