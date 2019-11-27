import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import RevealAd from '@base-cms/marko-web-reveal-ad/browser';

import IncrementAdPos from './increment-ad-pos.vue';
import LoadEloquaIframes from './load-eloqua-iframes.vue';

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  RevealAd(Browser);

  const { EventBus } = Browser;
  Browser.register('LazarusSharedIncrementAdPos', IncrementAdPos, {
    provide: { EventBus },
  });
  Browser.register('LazarusSharedLoadEloquaIframes', LoadEloquaIframes);
};
