export const checkCard = (event) => {
    let el = event.target;
    console.log('test');

    if (el.classList.contains('cardsGroup')) return;

    while (!el.classList.contains('card')) {
        el = el.parentNode;
    }

    return el.id;
};
