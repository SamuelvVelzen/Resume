import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export const scrollToRef = (ref) => {
    const paddingTop = parseFloat(
        window.getComputedStyle(ref.current).getPropertyValue('padding-top')
    );
    console.log(paddingTop);

    window.scrollTo({
        left: 0,
        top: ref.current.offsetTop - paddingTop,
        behavior: 'smooth',
    });
};
