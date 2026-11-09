export const STYLES = [
  {
    badge: 'HTV', title: 'Standard Cut Vinyl T-Shirts', sub: null,
    desc: 'Bold text, numbers, simple logos on any shirt color.',
    price: 20, plus: 23, bulk: [[17.5, 20], [15, 17.5]],
  },
  {
    badge: 'Popular', featured: true, title: 'Full-Color Sublimation', sub: 'Light / White Shirts',
    desc: 'Vibrant photos & multi-color designs (up to 8.5" × 11").',
    price: 23, plus: 26, bulk: [[20, 23], [17.5, 20]],
  },
  {
    badge: 'Premium', title: 'Premium Sublimation', sub: 'Dark & Black Shirts',
    desc: 'Specialized dark tee prints (up to 8.5" × 11" full sheet).',
    price: 27, plus: 30, bulk: [[24, 27], [21, 24]],
  },
];

export const SUB_TIERS = [
  { name: 'Tier 1', label: 'Pocket / Small Logo', detail: 'Half sheet · up to 4.25" × 5.5"', price: 17, byos: 12, vis: { w: 22, h: 18, x: 62, y: 30 } },
  { name: 'Tier 2', label: 'Standard Center Chest', detail: 'Full sheet · up to 8.5" × 11" — included', price: 23, byos: 18, vis: { w: 44, h: 42, x: 50, y: 52 } },
  { name: 'Tier 3', label: 'Oversized / Front & Back', detail: '2 full sheets coverage', price: 29, byos: 24, vis: { w: 56, h: 62, x: 50, y: 58 } },
  { name: 'Tier 4', label: 'Front, Back & Sleeves', detail: '4 full sheets coverage', price: 37, byos: 32, vis: { w: 56, h: 62, x: 50, y: 58 }, kind: 'sleeves' },
  { name: 'Tier 5', label: 'Full Coverage Suite', detail: '6 full sheets — maximum impact', price: 47, byos: 42, vis: { w: 70, h: 80, x: 50, y: 58 }, kind: 'full' },
];

export const VINYL_TIERS = [
  { name: 'Vinyl Tier 1', label: 'Pocket / Small Logo', detail: 'Up to 5" × 5"', price: 16, byos: 11 },
  { name: 'Vinyl Tier 2', label: 'Standard Center Front', detail: 'Up to 10" × 10"', price: 20, byos: 15 },
  { name: 'Vinyl Tier 3', label: 'Oversized Front', detail: 'or Front & Back', price: 26, byos: 21 },
  { name: 'Vinyl Tier 4', label: 'Multi-Placement Suite', detail: '3–4 placements', price: 34, byos: 29 },
];

export const ADDONS = [
  { icon: '📍', title: 'Extra Placement', price: '+$6.00 / location', desc: 'Back neck tag, extra sleeve, back hem' },
  { icon: '✨', title: 'Specialty Vinyl', price: '+$4.00 / shirt', desc: 'Glitter, Metallic, or Holographic finishes' },
  { icon: '⚡', title: 'Rush Order (24–48 hrs)', price: '+$15.00 or 25%', desc: 'Applied to total order amount' },
];

// Per-shirt bulk discounts [6–15, 16+] derived from catalog Section 1 / Section 5
export const BULK = {
  vinyl: { light: [2.5, 5], dark: [2.5, 5] },
  sub: { light: [3, 5.5], dark: [3, 6] },
  byos: [2, 4],
};

export const STEPS = [
  ['Submit Request', 'Fill out the Custom Order Form.'],
  ['Send Files', 'UPLOAD_EMAIL'],
  ['Quote & Invoice', 'Received within 24–48 hours.'],
  ['50% Deposit', 'Secures your spot in the production queue.'],
  ['Final Balance & Release', 'Pay the final 50% upon order completion.'],
];

export const DELIVERY = [
  { label: 'Local Public Meet-Up (Carbondale Walmart)', note: '30-min window, 15-min grace period', price: 'FREE' },
  { label: 'Carbondale Doorstep Delivery', price: '$4.00' },
  { label: 'Standard US Shipping (USPS)', price: 'Quote' },
  { label: 'Bulk/Heavy Orders (3+ boxes)', price: 'Invoiced' },
];

export const EMAIL = 'ghostwritercustomz1@gmail.com';
export const UPLOAD_EMAIL = 'ghostwritercustomzuploads@gmail.com';
export const PAYMENTS = ['CashApp', 'PayPal', 'Venmo', 'Zelle', 'Cash'];

export const money = (n) => '$' + n.toFixed(2);
