import { Selector } from 'testcafe';

export default class HomePage {

    constructor() {

        this.submenu = Selector('#znv-header-open-burger')
        this.eventLink = Selector('main').find('a').withText('EVENTS')


        this.trainAtHome = Selector('main').find('h1').withText('TRAIN AT HOME');
        this.heroDownArrow = Selector('div').withAttribute('class', 'hero-down-arrow').child('svg');
        this.introductingTrialText = Selector('main').find('h2').withText('INTRODUCING');
    }

}
