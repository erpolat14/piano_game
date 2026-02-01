const keys = document.querySelectorAll('.key');
const regularKeys = document.querySelectorAll('.key.white');
const sharps = document.querySelectorAll('.key.black');

const whites = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
const blacks = ['W', 'E', 'R', 'T', 'Y'];

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    const key = e.key.toUpperCase();
    const whiteKeyIndex = whites.indexOf(key);
    const blackKeyIndex = blacks.indexOf(key);

    if (whiteKeyIndex > -1) playNote(regularKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]);
});

function playNote(key) {
    if (!key) return; // himoya

    const noteSound = document.getElementById(key.dataset.note);
    if (!noteSound) return;

    noteSound.currentTime = 0;
    noteSound.play();

    key.classList.add('active');

    noteSound.onended = () => {
        key.classList.remove('active');
    };
}
