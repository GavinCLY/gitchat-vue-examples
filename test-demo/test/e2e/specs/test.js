// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    // browser
    //   .url(devServer)
    //   .waitForElementVisible('#app', 5000)
    //   .assert.elementPresent('.hello')
    //   .assert.containsText('h1', 'Welcome to Your Vue.js App')
    //   .assert.elementCount('img', 1)
    //   .end()

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.carousel')
      .assert.elementCount('.carousel-item', 3)
      // .expect.element('.carousel-inner').to.have.css('transform').which.equals('matrix(1, 0, 0, 1, 0, 0)')
      .moveToElement('.carousel-inner', 200, 10)
      .mouseButtonDown()
      .moveToElement('.carousel-inner', 60, 10)
      .mouseButtonUp()
      .pause(1000)
      .expect.element('.carousel-inner').to.have.css('transform').which.equals('matrix(1, 0, 0, 1, -300, 0)')
      // .end()
  }
}
