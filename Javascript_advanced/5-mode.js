function changeMode(size, weight, transform, background, color) {
    return function () {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowecase', 'white', 'black');

    /* Add a paragraph */
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    /* Add buttons */

    /* Spooky Btn */
    const spookyButton = document.createElement('button');
    spookyButton.innerHTML = 'Spooky';
    spookyButton.onclick = spooky;
    document.body.appendChild(spookyButton);

    /* Dark Mode Btn */
    const darkModeButton = document.createElement('button');
    darkModeButton.innerHTML = 'Dark mode';
    darkModeButton.onclick = darkMode;
    document.body.appendChild(darkModeButton);

    /* Scream Mode Btn */
    const screamModeButton = document.createElement('button');
    screamModeButton.innerHTML = 'Scream mode';
    screamModeButton.onclick = screamMode;
    document.body.appendChild(screamModeButton);
}

main();