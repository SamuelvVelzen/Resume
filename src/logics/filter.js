export const checkCard = (event) => {
    let el = event.target;

    if (el.classList.contains('cardsGroup')) return;

    while (!el.classList.contains('card')) {
        el = el.parentNode;
    }

    return el.id;
};
