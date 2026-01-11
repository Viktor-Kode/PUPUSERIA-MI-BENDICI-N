import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'
import { CateringPackageType } from '@/app/types/catering'
import { SpecialOrderType } from '@/app/types/specialOrders'
import { EventType } from '@/app/types/events'
import { VendorMetadata } from '@/app/types/vendor'

// Header labels are now translated in components using translation keys:
// 'nav.aboutUs', 'nav.menu', 'nav.gallery', 'nav.features', 'nav.contactUs'
export const HeaderData: HeaderItem[] = [
  { label: 'nav.aboutUs', href: '/#aboutus' },
  { label: 'nav.menu', href: '/#menu-section' },
  { label: 'nav.gallery', href: '/#gallery' },
  { label: 'nav.features', href: '/#specials-events' },
  { label: 'nav.contactUs', href: '/#contact' },
]

// Feature labels are now translated in components using translation keys:
// 'features.feature1.heading', 'features.feature1.subheading', etc.
export const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'features.feature1.heading',
    subheading: 'features.feature1.subheading',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'features.feature2.heading',
    subheading: 'features.feature2.subheading',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'features.feature3.heading',
    subheading: 'features.feature3.subheading',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'features.feature4.heading',
    subheading: 'features.feature4.subheading',
  },
]

export const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Head Chef',
    name: 'Chef',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Pupusa Specialist',
    name: 'Chef',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Kitchen Team',
    name: 'Team',
    imgSrc: '/images/Expert/boytwo.png',
  },
]

export const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/gallery-01.png',
    name: 'Revueltas Pupusa',
    price: 4.10,
  },
  {
    src: '/images/Gallery/gallery-02.png',
    name: 'Bean and Cheese Pupusa',
    price: 4.10,
  },
  {
    src: '/images/Gallery/gallery-03.png',
    name: 'Vegan Pupusa',
    price: 5.10,
  },
  {
    src: '/images/Gallery/gallery-04.png',
    name: 'Traditional Salvadoran Breakfast',
    price: 12.99,
  },
]

export const FullMenuData: FullMenuType[] = [
  // ENTRÉES / MAIN DISHES
  {
    name: 'Revueltas Pupusa',
    style: 'Main Dish',
    price: '$4.10 each + tax',
    description: 'Ingredients: Maseca flour, beans, cheese, pork (chicharrón), canola oil, black pepper, garlic salt.',
    availability: 'standard',
  },
  {
    name: 'Bean and Cheese Pupusa',
    style: 'Main Dish',
    price: '$4.10 each + tax',
    description: 'Ingredients: Maseca flour, beans, cheese.',
    dietary: ['vegetarian'],
    availability: 'standard',
  },
  {
    name: 'Pork and Cheese Pupusa',
    style: 'Main Dish',
    price: '$4.10 each + tax',
    description: 'Ingredients: Maseca flour, pork (chicharrón), cheese.',
    availability: 'standard',
  },
  {
    name: 'Spinach and Cheese Pupusa',
    style: 'Main Dish',
    price: '$4.10 each + tax',
    description: 'Ingredients: Maseca flour, spinach, cheese.',
    dietary: ['vegetarian'],
    availability: 'standard',
  },
  {
    name: 'Zucchini and Cheese Pupusa',
    style: 'Main Dish',
    price: '$4.10 each + tax',
    description: 'Ingredients: Maseca flour, zucchini, cheese.',
    dietary: ['vegetarian'],
    availability: 'standard',
  },
  {
    name: 'Loroco and Cheese Pupusa',
    style: 'Main Dish',
    price: '$4.10 each + tax',
    description: 'Ingredients: Maseca flour, loroco, cheese.',
    dietary: ['vegetarian'],
    availability: 'standard',
  },
  {
    name: 'Vegan Pupusa',
    style: 'Main Dish',
    price: '$5.10 each + tax',
    description: 'Ingredients: Maseca flour (gluten-free version stated), spinach, beans, loroco, cauliflower, garlic, zucchini, vegan cheese.',
    dietary: ['vegan', 'vegetarian', 'gluten-free'],
    availability: 'standard',
  },
  {
    name: 'Jalapeño and Cheese Pupusa',
    style: 'Main Dish',
    price: '$4.10 each + tax',
    description: 'Ingredients: Maseca flour, jalapeños, cheese.',
    dietary: ['vegetarian', 'spicy'],
    availability: 'standard',
  },
  {
    name: 'Shrimp and Cheese Pupusa',
    style: 'Main Dish',
    price: '$5.10 each + tax',
    description: 'Ingredients: Maseca flour, shrimp, mazola oil, cheese.',
    availability: 'standard',
  },
  // SIDES
  {
    name: 'Beans',
    style: 'Side',
    price: '$4.00',
    description: 'Ingredients: Beans, tomato, green chile, onion.',
    dietary: ['vegan', 'vegetarian', 'gluten-free'],
    availability: 'standard',
  },
  {
    name: 'Plantain Canoas',
    style: 'Side',
    price: 'Price TBD',
    description: 'Ingredients: Ripe plantain, milk, basic cornstarch, canola oil, cinnamon.',
    dietary: ['vegetarian', 'gluten-free'],
    availability: 'standard',
  },
  {
    name: 'Plantain Empanadas',
    style: 'Side',
    price: 'Price TBD',
    description: 'Ingredients: Ripe plantains, milk, basic cornstarch, sweet beans (black beans with brown sugar), mazola oil, cinnamon.',
    dietary: ['vegetarian', 'gluten-free'],
    availability: 'standard',
  },
  // ENTRÉE PLATES
  {
    name: 'Salvadoran Chicken Sandwich (Pan con Pollo)',
    style: 'Entrée Plate',
    price: 'Price TBD',
    description: 'Ingredients: Bolillo bread, chicken in sauce, cucumbers, lettuce, watercress, beets, tomatoes, cauliflower, onion, jalapeños, carrots, vinegar, mayonnaise, mustard, pepper, chicken bouillon.',
    availability: 'standard',
  },
  {
    name: 'Traditional Salvadoran Breakfast',
    style: 'Entrée Plate',
    price: '$12.99 per person',
    description: 'Ingredients: Beans, eggs, plantains, bolillo bread, tomatoes, onions, green chile.',
    dietary: ['vegetarian'],
    availability: 'standard',
  },
  {
    name: 'Typical Salvadoran Breakfast',
    style: 'Entrée Plate',
    price: 'Price TBD',
    description: 'Ingredients: Beans, plantains, chorizo or pork longaniza, bread, tortillas, tomatoes, onions, green chile.',
    availability: 'standard',
  },
  // SPECIALTY ITEMS
  {
    name: 'Stuffed Chiles – Beef',
    style: 'Specialty',
    price: 'Price TBD',
    description: 'Ingredients: Eggs, tomatoes, ground beef, chiles.',
    dietary: ['gluten-free'],
    availability: 'standard',
  },
  {
    name: 'Stuffed Chiles – Cheese',
    style: 'Specialty',
    price: 'Price TBD',
    description: 'Ingredients: Eggs, tomatoes, chiles, onion, cheese.',
    dietary: ['vegetarian', 'gluten-free'],
    availability: 'standard',
  },
  // DRINKS
  {
    name: 'Salvadoran Horchata',
    style: 'Drink',
    price: 'Price TBD',
    description: 'Ingredients: Water, pineapple, hibiscus, sugar.',
    dietary: ['vegan', 'vegetarian', 'gluten-free'],
    availability: 'standard',
  },
  {
    name: 'Atole',
    style: 'Drink',
    price: 'Price TBD',
    description: 'Ingredients: Pineapple, panela sugar, cloves, plantain, basic cornstarch.',
    dietary: ['vegetarian', 'gluten-free'],
    availability: 'standard',
  },
  {
    name: 'Rice',
    style: 'Side',
    price: 'Price TBD',
    description: 'Ingredients: Rice, salt, oil, onion.',
    dietary: ['vegan', 'vegetarian', 'gluten-free'],
    availability: 'standard',
  },
]

export const FooterLinkData: FooterLinkType[] = []

// Catering packages
export const CateringPackagesData: CateringPackageType[] = [
  {
    name: 'Taco Fiesta Package',
    description:
      'Perfect for parties and events. Includes 3 taco varieties, rice, beans, chips, salsa, and guacamole.',
    servesCount: 20,
    price: '$450',
    leadTimeDays: 3,
    notes: 'Minimum 20 people. Additional servings available at $20 per person.',
    dietary: ['gluten-free'],
  },
  {
    name: 'Executive Lunch Box',
    description:
      'Individual lunch boxes with choice of 2 tacos, rice, beans, chips, and salsa. Perfect for office catering.',
    servesCount: 10,
    price: '$180',
    leadTimeDays: 2,
    notes: 'Customizable taco selection. Vegetarian options available.',
  },
  {
    name: 'Grand Celebration Package',
    description:
      'Full-service catering for large events. Includes appetizers, multiple taco stations, sides, desserts, and service staff.',
    servesCount: 50,
    price: '$1,200',
    leadTimeDays: 7,
    notes: 'Includes setup, service staff, and cleanup. Custom menu available.',
  },
  {
    name: 'Taco Truck Popup',
    description:
      'Bring the taco truck to your location! Includes full setup, menu selection, and service.',
    servesCount: 100,
    price: '$2,500',
    leadTimeDays: 14,
    notes: 'Minimum 4-hour service. Includes all equipment and staff.',
  },
]

// Special orders and preorders
export const SpecialOrdersData: SpecialOrderType[] = [
  {
    name: 'Custom Birthday Cake Tamale',
    description:
      'Large tamale cake decorated to order. Choose from traditional, chocolate, or fruit flavors. Serves 12-15.',
    price: '$65',
    cutoffDate: '2024-12-20',
    customizationNotes:
      'Please specify flavor, decoration preferences, and any dietary restrictions when ordering.',
  },
  {
    name: 'Holiday Tamale Dozen',
    description:
      'Pre-order a dozen assorted tamales for the holidays. Mix and match flavors: pork verde, chicken mole, sweet corn, or cheese & jalapeño.',
    price: '$48',
    cutoffDate: '2024-12-18',
    customizationNotes:
      'Specify flavor preferences. Available for pickup December 23-24. Gluten-free options available.',
    dietary: ['gluten-free'],
  },
  {
    name: 'Catering Menu Customization',
    description:
      'Work with our chef to create a custom menu for your special event. Includes consultation and menu planning.',
    price: 'Starting at $500',
    cutoffDate: '2024-12-15',
    customizationNotes:
      'Contact us at least 2 weeks in advance. Consultation includes tasting session.',
  },
]// Events and popups
export const EventsData: EventType[] = [
  {
    name: 'Downtown Farmers Market',
    date: '2024-12-07',
    location: 'Main Street Plaza, Downtown',
    // Google Maps embed URL - easily changeable by getting embed code from Google Maps
    // To change: Go to Google Maps, search location, click Share > Embed a map, copy iframe src
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    description:
      'Join us every Saturday morning for fresh tacos and aguas frescas. Look for our bright orange tent!',
    menuItems: ['Mesquite Al Pastor', 'Crispy Baja Fish', 'Esquites Street Corn'],
  },
  {
    name: 'Holiday Popup at The Brewery',
    date: '2024-12-14',
    location: 'Local Craft Brewery, 123 Beer St',
    // Alternative: Use coordinates to generate map URL
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
    description:
      'Special holiday menu featuring seasonal tamales and festive drinks. Live music included!',
    menuItems: ['Holiday Tamale Platter', 'Pumpkin Seed Mole Enchiladas'],
  },
  {
    name: 'Food Truck Festival',
    date: '2024-12-21',
    location: 'City Park, Central Avenue',
    // Google Maps embed URL - easily changeable
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.184132576!2d-73.98511768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1234567890124!5m2!1sen!2sus',
    description:
      'We will be serving our full menu at the annual food truck festival. Come early for best selection!',
  },
]// Vendor metadata
export const VendorMetadataData: VendorMetadata = {
  vendorName: 'PUPUSERIA MI BENDICIÓN',
  contactInfo: {
    phone: '+1 (555) 123-4567',
    email: 'orders@pupuseriamibendicion.com',
    website: 'www.pupuseriamibendicion.com',
  },
  orderingInfo:
    'Daily menu includes a rotating main dish, sides, and dessert. Not all items listed are available every day. For catering orders, please call or email at least 3 days in advance.',
}