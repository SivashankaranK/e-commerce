import truckIcon from '../../assets/icons/truck.svg'
import repeatIcon from '../../assets/icons/repeat.svg'
import flagIcon from '../../assets/icons/flag.svg'
import darkTruckIcon from '../../assets/icons/dark_truck.svg'
import darkRepeatIcon from '../../assets/icons/dark_repeat.svg'

import twitterIcon from '../../assets/icons/twitter.svg'
import fbIcon from '../../assets/icons/fb.svg'
import linkedinIcon from '../../assets/icons/linkedin.svg'
import instagramIcon from '../../assets/icons/instagram.svg'


export const headerOrderList = [
  { logo: truckIcon, label: 'Orders & Tracking', value: 'order', darkLogo: darkTruckIcon },
  { logo: flagIcon, label: 'Delivery within India', value: 'delivery' },
  { logo: repeatIcon, label: 'Return', value: 'return', darkLogo: darkRepeatIcon },
]

export const subHeaderList = {
  leftNav: [{ label: 'Home' }, { label: 'Easy Monthly Installments' }, { label: 'Shop by Brands' }, { label: 'Become a Vendor' }],
  rightNav: [{ icon: fbIcon }, { icon: twitterIcon }, { icon: linkedinIcon }, { icon: instagramIcon }]
}
