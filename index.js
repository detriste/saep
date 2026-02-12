const { Builder, By, Key, until } = require('selenium-webdriver');

async function abrirVarias() {

    for (let i = 1; i <= 1; i++) {

        (async () => {
            let driver = await new Builder().forBrowser('chrome').build();

            try {
                console.log(`Abrindo janela ${i}`);

                await driver.get('https://www.youtube.com');

                await driver.wait(until.elementLocated(By.name('search_query')), 10000);

                let searchBox = await driver.findElement(By.name('search_query'));
                await searchBox.sendKeys('Goku', Key.RETURN);

                await driver.wait(until.elementLocated(By.css('ytd-video-renderer')), 10000);

                let firstVideo = await driver.findElement(By.css('ytd-video-renderer a#video-title'));
                await firstVideo.click();

            } catch (error) {
                console.error(`Erro na janela ${i}:`, error);
            }

            // NÃO tem driver.quit()
            // Ele vai deixar todas abertas
        })();

    }

}

abrirVarias();