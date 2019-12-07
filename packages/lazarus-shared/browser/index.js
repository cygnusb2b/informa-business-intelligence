import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import InformaGAM from '@endeavor-business-media/informa-gam/browser';

import IncrementAdPos from './increment-ad-pos.vue';
import LoadEloquaIframes from './load-eloqua-iframes.vue';

const GallerySlideshow = () => import(/* webpackChunkName: "lazarus-shared-gallery-slideshow" */ './gallery-slideshow/index.vue');

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  InformaGAM(Browser);

  const { EventBus } = Browser;
  Browser.register('LazarusSharedIncrementAdPos', IncrementAdPos, {
    provide: { EventBus },
  });
  Browser.register('LazarusSharedLoadEloquaIframes', LoadEloquaIframes);
  Browser.register('LazarusSharedGallerySlideshow', GallerySlideshow);
};
