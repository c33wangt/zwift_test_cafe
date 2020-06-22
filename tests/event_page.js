// import EventPage from '../pages/eventPage';
import HomePage from '../pages/homePage';
import { Selector, t } from 'testcafe';


const hp = new HomePage();
// const ep = new EventPage();

fixture `Getting Started`
    .page `https://zwift.com/`;


test('Show Running event only', async t => {
      await t
          .click(hp.submenu)
          .click(hp.eventLink)

          .click(Selector('#filter-location').nth(0))
          .click(Selector('#filter-location').find('option').withText('Running'))
          .expect(Selector('#zwift-events-app').find('span').withText('CYCLING').exists).notOk();



});

// test('Show Running event only', async t => {
//     await t
//     .click(Selector('#filter-location'))
//     // .click(Selector('#filter-location').nth(0))
//
//     .click(Selector('#filter-location').find('option').withText('Running'));
//
// });
