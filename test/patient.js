var expect = require('chai').expect,
  Browser = require('zombie');
var browser = new Browser();

Browser.localhost('localhost', 7000);
describe('Loads pages', () => {

    it('Google.com', function(done){

        browser.visit("http://www.google.com", function () {
            console.log(browser.text("title"));
            expect(browser.text("title")).to.equal('Google');
            done();
        });
    });

    it('nurse page', done => {
        browser.visit('/nurse',() => {
          console.log(browser.text('title'));
          expect(browser.text('title')).to.equal('')
          done();
        });
    })

});
