import _ from 'lodash'

const getDefaultsForPlatform = (options = {}) => ({
  header: {
    showLogo: true,
    ...options.header,
  },
  homepage: {
    cardSizeClasses: 'col-12 col-md-4',
    ...options.homepage,
  },
  ..._.omit(options, 'homepage', 'header'),
})

export default ({ $config }, inject) => {
  const allStyles = {
    app: getDefaultsForPlatform(),
    cat: getDefaultsForPlatform({
      homepage: { cardSizeClasses: 'col-12 col-md-3' },
    }),
    tiger: getDefaultsForPlatform({ header: { showLogo: false } }),
  }

  const platformData = {
    platform: $config.platform,
    styles(path) {
      return _.get(allStyles[$config.platform], path, false)
    },
  }

  inject('platform', platformData)
}
