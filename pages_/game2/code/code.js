let savedBalls = document.querySelectorAll('.field__ball._white').length;
let winMessage = document.getElementById('winMessage');
winMessage.hidden = true;

document.onmousedown = function(e) {
    if (e.target.tagName !== 'SPAN') return; // do nothing if not <span> with balls
    e.preventDefault();
    e.target.classList.add('selected');
    let cursorPointerX = e.clientX;
    let cursorPointerY = e.clientY;
    let selectedElement = document.querySelector('.selected').parentElement;
    let uniqElement = document.querySelector('._uniq-parent');

    document.onmousemove = function(e) {
        // cursor to top
        if (selectedElement.firstElementChild &&
            selectedElement.classList.contains('_uniq-parent') &&
            !selectedElement.classList.contains('_uniq-full') &&
            cursorPointerY - e.clientY > 20) {
            selectedElement.lastElementChild.insertAdjacentHTML('afterbegin', selectedElement.firstElementChild.outerHTML);
            selectedElement.classList.add('_uniq-full');
            selectedElement.firstElementChild.className = '';
        }

        // cursor to bottom
        if (uniqElement.classList.contains('_uniq-full') &&
            !uniqElement.firstElementChild.classList.contains('field__ball') &&
            e.clientY - cursorPointerY > 20) {
            uniqElement.firstElementChild.replaceWith(uniqElement.lastElementChild.firstElementChild);
            uniqElement.lastElementChild.innerHTML = '';
            uniqElement.classList.remove('_uniq-full');
        };

        // cursor to right
        if (e.clientX - cursorPointerX > 20) {
            if (!selectedElement.nextElementSibling &&
                selectedElement.firstElementChild.classList.contains('_white')) {
                savedBalls -= 1;
                selectedElement.firstElementChild.className = '';

                if (savedBalls === 0) {
                    winMessage.hidden = false;
                }
                document.onmousemove = null;
                return;
            }
            if (selectedElement.nextElementSibling &&
                !selectedElement.nextElementSibling.firstElementChild.classList.contains('field__ball')) {
                selectedElement.nextElementSibling.firstElementChild.remove();
                selectedElement.nextElementSibling.insertAdjacentHTML('afterbegin', selectedElement.firstElementChild.outerHTML);
                selectedElement.firstElementChild.className = '';
            }
            document.onmousemove = null;
        }

        // cursor to left
        if (cursorPointerX - e.clientX > 20) {
            // cursor to left
            if (selectedElement.previousElementSibling && !selectedElement.previousElementSibling.firstElementChild.classList.contains('field__ball')) {
                selectedElement.previousElementSibling.firstElementChild.remove();
                selectedElement.previousElementSibling.insertAdjacentHTML('afterbegin', selectedElement.firstElementChild.outerHTML);
                selectedElement.firstElementChild.className = '';
            }
            document.onmousemove = null;
        }
    };
}

document.onmouseup = function(e) {
    let selectedElement = document.querySelector('.selected');

    if (!selectedElement) return;
    selectedElement.classList.remove('selected');
    document.onmousemove = null;
}