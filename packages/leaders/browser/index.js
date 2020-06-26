import Leaders from '@base-cms/marko-web-leaders/browser';

const GTMTrackLeaders = () => import(/* webpackChunkName: "gtm-track-leaders" */ './gtm-track-leaders.vue');
const LeadersCompanyWebsiteLink = () => import(/* webpackChunkName: "leaders-company-website-link" */ './company-website-link.vue');
const LeadersCompanySocialLink = () => import(/* webpackChunkName: "leaders-company-social-link" */ './company-social-link.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  Browser.register('GTMTrackLeaders', GTMTrackLeaders, { provide: { EventBus } });
  Browser.register('LeadersCompanyWebsiteLink', LeadersCompanyWebsiteLink, {
    on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
  });
  Browser.register('LeadersCompanySocialLink', LeadersCompanySocialLink, {
    on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
  });
  Leaders(Browser);
};
