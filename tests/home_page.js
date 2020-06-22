import HomePage from '../pages/homePage';
const hp = new HomePage();

fixture `Getting Started`
    .page `https://zwift.com/`;


test('Validate the page loads', async t => {
      await t
          .expect((hp.trainAtHome).exists).ok();

});


test('Validate down arrow redirect to free trial section', async t => {
      await t
          .click(hp.heroDownArrow)
          .expect((hp.introductingTrialText).exists).ok();

});
