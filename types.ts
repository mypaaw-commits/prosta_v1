export interface NavItem {
  label: string;
  href: string;
}

export interface PricingItem {
  title: string;
  price: string;
  features: string[];
}

export interface ServiceItem {
  title: string;
  price?: string;
  description?: string;
  note?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum SectionId {
  HERO = 'hero',
  CHOICE = 'wybor',
  FUNCTIONALITY = 'funkcjonalnosc',
  INCLUSIONS = 'w-cenie',
  PRICING = 'cennik',
  ADDONS = 'dodatki',
  FAQ = 'faq',
  FINAL_CTA = 'zamow',
  CONTACT = 'kontakt'
}