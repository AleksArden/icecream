function readMore() {
    const dots = document.getElementById('dots');
    const more = document.getElementById('more');
    const btn = document.getElementById('btn');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btn.innerHTML = 'read more';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btn.innerHTML = 'hide';
        more.style.display = 'inline';
    }
}

document.querySelectorAll('.readMore').forEach(el => {
    el.addEventListener('click', function () {
        readMore();
    });
});

function readMoreFirst() {
    const dotsFirst = document.getElementById('dotsFirst');
    const moreFirst = document.getElementById('moreFirst');
    const btnFirst = document.getElementById('btnFirst');

    if (dotsFirst.style.display === 'none') {
        dotsFirst.style.display = 'inline';
        btnFirst.innerHTML = 'read more';
        moreFirst.style.display = 'none';
    } else {
        dotsFirst.style.display = 'none';
        btnFirst.innerHTML = 'hide';
        moreFirst.style.display = 'inline';
    }
}

document.querySelectorAll('.readMoreFirst').forEach(el => {
    el.addEventListener('click', function () {
        readMoreFirst();
    });
});

function readMoreSecond() {
    const dotsSecond = document.getElementById('dotsSecond');
    const moreSecond = document.getElementById('moreSecond');
    const btnSecond = document.getElementById('btnSecond');

    if (dotsSecond.style.display === 'none') {
        dotsSecond.style.display = 'inline';
        btnSecond.innerHTML = 'read more';
        moreSecond.style.display = 'none';
    } else {
        dotsSecond.style.display = 'none';
        btnSecond.innerHTML = 'hide';
        moreSecond.style.display = 'inline';
    }
}

document.querySelectorAll('.readMoreSecond').forEach(el => {
    el.addEventListener('click', function () {
        readMoreSecond();
    });
});
