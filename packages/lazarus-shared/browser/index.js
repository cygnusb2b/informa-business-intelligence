import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import InformaGAM from '@endeavor-business-media/informa-gam/browser';
import IdentityX from '@base-cms/marko-web-identity-x/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';
import Leaders from '@endeavor-business-media/package-leaders/browser';
import Inquiry from '@base-cms/marko-web-inquiry/browser';
import IncrementAdPos from './increment-ad-pos.vue';
import AutoScroll from './auto-scroll.vue';
import LoadEloquaIframes from './load-eloqua-iframes.vue';
import LoadOmedaIframes from './load-omeda-iframes.vue';
import AlgoliaSiteSearch from './algolia/site-search.vue';

const GallerySlideshow = () => import(/* webpackChunkName: "lazarus-shared-gallery-slideshow" */ './gallery-slideshow/index.vue');
const DirectoryFacets = () => import(/* webpackChunkName: "lazarus-shared-directory-facets" */ './directory-facets/index.vue');
const BlueConicRedirect = () => import(/* webpackChunkName: "lazarus-shared-blueconic-redirect" */ './blueconic/redirect.vue');

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  SocialSharing(Browser);
  InformaGAM(Browser);
  IdentityX(Browser);
  Leaders(Browser);
  Inquiry(Browser);

  const { EventBus } = Browser;
  Browser.registerComponent('LazarusAutoScroll', AutoScroll);
  Browser.register('LazarusSharedIncrementAdPos', IncrementAdPos, {
    provide: { EventBus },
  });
  Browser.register('LazarusSharedLoadEloquaIframes', LoadEloquaIframes);
  Browser.register('LazarusSharedLoadOmedaIframes', LoadOmedaIframes);
  Browser.register('LazarusSharedGallerySlideshow', GallerySlideshow, {
    provide: { EventBus },
  });
  Browser.register('LazarusSharedDirectoryFacets', DirectoryFacets, {
    withApollo: true,
  });
  Browser.register('LazarusSharedBlueConicRedirect', BlueConicRedirect);
  Browser.register('LazarusSharedAlgoliaSiteSearch', AlgoliaSiteSearch);
};
