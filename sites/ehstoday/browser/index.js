import Browser from '@base-cms/marko-web/browser';
import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import RevealAd from '@base-cms/marko-web-reveal-ad/browser';
import LazarusShared from '@endeavor-business-media/lazarus-shared/browser';

DefaultTheme(Browser);
GTM(Browser);
GAM(Browser);
RevealAd(Browser);
LazarusShared(Browser);


export default Browser;
