getRef = x => document.querySelector(x);

getRef('.modal-made__list').addEventListener('click', onClick);

function onClick(evt) {

    if (evt.target.nodeName !== 'BUTTON') return;
    const number = evt.target.dataset.action
    if (!getRef(`[data-dots="${number}"]`).classList.contains("visually-hidden")) {
        showMore(number);
        return;
    }
    hideText(number)

}
function hideText(number) {
    getRef(`[data-dots="${number}"]`).classList.remove("visually-hidden");
    getRef(`[data-text="${number}"]`).style.display = 'none';
    getRef(`[data-action="${number}"]`).innerHTML = "show more";
}
function showMore(number) {
    getRef(`[data-dots="${number}"]`).classList.add("visually-hidden");
    getRef(`[data-text="${number}"]`).style.display = 'inline';
    getRef(`[data-action="${number}"]`).innerHTML = "hide";
}


