const attr = name => `data-informa-gam-${name}`;

module.exports = ({
  location,
  position,
  context,
  adunit = {},
} = {}) => ({
  [attr('location')]: location,
  [attr('position')]: position,
  [attr('context')]: JSON.stringify(context || {}),
  [attr('key')]: adunit.key,
});
