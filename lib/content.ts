/**
 * lib/content.ts — SINGLE SOURCE OF TRUTH
 * ---------------------------------------------------------------------------
 * Every price, speed, feature bullet, fee, disclosure line and nav anchor on
 * the site is derived from this file. Change a number here and it cascades to
 * the hero lockup, every plan card, the fine-print comparison grid, the nav
 * and the legal footer — with no edits to any .tsx layout file.
 *
 * To update pricing: edit PLANS below. Nothing else.
 */

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type ServiceLine =
  | 'fiber'
  | 'cable'
  | 'bundle'
  | 'tv'
  | 'mobile'
  | 'phone';

export interface PlanItem {
  id: string;
  name: string;
  serviceLine: ServiceLine;
  speedDown?: number;
  speedUp?: number;
  /** Shown in place of a speed figure for plans that are not sold by Mbps. */
  speedLabel?: string;
  price?: number;
  cents?: string;
  promoQualifier?: string;
  equipmentFee?: string;
  dataPolicy?: string;
  contractTerm?: string;
  features: string[];
  isPopular?: boolean;
  /** Optional short line rendered under the plan name. */
  tagline?: string;
  /** Unit shown after the price, e.g. "/mo" or "/mo per line". */
  priceUnit?: string;
}

export interface SiteImage {
  src: string;
  /** Empty string marks the image as decorative. */
  alt: string;
  width: number;
  height: number;
  /** CSS object-position, for steering the crop away from edge detail. */
  position?: string;
}

export interface ServiceSectionMeta {
  line: ServiceLine;
  /** Anchor id used for in-page navigation. */
  anchor: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  /** Supporting photograph for the section. */
  image?: SiteImage;
  /**
   * How that photograph is used. 'beside' places it next to the card,
   * 'background' fills the whole section behind a dark scrim.
   */
  imageTreatment?: 'beside' | 'background';
}

/* -------------------------------------------------------------------------- */
/* Retailer identity + contact                                                */
/* -------------------------------------------------------------------------- */

/**
 * PLACEHOLDER NUMBER — replace both fields with the live sales line.
 * 555-01xx is the reserved fictional range, so nothing real is dialled.
 */
export const PHONE = {
  display: '(888) 555-0100',
  href: 'tel:+18885550100',
} as const;

/**
 * Retailer legal identity. Every bracketed value is a PLACEHOLDER and renders
 * literally on the policy pages — fill these in before the site goes live.
 */
export const COMPANY = {
  legalName: '[Legal entity name, e.g. Acme Communications LLC]',
  tradingName: 'Ting Authorized Retailer',
  addressLines: ['[Street address]', '[City, State ZIP]'],
  privacyEmail: '[privacy@yourdomain.com]',
  legalEmail: '[legal@yourdomain.com]',
  websiteDomain: '[yourdomain.com]',
} as const;

export const SITE = {
  brandName: 'Ting',
  retailerLabel: 'Authorized Retailer',
  /** Persistent, non-dismissable top bar copy. */
  disclosure: 'Independent Authorized Retailer of Ting.',
  /** Longer disclosure used in the footer legal block. */
  disclosureLong:
    'This site is operated by an independent authorized retailer of Ting. Ting and the Ting logo are trademarks of their respective owner. Plans, pricing, speeds and promotional offers are set by the provider, vary by serviceable address, and are subject to change.',
  metaTitle:
    'Ting Fiber Internet & Mobile — Authorized Retailer | Call to Order',
  metaDescription:
    'Order Ting Home Fiber with symmetrical multi-gig speeds, unlimited data and no contracts, plus Ting Mobile unlimited talk, text and data. Authorized retailer — call to order.',
} as const;

/* -------------------------------------------------------------------------- */
/* Plans — the pricing model                                                  */
/* -------------------------------------------------------------------------- */

export const PLANS: PlanItem[] = [
  /* ----------------------------- FIBER ----------------------------------- */
  {
    id: 'home-fiber',
    name: 'Ting Home Fiber',
    serviceLine: 'fiber',
    tagline: '100% direct fiber to your home',
    speedDown: 2000,
    speedUp: 2000,
    price: 89,
    cents: '00',
    priceUnit: '/mo',
    promoQualifier: 'No teaser rate and no annual price increase',
    equipmentFee:
      'Free standard installation. Keep your own router at no cost, or add Ting Whole Home Wi-Fi+ from $24/mo.',
    dataPolicy: 'Unlimited data',
    contractTerm: 'No contract',
    isPopular: true,
    features: [
      'Up to 2,000 Mbps download and upload',
      'Symmetrical speeds — uploads as fast as downloads',
      'Unlimited data with no caps or throttling',
      'Handles 20+ connected devices at once',
      'Works with the router you already own',
      'Free standard installation',
    ],
  },
  {
    id: 'business-fiber',
    name: 'Ting Business Fiber',
    serviceLine: 'fiber',
    tagline: 'Built for offices, clinics and storefronts',
    speedLabel: 'Symmetrical, scaled to your business',
    priceUnit: '/mo',
    promoQualifier: 'Capacity and pricing quoted per location',
    equipmentFee: 'Equipment and installation quoted with your plan.',
    dataPolicy: 'Unlimited data',
    contractTerm: 'Custom terms',
    features: [
      'Symmetrical fiber sized to your business',
      'Capacity scaled to headcount and workload',
      'Unlimited data with no caps',
      'Business-grade support team',
      'Static IP options available',
      'No forced TV or phone bundles',
    ],
  },

  /* ----------------------------- BUNDLE ---------------------------------- */
  {
    id: 'fiber-mobile-bundle',
    name: 'Home Fiber + Unlimited Mobile',
    serviceLine: 'bundle',
    tagline: 'One plan, one bill, one place to manage it',
    speedDown: 2000,
    speedUp: 2000,
    price: 99,
    cents: '00',
    priceUnit: '/mo',
    promoQualifier: '$114/mo bought separately — you keep $15 every month',
    equipmentFee:
      'Free standard installation. SIM or eSIM included with your order.',
    dataPolicy: 'Unlimited data on both services',
    contractTerm: 'No contract',
    isPopular: true,
    features: [
      'Everything in Ting Home Fiber',
      'Up to 2,000 Mbps download and upload',
      'Unlimited mobile talk, text and data',
      'Nationwide LTE + 5G coverage',
      'Unlimited mobile hotspot',
      'Add mobile lines as your household grows',
    ],
  },

  /* ----------------------------- MOBILE ---------------------------------- */
  {
    id: 'mobile-unlimited-combo',
    name: 'Ting Mobile Unlimited Combo',
    serviceLine: 'mobile',
    tagline: 'For homes already on Ting Internet',
    speedLabel: 'Nationwide LTE + 5G',
    price: 10,
    cents: '00',
    priceUnit: '/mo per line',
    promoQualifier:
      'First 3 months free — requires Ting Internet at the address',
    equipmentFee: 'SIM or eSIM included. Bring the phone you already own.',
    dataPolicy: 'Unlimited data',
    contractTerm: 'No contract, no prepayment',
    isPopular: true,
    features: [
      'Unlimited talk, text and data',
      'No throttling and no data caps',
      'Nationwide LTE + 5G coverage',
      'Unlimited mobile hotspot',
      'Physical SIM or eSIM',
      'Unlimited lines on one account',
    ],
  },
  {
    id: 'mobile-unlimited',
    name: 'Ting Mobile Unlimited',
    serviceLine: 'mobile',
    tagline: 'Mobile on its own — no home internet required',
    speedLabel: 'Nationwide LTE + 5G',
    price: 25,
    cents: '00',
    priceUnit: '/mo per line',
    promoQualifier: '$10 off per line for your first 3 months',
    equipmentFee: 'SIM or eSIM included. Bring the phone you already own.',
    dataPolicy: 'Unlimited data',
    contractTerm: 'No contract, no prepayment',
    features: [
      'Unlimited talk, text and data',
      'No throttling and no data caps',
      'Nationwide LTE + 5G coverage',
      'Unlimited mobile hotspot',
      'Physical SIM or eSIM',
      'Cancel any time with no penalty',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Canonical service-line order + section copy                                */
/* -------------------------------------------------------------------------- */

/**
 * Canonical merchandising order. Sections render in exactly this sequence, and
 * a line with zero plans in PLANS is omitted from the page entirely — no empty
 * placeholders. Ting sells fiber, a fiber + mobile bundle and mobile, so cable,
 * TV and phone resolve to zero plans and never render.
 */
export const SERVICE_ORDER: ServiceLine[] = [
  'fiber',
  'cable',
  'bundle',
  'tv',
  'mobile',
  'phone',
];

/**
 * Prices quoted inside section copy are read back out of PLANS so the prose
 * cannot drift from the cards. Editing a plan price updates these sentences too.
 */
const bundledMobileRate = PLANS.find((p) => p.id === 'mobile-unlimited-combo')?.price;
const standaloneMobileRate = PLANS.find((p) => p.id === 'mobile-unlimited')?.price;

export const SERVICE_META: Record<ServiceLine, ServiceSectionMeta> = {
  fiber: {
    line: 'fiber',
    anchor: 'plans',
    eyebrow: 'Fiber internet',
    heading: 'Fiber-to-the-home internet at a fixed monthly rate',
    subheading:
      'A dedicated fiber connection terminates at the premises, delivering matching upload and download throughput. Performance remains consistent during peak evening demand.',
  },
  cable: {
    line: 'cable',
    anchor: 'cable',
    eyebrow: 'Cable internet',
    heading: 'Cable internet',
    subheading: '',
  },
  bundle: {
    line: 'bundle',
    anchor: 'bundles',
    eyebrow: 'Bundle',
    heading: 'Internet and mobile consolidated on one account',
    subheading: `Adding an unlimited mobile line to Ting Home Fiber reduces the line rate from $${standaloneMobileRate} to $${bundledMobileRate} per month. Identical service, consolidated billing and one account to manage.`,
    image: {
      src: '/images/bundle-internet-mobile.jpg',
      alt: '',
      width: 1226,
      height: 768,
      position: 'center 38%',
    },
    imageTreatment: 'background',
  },
  tv: {
    line: 'tv',
    anchor: 'tv',
    eyebrow: 'TV',
    heading: 'TV',
    subheading: '',
  },
  mobile: {
    line: 'mobile',
    anchor: 'mobile',
    eyebrow: 'Ting Mobile',
    heading: 'Unlimited mobile on nationwide LTE and 5G',
    subheading:
      'Unlimited talk, text and data with no term contract and no prepayment. Mobile hotspot is included at no additional charge, and lines can be added or canceled at any time.',
  },
  phone: {
    line: 'phone',
    anchor: 'phone',
    eyebrow: 'Home phone',
    heading: 'Home phone',
    subheading: '',
  },
};

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export const HERO = {
  eyebrow: 'Authorized Retailer',
  /** Headline renders in two tones: `headline` in white, `headlineAccent` in brand blue. */
  headline: 'Multi-gig fiber internet',
  headlineAccent: 'and unlimited mobile.',
  subline:
    'Ting delivers a direct fiber connection to the home with symmetrical multi-gig speeds and unlimited data, paired with unlimited mobile service on nationwide LTE and 5G. No term contracts, no mandatory bundles and no scheduled annual increase.',
  /** Plan whose price anchors the hero. Change the id to re-anchor the hero. */
  leadPlanId: 'home-fiber',
  /** Label sitting beside the hero price lockup. */
  priceLabel: 'Home fiber starts at',
  /** Circular marker floating over the photograph on large screens. */
  badge: {
    kicker: 'Standard install',
    value: 'Included',
    note: 'and no term contract',
  },
  /**
   * Full-bleed hero backdrop. Decorative, so alt is empty. The subject sits in
   * the right two-thirds, which is why the crop is pushed right — the headline
   * and price rail occupy the left of the frame.
   */
  backgroundImage: {
    src: '/images/hero-home-dusk.jpg',
    alt: '',
    width: 2000,
    height: 1221,
    position: '70% 58%',
  },
  trustChips: [
    'Gigabit Fiber',
    'No Contracts',
    'Symmetrical Speeds',
    'Simple Mobile Plans',
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Fine-print grid                                                            */
/* -------------------------------------------------------------------------- */

export const FINE_PRINT = {
  eyebrow: 'Plan details',
  heading: 'Plan inclusions and associated costs',
  subheading:
    'A side-by-side comparison of hardware, monthly service fees and contract terms for every plan listed. Local taxes and regulatory fees vary by service address and are billed in addition to the plan rate.',
  /** Heading above the non-plan-specific fee list. */
  addOnsTitle: 'Additional charges that may appear on your bill',
  /** Hardware and fee rows that are not tied to a single plan. */
  addOns: [
    {
      label: 'Standard installation',
      value: 'Included',
      detail:
        'A technician brings the fiber line into the home. Most visits run under an hour.',
    },
    {
      label: 'Use your own router',
      value: '$0',
      detail:
        'Ting works with the router already in your home. No forced upgrade.',
    },
    {
      label: 'Ting Whole Home Wi-Fi+',
      value: 'From $24/mo',
      detail:
        'eero 7 mesh system, added at checkout and cancellable at any time. Larger homes are quoted for three or more units.',
    },
    {
      label: 'Mobile SIM or eSIM',
      value: 'Included',
      detail: 'Shipped with your order. Keep your current number and phone.',
    },
    {
      label: 'Early termination fee',
      value: 'None',
      detail: 'No term commitment on residential internet or mobile.',
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Why us / how it works                                                      */
/* -------------------------------------------------------------------------- */

export interface Pillar {
  title: string;
  body: string;
  image: SiteImage;
}

export const WHY_US: {
  eyebrow: string;
  heading: string;
  subheading: string;
  pillars: Pillar[];
} = {
  eyebrow: 'Why Ting',
  heading: 'Consistent performance at every hour of the day',
  subheading:
    'Ting builds and operates its own fiber network in the communities it serves, which is why advertised speeds hold up under sustained load.',
  pillars: [
    {
      title: 'A dedicated fiber connection',
      body: 'Fiber is run directly to the premises rather than shared across a neighborhood segment, so throughput is not reduced when demand rises across the street.',
      image: {
        src: '/images/why-01-dedicated-line.jpg',
        alt: 'A woman on a video call at a desk in a home office',
        width: 928,
        height: 987,
      },
    },
    {
      title: 'Symmetrical throughput',
      body: 'Upload and download run at the same rate, which supports video conferencing, large file transfers and outbound streaming without degradation.',
      image: {
        src: '/images/why-02-symmetrical-speed.jpg',
        alt: 'A man editing video on a monitor at a home desk setup',
        width: 928,
        height: 987,
      },
    },
    {
      title: 'Predictable monthly pricing',
      body: 'A single published rate with no promotional expiry and no scheduled annual increase written into the service agreement.',
      image: {
        src: '/images/why-03-predictable-pricing.jpg',
        alt: 'A woman at a kitchen table with a laptop, coffee and opened mail',
        width: 928,
        height: 987,
        // Bias left so the laptop lid sits outside the 4:5 crop.
        position: '38% center',
      },
    },
    {
      title: 'No mandatory bundling',
      body: 'No television package or voice line is required to qualify for the advertised internet rate.',
      image: {
        src: '/images/why-04-no-bundling.jpg',
        alt: 'A family watching television together on a sofa in the evening',
        width: 928,
        height: 987,
      },
    },
  ],
};

export const HOW_IT_WORKS = {
  eyebrow: 'Getting connected',
  heading: 'From order to installation in four steps',
  steps: [
    {
      title: 'Address verification',
      body: 'Your service address is checked against the current Ting fiber footprint while you are on the line.',
    },
    {
      title: 'Plan selection',
      body: 'Select internet on its own or internet with mobile, and add Wi-Fi hardware only if it is required.',
    },
    {
      title: 'Installation scheduling',
      body: 'Choose an appointment window. An adult aged 18 or over must be present for the technician visit.',
    },
    {
      title: 'Activation',
      body: 'Installation typically completes within an hour. Existing service can remain active until the Ting connection is live.',
    },
  ],
  /** Closing call-to-action block beneath the four steps. */
  cta: {
    heading: 'Find out what is available at your address',
    body: 'A single call covers serviceability, plan selection and your installation window.',
    image: {
      src: '/images/install-technician.jpg',
      alt: 'A technician routing fiber cable into an enclosure on the exterior wall of a house',
      width: 1258,
      height: 768,
    },
  },
} as const;

/* -------------------------------------------------------------------------- */
/* FAQ section framing                                                        */
/* -------------------------------------------------------------------------- */

export const FAQ_SECTION = {
  eyebrow: 'Questions',
  heading: 'Frequently asked questions',
  subheading:
    'Installation timelines, speed definitions, equipment options and how mobile service works alongside the fiber connection.',
} as const;

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'How long does installation take from the day I order?',
    a: 'Most addresses are connected within two to four weeks of ordering, depending on the network build in your area. The install visit itself usually takes under an hour: a technician brings the fiber line into the home, mounts a small unit and connects it to your router.',
  },
  {
    q: 'What does "symmetrical" actually mean for my connection?',
    a: 'Download and upload run at the same rate. On Ting Home Fiber that is up to 2,000 Mbps in both directions, so sending a large file, backing up a drive or hosting a video call performs the same as pulling a stream down.',
  },
  {
    q: 'Do I have to rent a router?',
    a: 'No. Ting works with the router already in your home at no extra cost. If you would rather have mesh coverage across a larger house, Ting Whole Home Wi-Fi+ uses an eero 7 system starting at $24 a month and can be canceled at any time.',
  },
  {
    q: 'Is there a data cap or throttling after a certain point?',
    a: 'No. Residential fiber plans carry unlimited data, and Ting Mobile unlimited plans carry unlimited talk, text and data with no throttling or caps.',
  },
  {
    q: 'Am I locked into a term agreement?',
    a: 'No. Residential internet and mobile are month to month, with no term commitment and no early termination fee.',
  },
  {
    q: 'How does Ting Mobile work if I already have a phone?',
    a: 'Bring the phone you own. A physical SIM or an eSIM comes with your order, you keep your existing number, and the line runs on nationwide LTE and 5G coverage. Unlimited hotspot is included rather than charged separately.',
  },
  {
    q: 'What happens to my current internet while Ting is being installed?',
    a: 'Most people keep their existing provider running right up until the Ting install is complete, so there is no gap in service. Nothing is billed until your Ting service is live.',
  },
  {
    q: 'What do taxes and fees add to the monthly price?',
    a: 'Local taxes and regulatory fees vary by address and are billed on top of the plan rate. The plan rate itself does not change from month to month.',
  },
];

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

/** Footer navigation columns (rendered beside the brand and contact blocks). */
export const FOOTER_NAV: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: 'Shop',
    links: [
      { label: 'Ting Home Fiber', href: '/#plans' },
      { label: 'Ting Business Fiber', href: '/#plans' },
      { label: 'Fiber + Mobile bundle', href: '/#bundles' },
      { label: 'Ting Mobile', href: '/#mobile' },
      { label: 'Check availability', href: '/#top' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'What the price covers', href: '/#fine-print' },
      { label: 'Why fiber', href: '/#why' },
      { label: 'How install works', href: '/#how-it-works' },
      { label: 'All FAQs', href: '/#faq' },
    ],
  },
];

/** Bottom-row legal links. */
export const FOOTER_LEGAL_LINKS: { label: string; href: string }[] = [
  { label: 'Privacy & Data Protection', href: '/privacy-and-data-protection' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Cookies Policy', href: '/cookies-policy' },
  { label: 'TCPA Policy', href: '/tcpa-policy' },
  { label: 'Trademarks', href: '/trademarks' },
  { label: 'Marketing Policy', href: '/marketing-policy' },
  { label: 'Service Fulfillment', href: '/service-fulfillment' },
  { label: 'PCI DSS', href: '/pci-dss' },
];

/** Compliance contact line in the footer's bottom band. */
export const FOOTER_COMPLIANCE_NOTE =
  `For compliance questions, inquiries or complaints regarding ${COMPANY.legalName}, contact ${COMPANY.legalEmail} or write to ${COMPANY.addressLines.join(', ')}.`;

export const FOOTER_TAGLINE =
  'Independent authorized retailer helping U.S. households order Ting fiber internet and Ting Mobile service.';

export const FOOTER_CONTACT = {
  title: 'Talk to a human',
  hours: [
    'Mon–Fri 8AM–9PM ET · Sat–Sun 9AM–6PM ET',
    'Sales and new orders only.',
  ],
} as const;

/** Required disclosures. Plain paragraphs — no external label links. */
export const FOOTER_DISCLAIMERS: string[] = [
  SITE.disclosureLong,
  'INTERNET OFFER: Availability is determined by serviceable address and is not guaranteed in all areas. Actual speeds, including wireless speeds, vary by equipment, in-home wiring and network conditions, and are not guaranteed. Standard installation is included; non-standard installation work may carry additional charges. Local taxes and regulatory fees are additional. Terms are subject to change.',
  'MOBILE OFFER: Ting Mobile requires a compatible unlocked device and an active SIM or eSIM. Promotional credits apply to the first three months of service and are limited to qualifying new lines. The $10 per line rate requires active Ting Internet service at the account address; without it, the standard $25 per line rate applies. Coverage depends on the underlying nationwide LTE and 5G networks and varies by location. Local taxes and regulatory fees are additional.',
  'BUNDLE OFFER: The advertised bundle rate combines Ting Home Fiber with one unlimited mobile line. The comparison to purchasing separately reflects the advertised standalone rates for those same two services. Additional mobile lines are billed separately.',
  'EQUIPMENT: Customers may use their own compatible router at no charge. Ting Whole Home Wi-Fi+ is an optional monthly add-on selected at checkout and may be canceled at any time; the monthly charge depends on the number of mesh units your home requires.',
  'Plans, pricing, speeds, promotional offers and serviceable areas are set by the provider and are subject to change at any time. Pricing shown on this page is confirmed for your specific address at the time your order is placed.',
  'Ting and Ting Internet are trademarks of their respective owner. Use of these marks on this page identifies the services available to order and does not imply ownership by this retailer.',
];

/* -------------------------------------------------------------------------- */
/* Derived selectors — layout files consume these, never the raw arrays       */
/* -------------------------------------------------------------------------- */

export function getPlansByLine(line: ServiceLine): PlanItem[] {
  return PLANS.filter((p) => p.serviceLine === line);
}

/** Service lines that actually have plans, in canonical merchandising order. */
export function getActiveServiceLines(): ServiceSectionMeta[] {
  return SERVICE_ORDER.filter((line) => getPlansByLine(line).length > 0).map(
    (line) => SERVICE_META[line],
  );
}

export function getPlanById(id: string): PlanItem | undefined {
  return PLANS.find((p) => p.id === id);
}

/** Plan that anchors the hero price lockup. */
export function getLeadPlan(): PlanItem {
  return getPlanById(HERO.leadPlanId) ?? PLANS[0];
}

/** Lowest advertised price across all plans — used in the footer legal line. */
export function getLowestPrice(): number | undefined {
  const priced = PLANS.map((p) => p.price).filter(
    (p): p is number => typeof p === 'number',
  );
  return priced.length ? Math.min(...priced) : undefined;
}

/** Anchor nav built from whichever service lines are live, plus the FAQ. */
export function getNavLinks(): { label: string; href: string }[] {
  const labels: Record<ServiceLine, string> = {
    fiber: 'Plans',
    cable: 'Cable',
    bundle: 'Bundles',
    tv: 'TV',
    mobile: 'Mobile',
    phone: 'Phone',
  };
  return [
    ...getActiveServiceLines().map((s) => ({
      label: labels[s.line],
      href: `/#${s.anchor}`,
    })),
    { label: 'FAQ', href: '/#faq' },
  ];
}

/** Human-readable speed string derived from the plan's speed fields. */
export function formatSpeed(plan: PlanItem): string | undefined {
  if (!plan.speedDown) return plan.speedLabel;
  const down = plan.speedDown.toLocaleString('en-US');
  if (!plan.speedUp) return `Up to ${down} Mbps`;
  const up = plan.speedUp.toLocaleString('en-US');
  return plan.speedDown === plan.speedUp
    ? `Up to ${down} Mbps up and down`
    : `Up to ${down} Mbps down / ${up} Mbps up`;
}

/**
 * CTA label rule enforced in one place: a plan with a price says
 * "Call to order", a plan without one says "Call for pricing".
 */
export function getCtaLabel(plan: PlanItem): string {
  return typeof plan.price === 'number' ? 'Call to order' : 'Call for pricing';
}

/** Rows for the fine-print comparison grid, derived straight from PLANS. */
export interface FinePrintRow {
  planId: string;
  plan: string;
  monthly: string;
  speed: string;
  data: string;
  term: string;
  equipment: string;
}

export function getFinePrintRows(): FinePrintRow[] {
  return SERVICE_ORDER.flatMap((line) => getPlansByLine(line)).map((plan) => {
    const cents = plan.cents && plan.cents !== '00' ? `.${plan.cents}` : '';
    return {
      planId: plan.id,
      plan: plan.name,
      monthly:
        typeof plan.price === 'number'
          ? `$${plan.price}${cents}${plan.priceUnit ?? '/mo'}`
          : 'Quoted per location',
      speed: formatSpeed(plan) ?? '—',
      data: plan.dataPolicy ?? '—',
      term: plan.contractTerm ?? '—',
      equipment: plan.equipmentFee ?? '—',
    };
  });
}
