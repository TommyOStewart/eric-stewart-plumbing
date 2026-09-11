export const PHONE_NUMBER = '774-392-0103'
export const PHONE_LINK = 'tel:+17743920103'
export const PLUMBER_LICENSE = 'MP-17266-M'
export const REFRIGERATION_LICENSE = '#2398625'
export const YEARS_IN_BUSINESS = 15

export const BUSINESS_HOURS = {
  regular: 'Mon-Fri: 7:00 AM - 5:00 PM',
  saturday: 'Sat: 8:00 AM - 2:00 PM',
  sunday: 'Sun: Closed',
  emergency: '24/7 Emergency Service Available'
}

// Image paths - In Vite, public folder files are served from root
// So public/images/file.jpg becomes /images/file.jpg
export const IMAGES = {
  logo: '/images/Business logo.jpg',
  hero: '/images/Trenchwork.jpg',
  about: '/images/HarrisonHelper.jpg',
  waterHeater: '/images/GasWaterHeater.jpg',
  filtration: '/images/WhoelHouseFilter.jpg',
  multiZone: '/images/MultiZone Heater.jpg',
  tankless: '/images/WaterHeater.jpg',
  trenchwork: '/images/Trenchwork.jpg',
  extra: '/images/FullSysLayedout.jpg',
  // Heating / zone / expansion tank images
  heatingZonePipes: '/images/layingoutwork.jpg',
  multiZoneWall: '/images/ExpansionTankMultioneWithWaterHeater.JPEG',
  expansionTank: '/images/WaterExpansionTank.JPEG',
  waterHeaterWithGas: '/images/WaterHeaterWithGasHeater.JPEG',
  filterInstall: '/images/FilterInstall.jpg',
  fullHouseFiltration: '/images/FullHouseWaterFiltration.jpg',
  wallFilter: '/images/Wall filter.jpg',
  backyardTrenching: '/images/backyardBeforeTrenching.jpg',
  moreTrenchwork: '/images/moretrenchwork.jpg',
  excavator: '/images/Home Wall Esxcavater.jpg',
  pipeRouting: '/images/PipeRouting.jpg',
  jobPhoto: '/images/notsurewhatthisisrenameitafterfiguringout.JPEG',
  // Video walkthrough
  buildVideo: '/images/BuildingSomethingRename.mp4'
}

export const services = [
  {
    id: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    shortDesc: 'Fast 24/7 response for burst pipes, major leaks, and plumbing emergencies.',
    fullDesc: 'When disaster strikes, you need a plumber you can count on. Our emergency team responds quickly to burst pipes, sewage backups, major leaks, and other urgent plumbing problems. Available 24/7, we\'ll minimize damage and get your system back up fast.',
    icon: 'AlertTriangle',
    image: '/images/Trenchwork.jpg'
  },
  {
    id: 'water-heaters',
    title: 'Water Heaters',
    shortDesc: 'Installation, repair, and replacement of tank and tankless water heaters.',
    fullDesc: 'From traditional tank water heaters to energy-efficient tankless systems, we handle it all. We\'ll help you choose the right system for your home, install it properly, and keep it running efficiently for years to come.',
    icon: 'Droplets',
    image: '/images/MultiZone Heater.jpg'
  },
  {
    id: 'heating-cooling',
    title: 'Heating & Cooling',
    shortDesc: 'Boiler installation, HVAC service, and climate control solutions.',
    fullDesc: 'Keep your Cape Cod home comfortable year-round with our heating and cooling services. We install and service boilers, furnaces, and HVAC systems. From zone heating to complete system replacements, we\'ve got you covered.',
    icon: 'Flame',
    image: '/images/layingoutwork.jpg'
  },

  {
    id: 'leak-detection',
    title: 'Leak Detection & Water Filtration',
    shortDesc: 'Find hidden leaks and install whole-house water filtration systems.',
    fullDesc: 'Hidden leaks can cause serious damage to your home. Our leak detection services locate problems fast. We also install whole-house water filtration systems to ensure clean, safe water throughout your home.',
    icon: 'Search',
    image: '/images/WhoelHouseFilter.jpg'
  },
  {
    id: 'pipe-repair',
    title: 'Pipe Repair & Replacement',
    shortDesc: 'Repair, reroute, or replace damaged or outdated piping.',
    fullDesc: 'Whether you have a small section of damaged pipe or need a complete repipe, we have the expertise to handle it. We work with copper, PEX, and other materials to ensure lasting repairs that meet code.',
    icon: 'Wrench',
    image: '/images/Trenchwork.jpg'
  },
  {
    id: 'fixture-installation',
    title: 'Fixture Installation',
    shortDesc: 'Professional installation of faucets, toilets, sinks, and more.',
    fullDesc: 'Upgrade your bathroom or kitchen with professional fixture installation. From faucets and sinks to toilets and showers, we ensure everything is installed correctly and looks great.',
    icon: 'Bath',
    image: '/images/FilterInstall.jpg'
  }
]

export const reviews = [
  {
    id: 1,
    name: 'Michael R.',
    location: 'Falmouth, MA',
    rating: 5,
    text: 'Called them for an emergency on a Sunday morning - burst pipe in the basement. They were here within an hour and had it fixed before noon. Professional, fair pricing, and they cleaned up after themselves. Highly recommend.',
    date: 'November 2024'
  },
  {
    id: 2,
    name: 'Sarah T.',
    location: 'Sandwich, MA',
    rating: 5,
    text: 'We had them install a new tankless water heater. The work was excellent - clean copper piping, everything labeled and organized. They explained how to use the system and followed up a week later to make sure everything was working.',
    date: 'October 2024'
  },
  {
    id: 3,
    name: 'David K.',
    location: 'Mashpee, MA',
    rating: 5,
    text: 'Finally found a plumber I can trust. They diagnosed a problem that two other companies missed. Fair price, showed up when they said they would, and the repair has held up perfectly.',
    date: 'September 2024'
  },
  {
    id: 4,
    name: 'Jennifer M.',
    location: 'Barnstable, MA',
    rating: 5,
    text: 'Had them install a new boiler and zone heating system. The attention to detail was impressive - everything is neat, organized, and works perfectly. Our heating bills have dropped significantly.',
    date: 'August 2024'
  },
  {
    id: 5,
    name: 'Robert P.',
    location: 'Yarmouth, MA',
    rating: 5,
    text: 'Great experience from start to finish. They were upfront about pricing, arrived on time, and did quality work. Will definitely use them again for any plumbing needs.',
    date: 'July 2024'
  },
  {
    id: 6,
    name: 'Linda S.',
    location: 'Dennis, MA',
    rating: 5,
    text: 'They installed a water filtration system for us. Very knowledgeable about the different options and helped us choose the right one for our well water. Installation was quick and professional.',
    date: 'June 2024'
  }
]

export const serviceAreas = [
  'Falmouth',
  'Mashpee',
  'Sandwich',
  'Barnstable',
  'Yarmouth',
  'Dennis',
  'Brewster',
  'Harwich',
  'Chatham',
  'Orleans',
  'Eastham',
  'Wellfleet',
  'Truro',
  'Provincetown',
  'Bourne'
]
