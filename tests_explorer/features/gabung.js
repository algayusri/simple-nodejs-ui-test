require(process.cwd() + '/tests_explorer/base')
let driver

const initial = require(process.cwd() + '/tests_explorer/features/initial')
    , pageGabung = require(process.cwd() + '/tests_explorer/pages/gabung.page')


describe('Daftar baru', function () {

    it('Input data', async function () {
        driver = await initial.load('chrome', process.env.URL);
        const PageGabung = new pageGabung(driver);
        await PageGabung.daftar(process.env.HANDPHONE,
                                process.env.EMAIL,
                                process.env.NAMA_DEPAN,
                                process.env.NAMA_BELAKANG
        );
        await driver.close();
        await driver.quit();
    })
})