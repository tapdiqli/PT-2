export interface License {
  authority: string;
  number: string;
}

export interface BonusInfo {
  headline: string;
  maxAmount: number;
  freeSpins: number;
  minDeposit: number;
  wagering: string;
  code: string;
}

export interface Brand {
  id: number;
  rank: number;
  slug: string;
  name: string;
  logo: string;
  logoInitials: string;
  accent: string;
  rating: number;
  votes: number;
  established: number;
  badge: string;
  licenses: License[];
  bonus: BonusInfo;
  withdrawalTime: string;
  paymentMethods: string[];
  gameProviders: string[];
  pros: string[];
  cons: string[];
  mobileFriendly: boolean;
  description: string;
  affiliateUrl: string;
  featured: boolean;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: string;
  speed: string;
  popularInPortugal: boolean;
}

export interface Helpline {
  name: string;
  description: string;
  phone: string;
  email: string | null;
  url: string;
}

export interface SiteSocial {
  facebook: string;
  twitter: string;
  instagram: string;
}

export interface SiteInfo {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  email: string;
  foundedYear: number;
  social: SiteSocial;
  helplines: Helpline[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface SiteData {
  site: SiteInfo;
  paymentMethods: PaymentMethod[];
  brands: Brand[];
  faqs: Faq[];
}
