import IncrementAdPos from './increment-ad-pos.vue';

export default (Browser) => {
  const { EventBus } = Browser;
  Browser.register('LazarusSharedIncrementAdPos', IncrementAdPos, {
    provide: { EventBus },
  });
};
