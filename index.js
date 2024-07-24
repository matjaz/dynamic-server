const express = require('express');

async function main() {
    const app = express();

    const r = await fetch(process.env.CODE_URL);

    eval(await r.text());

    const port = parseFloat(process.env.PORT) || 3000;
    app.listen(port, function () {
        console.log(`app listening on port ${port}!`)
    });
}

main();
