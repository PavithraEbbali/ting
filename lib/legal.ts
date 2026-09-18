/**
 * lib/legal.ts — policy document content
 * ---------------------------------------------------------------------------
 * Every compliance page on the site is generated from this file. Adding a
 * document here creates its page content, its footer link entry and its
 * metadata; the route file itself is a four-line wrapper.
 *
 * IMPORTANT — these are drafted as industry-standard retailer policies, not
 * legal advice. Have counsel review them, and fill in every bracketed
 * placeholder (see COMPANY in lib/content.ts) before going live.
 */

import { COMPANY, PHONE, SITE } from './content';

export interface LegalSection {
  heading: string;
  /** Paragraphs. */
  body?: string[];
  /** Optional bulleted points rendered after the paragraphs. */
  list?: string[];
}

export interface LegalDoc {
  slug: string;
  /** Label used in the footer legal row. */
  navLabel: string;
  title: string;
  metaDescription: string;
  /** Standfirst under the page title. */
  intro: string;
  /**
   * Optional. Left undefined so nothing renders until a real date is set —
   * the site carries no placeholder date stamps.
   */
  effectiveDate?: string;
  sections: LegalSection[];
}

const RETAILER = `${COMPANY.legalName}, trading as ${COMPANY.tradingName}`;

/* -------------------------------------------------------------------------- */

export const LEGAL_DOCS: LegalDoc[] = [
  /* ---------------------------------------------------------------- 1 ----- */
  {
    slug: 'privacy-and-data-protection',
    navLabel: 'Privacy & Data Protection',
    title: 'Privacy & Data Protection',
    metaDescription:
      'How this authorized retailer collects, uses, shares and protects personal information submitted through this website or by telephone.',
    intro: `This notice explains what personal information ${RETAILER} collects when you use this website or call our sales line, why we collect it, who we share it with, and the choices available to you.`,
    sections: [
      {
        heading: 'Who we are',
        body: [
          `${RETAILER} is an independent authorized retailer of Ting. We are a separate company from the provider. We sell and arrange orders for the provider's residential and business services; the provider delivers the service, operates the network and bills the customer directly.`,
          `You can reach us at ${PHONE.display} or ${COMPANY.privacyEmail}. Our postal address is ${COMPANY.addressLines.join(', ')}.`,
        ],
      },
      {
        heading: 'Information we collect',
        body: [
          'We collect only what we need to check whether service is available at an address and to place an order on your behalf.',
        ],
        list: [
          'Information you give us directly: name, service address, ZIP code, telephone number, email address, and the plan or services you are interested in.',
          'Information collected automatically when you browse: IP address, browser and device type, pages viewed, referring page, and approximate location derived from IP address.',
          'Call records: if you telephone our sales line, we may keep a record of the call, including notes taken by the agent and, where you have been notified, a recording.',
          'Cookie and similar technology data, as described in our Cookies Policy.',
        ],
      },
      {
        heading: 'What we do not collect on this website',
        body: [
          'This website does not take payment. We do not request or store payment card numbers, bank account details, Social Security numbers or government identification through any form on this site. If you are asked for any of those on a page that appears to be ours, do not provide them and contact us at the number above.',
        ],
      },
      {
        heading: 'How we use your information',
        list: [
          'To check serviceability at the address you provide and tell you which plans are available.',
          'To prepare and submit an order to the provider at your request.',
          'To contact you about an inquiry or an order you have started, by telephone, SMS or email, in line with our TCPA Policy.',
          'To maintain internal records, resolve disputes, and meet our legal and regulatory obligations.',
          'To understand how the site is used and improve it, using aggregated and de-identified analytics.',
        ],
      },
      {
        heading: 'How we share your information',
        body: [
          'We do not sell personal information for money. We share it only as follows:',
        ],
        list: [
          'With the provider, where you have asked us to check availability or place an order. The provider then handles your information under its own privacy policy.',
          'With service vendors who work on our behalf under contract, such as hosting, telephony and analytics providers, limited to what they need to perform that work.',
          'Where required by law, legal process, or to protect the rights, property or safety of any person.',
          'With a successor entity in connection with a merger, acquisition or sale of assets, subject to this notice continuing to apply.',
        ],
      },
      {
        heading: 'Your choices and rights',
        body: [
          'Depending on where you live, you may have the right to request access to the personal information we hold about you, to request correction or deletion, to opt out of certain sharing for targeted advertising, and not to be discriminated against for exercising those rights.',
          `To make a request, contact ${COMPANY.privacyEmail} or call ${PHONE.display}. We will verify your identity before acting on a request, and we will respond within the period required by applicable law. You may authorize an agent to act for you; we may ask for proof of that authorization.`,
        ],
      },
      {
        heading: 'Marketing contact and opt-out',
        body: [
          'You can opt out of marketing contact at any time: reply STOP to any text message, use the unsubscribe link in any marketing email, or tell the agent on a call. Opting out of marketing does not stop service messages about an order you have already placed.',
        ],
      },
      {
        heading: 'Retention',
        body: [
          'We keep inquiry and order records for as long as needed to complete the order, handle any follow-up, and meet our legal, tax and regulatory obligations. We then delete or de-identify them.',
        ],
      },
      {
        heading: 'Security',
        body: [
          'We use administrative, technical and physical safeguards appropriate to the sensitivity of the information we handle, including encryption of data in transit and access controls limiting who can view inquiry records. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        heading: "Children's privacy",
        body: [
          'This site is intended for adults arranging service for a household or business. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with information, contact us and we will delete it.',
        ],
      },
      {
        heading: 'Changes to this notice',
        body: [
          'We may update this notice as our practices or the law change. The current version is always posted on this page.',
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 2 ----- */
  {
    slug: 'disclaimer',
    navLabel: 'Disclaimer',
    title: 'Disclaimer',
    metaDescription:
      'Independent authorized retailer disclosure, and the limits of the pricing, speed and availability information published on this website.',
    intro: `${SITE.disclosure} This page sets out the basis on which the information on this website is published.`,
    sections: [
      {
        heading: 'Independent retailer status',
        body: [
          `${RETAILER} is an independent authorized retailer. We are not the provider, and we are not an agent of the provider for any purpose other than accepting orders. We do not own or operate the network, and we do not set plan pricing, speeds, promotional terms or service areas.`,
          'Your service agreement, once an order completes, is with the provider. Service delivery, installation, billing and account management are performed by the provider under its own terms.',
        ],
      },
      {
        heading: 'Pricing and plan information',
        body: [
          'Plan names, monthly rates, speeds, equipment charges and promotional terms shown on this site reflect the provider’s published residential and business offers as we understand them. They are set by the provider and can change at any time without notice to us.',
          'Nothing on this site is an offer capable of acceptance or a guarantee of price. Final pricing, terms and eligibility are confirmed for your specific service address at the time your order is placed.',
        ],
      },
      {
        heading: 'Availability',
        body: [
          'Fiber networks are built street by street. Two addresses in the same ZIP code can have different availability. Any availability indication on this site is preliminary; serviceability is confirmed only against the full service address.',
        ],
      },
      {
        heading: 'Speeds and performance',
        body: [
          'Advertised speeds are maximum wired throughput and are not guaranteed. Actual speeds vary with in-home wiring, the equipment in use, wireless conditions, the number of connected devices, and conditions on the network and the wider internet. Wireless speeds are typically lower than wired speeds.',
        ],
      },
      {
        heading: 'No professional advice',
        body: [
          'Content on this site is general information about consumer telecommunications services. It is not legal, financial or technical advice, and should not be relied on as such.',
        ],
      },
      {
        heading: 'Third-party content and links',
        body: [
          'Where this site references third-party products, equipment or services, that reference is for identification only and does not imply endorsement. We are not responsible for the content, policies or practices of any third-party website.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'This website is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose and non-infringement, and we are not liable for any indirect, incidental, special or consequential loss arising from use of this site or reliance on its content.',
        ],
      },
      {
        heading: 'Questions',
        body: [
          `If anything on this site appears inaccurate or out of date, tell us and we will correct it. Call ${PHONE.display} or email ${COMPANY.legalEmail}.`,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 3 ----- */
  {
    slug: 'cookies-policy',
    navLabel: 'Cookies Policy',
    title: 'Cookies Policy',
    metaDescription:
      'What cookies and similar technologies this website uses, what each category does, and how to control them.',
    intro:
      'This policy explains the cookies and similar technologies used on this website, what they are for, and how you can control them.',
    sections: [
      {
        heading: 'What cookies are',
        body: [
          'A cookie is a small text file placed on your device by a website. Similar technologies include local storage, pixels and software development kits. They let a site remember your actions and preferences, and let operators understand how a site is used.',
        ],
      },
      {
        heading: 'Categories we use',
        list: [
          'Strictly necessary — required for the site to function, such as remembering that you dismissed a message or keeping a form working across a page load. These cannot be switched off.',
          'Performance and analytics — tell us which pages are viewed and how visitors move through the site, in aggregate, so we can improve it.',
          'Functional — remember choices you make, such as a previously entered ZIP code, so you do not have to enter them twice.',
          'Advertising and measurement — used to measure the performance of advertising campaigns and, where applicable, to show relevant advertising on other sites.',
        ],
      },
      {
        heading: 'Third-party cookies',
        body: [
          'Some cookies are set by third parties we use for analytics and advertising measurement. Those providers process the data under their own policies. We do not control cookies set by third-party sites you reach from here.',
        ],
      },
      {
        heading: 'How to control cookies',
        body: [
          'Most browsers let you see which cookies are set, block them by category, and delete them. Look under Settings, then Privacy or Site Data. Blocking strictly necessary cookies may stop parts of this site working.',
          'Where a consent banner is presented on this site, your choices there are recorded and applied to non-essential categories.',
        ],
      },
      {
        heading: 'Global Privacy Control and Do Not Track',
        body: [
          'Where required by applicable law, we treat a Global Privacy Control signal sent by your browser as a valid request to opt out of sale or sharing of personal information for targeted advertising. Browser Do Not Track signals are not standardized and are not otherwise acted on.',
        ],
      },
      {
        heading: 'Questions',
        body: [
          `Email ${COMPANY.privacyEmail} with any question about cookies on this site.`,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 4 ----- */
  {
    slug: 'tcpa-policy',
    navLabel: 'TCPA Policy',
    title: 'TCPA Policy',
    metaDescription:
      'How this authorized retailer obtains consent for calls and text messages, how to revoke it, and how our internal do-not-call list works.',
    intro:
      'This policy sets out how we obtain and honor consent for telephone and text message contact under the Telephone Consumer Protection Act and related state law.',
    sections: [
      {
        heading: 'Consent',
        body: [
          'When you submit your telephone number through this website or give it to an agent, you agree that we, and the provider on whose behalf we take the order, may contact you at that number about your inquiry or order. That contact may be by live agent, automatic telephone dialing system, artificial or prerecorded voice, or SMS.',
          'Consent to receive marketing calls or texts is not a condition of purchasing any product or service. You can ask us to place an order without agreeing to marketing contact.',
        ],
      },
      {
        heading: 'Message frequency and cost',
        body: [
          'Message frequency varies with the stage of your inquiry. Message and data rates may apply. We do not charge for messages we send.',
        ],
      },
      {
        heading: 'How to revoke consent',
        body: [
          'You may withdraw consent at any time and by any reasonable means.',
        ],
        list: [
          'Reply STOP to any text message from us. We will send one confirmation message and then stop.',
          'Tell any agent on a call that you wish to be added to our do-not-call list.',
          `Email ${COMPANY.privacyEmail} or call ${PHONE.display} and ask to be removed.`,
        ],
      },
      {
        heading: 'Internal do-not-call list',
        body: [
          'We maintain an internal do-not-call list. A request to stop contact is recorded against your number promptly and honored indefinitely unless you later ask us to resume. We also scrub against the National Do Not Call Registry as required.',
        ],
      },
      {
        heading: 'Calling hours',
        body: [
          'We place outbound calls only within the hours permitted by federal and applicable state law, based on the time zone of the number being called.',
        ],
      },
      {
        heading: 'Call monitoring and recording',
        body: [
          'Calls may be monitored or recorded for quality assurance and training. Where recording requires notice or the consent of all parties, that notice is given at the start of the call. If you do not wish to be recorded, tell the agent and we will continue without recording or arrange another way to help.',
        ],
      },
      {
        heading: 'Text message help',
        body: [
          `Reply HELP to any message for assistance, or call ${PHONE.display}. Carriers are not liable for delayed or undelivered messages.`,
        ],
      },
      {
        heading: 'Complaints',
        body: [
          `If you believe you received a call or message from us in error or after revoking consent, contact ${COMPANY.legalEmail} with the number contacted and the approximate date and time. We investigate every report and correct our records.`,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 5 ----- */
  {
    slug: 'trademarks',
    navLabel: 'Trademarks',
    title: 'Trademarks',
    metaDescription:
      'Ownership of the trademarks referenced on this website and the basis on which they are used by this independent authorized retailer.',
    intro:
      'This page identifies the trademarks referenced on this website and explains the basis on which they appear here.',
    sections: [
      {
        heading: 'Provider marks',
        body: [
          `Ting, Ting Internet and related names, logos and product names are trademarks of their respective owner. They are not owned by ${RETAILER}.`,
          'These marks appear on this website solely to identify the services that can be ordered through us. That is nominative use: it describes what we sell and nothing more.',
        ],
      },
      {
        heading: 'No implied affiliation',
        body: [
          `${SITE.disclosure} Use of the provider's marks on this site does not imply ownership, sponsorship, endorsement, partnership or any relationship beyond our status as an authorized retailer. This website is not the provider's official website and is not operated by the provider.`,
        ],
      },
      {
        heading: 'Retailer marks',
        body: [
          'The wordmark, page design, layout, original photography commissioned for this site and the original text on these pages belong to us or are used under license, and may not be copied without permission.',
        ],
      },
      {
        heading: 'Third-party marks',
        body: [
          'Other product, equipment and company names mentioned on this site may be the trademarks of their respective owners and are referenced for identification only.',
        ],
      },
      {
        heading: 'Reporting a concern',
        body: [
          `If you are a rights holder and believe a mark has been used incorrectly on this site, email ${COMPANY.legalEmail} with details of the mark and the page concerned. We will review and respond promptly.`,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 6 ----- */
  {
    slug: 'marketing-policy',
    navLabel: 'Marketing Policy',
    title: 'Marketing Policy',
    metaDescription:
      'The standards this authorized retailer applies to its advertising claims, promotional terms and outbound marketing.',
    intro:
      'This policy sets out the standards we hold ourselves to in how we advertise and describe the services we sell.',
    sections: [
      {
        heading: 'Accuracy of claims',
        body: [
          'Every price, speed and promotional term we publish is taken from the provider’s own published offers. We do not invent plans, alter advertised rates, or describe services the provider does not sell.',
          'Where a rate is promotional, we say so and state what applies afterwards. Where a figure depends on conditions, such as an active internet line or a minimum number of mobile lines, we state the condition alongside the figure rather than in a footnote alone.',
        ],
      },
      {
        heading: 'Material terms',
        body: [
          'Charges that materially affect what a customer pays are disclosed on the same page as the headline price. That includes equipment charges, installation charges where they apply, contract terms and the fact that local taxes and regulatory fees are additional.',
        ],
      },
      {
        heading: 'Comparisons',
        body: [
          'Where we compare a bundled rate to the cost of buying services separately, the comparison uses the provider’s own advertised standalone rates for the same services over the same period. We do not compare against competitors by name.',
        ],
      },
      {
        heading: 'Advertising channels',
        body: [
          'Our paid search and display advertising identifies us as an independent authorized retailer. We do not bid on or present ourselves in a way designed to be mistaken for the provider’s official website, and we do not use the provider’s marks in a way that implies we are the provider.',
        ],
      },
      {
        heading: 'Email and SMS',
        body: [
          'Marketing email and SMS are sent only to people who have asked to hear from us. Every marketing email carries an unsubscribe link that works, and every marketing SMS honors a STOP reply. See our TCPA Policy for how consent and revocation are handled.',
        ],
      },
      {
        heading: 'Partners and affiliates',
        body: [
          'Any third party marketing on our behalf is contractually required to follow this policy and the TCPA Policy. We terminate partners who make claims we cannot substantiate or who contact people without consent.',
        ],
      },
      {
        heading: 'Raising a concern',
        body: [
          `If you have seen advertising attributed to us that you believe is inaccurate or misleading, email ${COMPANY.legalEmail} with a screenshot or a link. We investigate every report.`,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 7 ----- */
  {
    slug: 'service-fulfillment',
    navLabel: 'Service Fulfillment',
    title: 'Service Fulfillment',
    metaDescription:
      'How an order placed through this authorized retailer is fulfilled, who is responsible for each step, and what happens after you order.',
    intro:
      'This page explains what happens after you place an order with us, and which parts are handled by us and which by the provider.',
    sections: [
      {
        heading: 'How an order is placed',
        body: [
          `Orders are taken by telephone on ${PHONE.display}. An agent confirms the service address against the provider’s current footprint, walks through the plans available at that address, states the monthly rate and any equipment charge, and submits the order to the provider on your behalf.`,
          'We read back the plan, the rate and the terms before submitting. If anything does not match what you expected, say so at that point and we will stop.',
        ],
      },
      {
        heading: 'Who does what',
        list: [
          'We check availability, explain the options, take the order and submit it.',
          'The provider approves the order, schedules and performs the installation, activates the service, supplies the account and bills you directly.',
          'After activation, your account relationship is with the provider under the provider’s terms of service.',
          'We remain available for questions about an order we placed for you.',
        ],
      },
      {
        heading: 'Installation',
        body: [
          'Most residential addresses are connected within two to four weeks of ordering, depending on the network build in the area. You choose an appointment window when the order is placed.',
          'An adult aged 18 or over must be present for the visit. A technician brings the fiber line into the premises, mounts a small unit and connects it to your router. The visit typically takes under an hour.',
          'Standard installation is included. Non-standard work — unusual cable runs, additional outlets, or construction requirements specific to the property — may carry an additional charge, which is quoted before any work is done.',
        ],
      },
      {
        heading: 'Equipment',
        body: [
          'You may use your own compatible router at no charge. Optional mesh Wi-Fi hardware can be added at checkout as a monthly add-on and canceled at any time. Mobile orders ship with a physical SIM or an eSIM; you keep your existing handset and number.',
        ],
      },
      {
        heading: 'Changing or canceling before installation',
        body: [
          `You can change or cancel an order before installation at no cost. Call ${PHONE.display} and we will submit the change. Nothing is billed until service is live.`,
        ],
      },
      {
        heading: 'Billing',
        body: [
          'The provider bills you directly for service. We do not bill for service and we do not take payment for it. Local taxes and regulatory fees are set by jurisdiction and are additional to the plan rate.',
        ],
      },
      {
        heading: 'If something goes wrong with an order',
        body: [
          `If an order we placed does not match what was agreed, contact us on ${PHONE.display} or email ${COMPANY.legalEmail}. We will review the order record, including any call recording, and work to put it right.`,
        ],
      },
    ],
  },

  /* ---------------------------------------------------------------- 8 ----- */
  {
    slug: 'pci-dss',
    navLabel: 'PCI DSS',
    title: 'PCI DSS',
    metaDescription:
      'Payment card handling scope for this authorized retailer, and the controls applied to cardholder data.',
    intro:
      'This page describes how payment card data is handled in connection with orders placed through us, and the scope of our obligations under the Payment Card Industry Data Security Standard.',
    sections: [
      {
        heading: 'This website does not process payments',
        body: [
          'No page on this website collects, transmits or stores payment card data. There is no checkout, no payment form and no card field anywhere on this site. The only information collected here is a ZIP code entered into the availability checker.',
          'If you encounter a page that appears to belong to this site and asks for card details, do not enter them. Report it to us on the number below.',
        ],
      },
      {
        heading: 'How payment is taken',
        body: [
          'Service is billed by the provider, not by us. Where payment details are required to activate an account, they are captured through the provider’s own systems under the provider’s payment security controls, and the resulting billing relationship is between you and the provider.',
        ],
      },
      {
        heading: 'Telephone orders',
        body: [
          'Where an order requires payment information to be given during a call, our agents enter it directly into the provider’s system. Agents do not write card numbers down, store them in our systems, or retain them after the call. Where calls are recorded, recording is paused or the card segment is suppressed so that card data is not captured in the recording.',
        ],
      },
      {
        heading: 'Our scope',
        body: [
          'Because we neither store nor process cardholder data in our own environment, our PCI DSS obligations are limited to the controls appropriate to that scope, including staff training on card handling, restricting the systems on which orders are taken, and ensuring cardholder data is never written to our records.',
          'Our scope, and the assessment or attestation applicable to it, is reviewed at least annually and whenever our order-taking process changes.',
        ],
      },
      {
        heading: 'Staff training',
        body: [
          'Agents are trained never to request card details by email or text message, never to repeat a full card number aloud, and never to retain card data in any form. Suspected mishandling is escalated immediately and investigated.',
        ],
      },
      {
        heading: 'Reporting a concern',
        body: [
          `If you believe card data has been requested or handled improperly in connection with an order, contact ${COMPANY.legalEmail} or call ${PHONE.display} immediately so we can investigate.`,
        ],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((d) => d.slug === slug);
}

export function getLegalSlugs(): string[] {
  return LEGAL_DOCS.map((d) => d.slug);
}
