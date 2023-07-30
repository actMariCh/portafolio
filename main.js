let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app,
    {
        lopp: true,
        delay: 75,
    });

typewriter
    .pauseFor(1500)
    .typeString('Actuaria / Desarrolladora Web / Maestra')
    .pauseFor(300)
    .deleteChars(39)
    .pauseFor(400)
    .typeString('Actuaria / Desarrolladora Web / Maestra')
    .start();
