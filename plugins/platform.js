export default ({ $config }, inject) => {
  const allStyles = {
    cat: {
      showLogo: true,
      homepageCardSizeClasses: 'col-12 col-md-4',
    },
    tiger: {
      showLogo: false,
      homepageCardSizeClasses: 'col-12 col-md-6',
    },
  }

  const platform = allStyles[$config.platform]
  inject('platform', platform)
}
