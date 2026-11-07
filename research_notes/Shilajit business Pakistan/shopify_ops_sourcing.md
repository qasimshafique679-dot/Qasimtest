# Shopify Operations, Payments, Couriers, Sourcing and Packaging for a Shilajit Store in Pakistan

Research date: 7 November 2026. Exchange rate used: **USD 1 = PKR 280**. This is a rounded working rate. The latest State Bank of Pakistan figures found were PKR 278.90 (21 April 2026) and PKR 279.884 (30 January 2026) ([ARY, Apr 21 2026](https://arynews.tv/dollar-and-other-currency-rates-today-in-pakistan-april-21-2026); [ARY, Jan 30 2026](https://arynews.tv/dollar-currency-rates-in-pakistan-today-jan-30-2026)). No November 2026 SBP figure was found, so check sbp.org.pk before relying on the conversions.

**How these notes were researched:** Several sites could not be fetched directly from the research environment: shopify.com, anoc.pk and trackmyorder.pk. For those sites, the figures below come from search-result snippets, not full page reads. Most courier, gateway and app figures come from Pakistani vendor or agency blogs, not official rate cards. Treat them as indicative.

---

## 1. Shopify plans and pricing, how to pay the subscription, and domain costs

### Takeaway
Shopify's Pakistan (Urdu) pricing page appears to show regional pricing: Basic $19/mo (about PKR 5,320), Grow $49/mo (about PKR 13,720) and Advanced $299/mo. It also offers a 3-day free trial, then $1/mo for 3 months. Start on Basic. You pay in USD with an international-enabled Pakistani debit or credit card. A .pk domain costs about PKR 3,899/yr through local registrars (since October 2025). A .com costs about $10–16/yr.

### Cited Findings
| Plan | USD/mo (Pakistan page) | PKR/mo @280 | 3rd-party gateway fee (Shopify's own) |
|---|---|---|---|
| Basic | $19 (trial: 3 days free, then $1/mo for 3 months) | ~5,320 | 2.0% |
| Grow | $49 | ~13,720 | 1.0% |
| Advanced | $299 | ~83,720 | 0.6% |
| Plus | (enterprise) | — | 0.2% |

- Shopify's Urdu Pakistan pricing page shows Basic at $19/month, with a 3-day free trial then $1/month for 3 months — [shopify.com/pk-ur/pricing (search snippet)](https://www.shopify.com/pk-ur/pricing)
- The same page lists Grow at $49/month and Advanced at $299/month — [shopify.com/pk-ur/pricing (search snippet)](https://www.shopify.com/pk-ur/pricing)
- Third-party guides give conflicting figures, often because they use US list prices ($29–39 Basic, $79–105 Grow). Examples: "~PKR 10,800/mo monthly, ~PKR 8,100 annual"; "$25 (~PKR 7,400)"; "$39 (~PKR 12,000)" — [BSS Commerce](https://bsscommerce.com/shopify/shopify-pricing-pakistan/); [Avada](https://avada.io/blog/shopify-pricing-pakistan/); [earnfrompakistan](https://earnfrompakistan.pages.dev/en/shopify-pakistan-guide-2026/)
- Shopify adds its own transaction fee when you use a third-party gateway: 2% on Basic, 1% on Grow, 0.6% on Advanced, 0.2% on Plus. This comes on top of the gateway's own fee (MDR) — [Shopify Community](https://community.shopify.com/t/credit-debit-card-requirements-from-pakistan/115875); [loop2tech](https://loop2tech.com/blog/shopify-payment-gateway-pakistan)
- Shopify Payments is not available in Pakistan as of 2026, and no timeline has been announced — [theneoapps](https://theneoapps.com/blogs/shopify-cash-on-delivery-pakistan-setup-guide-cod-form-2026/); [xstak](https://www.xstak.com/blog/payment-gateways-in-pakistan)
- Shopify bills in USD and your bank does the conversion. A Pakistani credit or debit card works if it meets Shopify's card requirements, so it must be enabled for international/online use — [Shopify Community](https://community.shopify.com/t/credit-debit-card-requirements-from-pakistan/115875); [BSS Commerce](https://bsscommerce.com/shopify/shopify-pricing-pakistan/)
- .pk domain: HosterPK raised the price from Rs 3,399 to **Rs 3,899/yr** effective 1 October 2025. The same price applies to registration and renewal for .pk, .com.pk, .net.pk and .org.pk — [HosterPK blog](https://blog.hosterpk.com/pk-domain-prices-update/)
- .pk renewals are commonly sold in two-year blocks. One older guide quotes an outdated Rs 1,600/yr — [CreativeON](https://creativeon.com/?p=31890)
- A domain aggregator found the cheapest international .pk registration at about $16/yr, but its renewal figures are inconsistent between snapshots ($16 vs $33.99) — [domainoffer.net](https://domainoffer.net/tld/pk)

### Inferences
- The $19/$49/$299 figures fit the regional pricing Shopify uses in some emerging markets. The research environment could not open shopify.com directly, so confirm them at signup.
- Year-one platform cost on Basic: about $1×3 + $19×9 = $174, roughly PKR 48,700, before apps.
- Shopify's 2% third-party fee applies to card and wallet orders. Whether Shopify charges it on manual COD orders should be confirmed. COD is normally a "manual payment method", and Shopify generally does not charge transaction fees on manual payments (not verified in this research).
- .com vs .pk: a .com bought through Shopify or Namecheap costs about $10–16/yr (PKR 2,800–4,500). The two cost roughly the same, so choose on branding. A .com also works if you later export.

### Gaps
- No official PKR price from Shopify. Annual-billing discount for the Pakistan regional pricing not confirmed.
- Exact .com price not looked up in this research (general market knowledge only).
- PKNIC's official 2026 price list not retrieved.

---

## 2. Payments in Pakistan on Shopify

### Takeaway
Cash on delivery dominates Pakistani e-commerce. Credit-card penetration is reportedly under 5%. The usual online options are PayFast, Safepay and JazzCash/Easypaisa merchant accounts, with fees of roughly 1.5–3% per transaction plus Shopify's 2% on Basic. Bank transfer can be offered as a manual payment method. Rates are negotiated per merchant.

### Cited Findings
| Gateway | Reported fee | Setup/monthly | Notes |
|---|---|---|---|
| PayFast | 3% MDR + tax (per one review). Another source says the MDR is not published / set per merchant | Reportedly no setup, annual or maintenance fees | Ask for a written rate card — [rapidgateway.pk](https://rapidgateway.pk/resources/payfast-pakistan-review); [xstak](https://www.xstak.com/blog/payment-gateways-in-pakistan) |
| Safepay | 2.9% + Rs 30 for domestic cards (+0.3% international), per one source; 1.5–2.5% by package, per another | Standard plan: no setup or monthly fee | Embedded checkout and popular with Shopify merchants — [loop2tech](https://loop2tech.com/blog/shopify-payment-gateway-pakistan); [assanpay](https://assanpay.com/payment-gateway-setup-fees-pakistan/) |
| JazzCash merchant | 1.5–2% (or 1.5–2.5%) | Nil or nominal setup | Settlement T+1 to T+3. Shopify plugin available — [wobooks](https://wobooks.com/post/jazzcash-vs-easypaisa-which-is-better-for-your-online-store-in-2026); [buzzinteractive](https://www.buzzinteractive.co/blog/payment-gateways-in-pakistan) |
| Easypaisa merchant | 1.5% (or 1.5–3%, or 2–3%) | Nil or nominal | Lower rates at higher volume — [digiteazy](https://digiteazy.com/payment-gateway-pakistan/); [hostedium](https://www.hostedium.com/5-best-payment-gateways-in-pakistan-for-ecommerce/) |
| Shopify fee on top (Basic) | 2% | — | [Shopify Community](https://community.shopify.com/t/credit-debit-card-requirements-from-pakistan/115875) |

- One source estimates 65–75% of online buyers use JazzCash or Easypaisa, and credit-card penetration remains below 5% (unverified) — [wobooks](https://wobooks.com/post/jazzcash-vs-easypaisa-which-is-better-for-your-online-store-in-2026)
- Finance Act 2025 introduced withholding tax on e-commerce collections: 2% of the gross amount for COD vs 1% when the buyer pays by digital or banking channel — [theneoapps](https://theneoapps.com/blogs/shopify-cash-on-delivery-pakistan-setup-guide-cod-form-2026/)
- Merchant onboarding: the business name must match exactly across all documents, and international gateways may require formal company registration — [assanpay](https://assanpay.com/payment-gateway-setup-fees-pakistan/); [digiteazy](https://digiteazy.com/payment-gateway-pakistan/)
- Simpaisa (a gateway vendor) argues COD is costly and pushes digital alternatives, which is a vendor viewpoint — [Simpaisa](https://www.simpaisa.com/blogs/why-cash-on-delivery-is-killing-your-e-commerce-business-and-what-to-do/)

### Inferences
- Realistic launch setup: COD (the main channel) + bank transfer or JazzCash/Easypaisa wallet (manual) + one card gateway (Safepay or PayFast) once the business is registered. All-in card or wallet cost on Basic is about 3.5–5% (gateway + Shopify 2%).
- The tax difference (2% COD vs 1% digital) plus RTO savings gives a reason to offer a small prepaid discount (e.g. 5%) or free shipping on prepaid orders.
- A typical document set (from general knowledge, not verified here): CNIC, NTN, a bank account in the business name, sole-proprietor letterhead or SECP registration, and website policy pages (refund, privacy, contact).

### Gaps
- No authoritative statistic for COD's share of Pakistani online orders was found. Blogs commonly cite 80–90%+, but no primary source was retrieved.
- Official PayFast, Safepay, JazzCash and Easypaisa rate cards and onboarding checklists were not retrieved.

---

## 3. Couriers integrated with Shopify: rates, COD fees, remittance and RTO

### Takeaway
A 0.5 kg parcel costs roughly PKR 150–250 per parcel, plus COD fees of about 1–3% of the collected amount. PostEx and Trax price by negotiated contract. PostEx is known for upfront or fast COD payouts. Typical COD RTO in Pakistan is 20–35% (healthy is under 15%). Courier aggregator apps such as Courierify, ShipOps and Moose Commerce apps book couriers from inside Shopify.

### Cited Findings
| Courier | 0.5 kg rate (PKR) | COD fee | Source |
|---|---|---|---|
| PostEx | 150–200 within city (one blog); 190–230 starting (another). Official page: "contact for rates" | 1.5–2.5% of COD, deducted from upfront payment | [trackmyorder.pk](https://trackmyorder.pk/blog/guides/postex-courier-rates-2026); [clicks.com.pk](https://blog.clicks.com.pk/top-10-best-courier-services-for-ecommerce-in-pakistan/) |
| Trax | 180–220 starting | ~2–3% | [clicks.com.pk](https://blog.clicks.com.pk/top-10-best-courier-services-for-ecommerce-in-pakistan/); [anoc.pk](https://anoc.pk/blog/cod-courier-comparison) |
| Leopards (LCS) | 170–220 within city (0.5–1 kg); 200–250 per another | 1% of collection, min Rs 50 (calculator page) | [lcstracking.pk](https://www.lcstracking.pk/delivery-cost-calculator/); [anoc.pk](https://anoc.pk/blog/cod-courier-comparison) |
| TCS, M&P, BlueEx, Call Courier, Rider | Listed in comparison guides, but no reliable figures retrieved | — | [xstak](https://www.xstak.com/blog/courier-services-for-ecommerce); [shazzseo](https://shazzseo.com/best-courier-services-for-ecommerce-in-pakistan/) |

- PostEx and Trax rates are merchant-contract pricing rather than published — [weproms](https://weproms.com/blog/should-online-store-offer-free-delivery-pakistan/)
- COD RTO in Pakistan is commonly 20–35%. Fashion and electronics stores often exceed 40%. One fashion brand reported about 42%. Under 15% is called healthy — [trackmyorder.pk](https://trackmyorder.pk/blog/shopify-tips/cod-return-rate-pakistan-shopify); [fawazahmed.com](https://fawazahmed.com/rto-cod-ecommerce-pakistan/); [easysellapp](https://easysellapp.com/blogs/wiki/cod-ecommerce-pakistan-bangladesh-cash-collection-delivery-2026)
- Courier and OMS apps: **Courierify** integrates TCS, BlueEx, PostEx, Leopards, M&P and others plus WhatsApp automation. Its Pro tier is $19.99/mo with a 3-day trial, and a free plan is also listed — [courierifyapp.com](https://courierifyapp.com/); [growzar](https://growzar.com/courierify/). **ShipOps** confirms by Urdu call or WhatsApp, books the courier and prints labels (free install, paid plans) — [shipops.app](https://shipops.app/shopify-cod-app-pakistan/). **Moose Commerce** offers free Leopards integration and COD-confirmation apps — [Shopify App Store](https://apps.shopify.com/partners/moose-commerce). **Track My Order** handles tracking and has a free plan — [trackmyorder.pk](https://trackmyorder.pk/blog/comparisons/best-order-tracking-app-shopify-pakistan). Other OMS options: [shipup.app](https://shipup.app/), [OrderPulse](https://www.orderpulse.co/)

### Inferences
- Budget about PKR 200 shipping + about 2% COD fee per order. For a PKR 3,500 order that is about PKR 270 per delivered order. RTO parcels usually also incur forward plus return charges (return charges not verified).
- Shilajit jars are small and heavy, about 100–250 g packed, so they fit the 0.5 kg slab.
- Open accounts with two couriers (e.g. PostEx for cash flow, Leopards or TCS for reach) and route by city performance.

### Gaps
- No verified remittance timelines per courier. PostEx "upfront payment" is mentioned but terms were not confirmed. Others are commonly said to remit weekly.
- No verified return/RTO charges per courier, and no rates for TCS, M&P, BlueEx, Call Courier or Rider. The comparison pages (anoc.pk, trackmyorder.pk) could not be fetched in full.

---

## 4. Essential Shopify apps and themes for Pakistan

### Takeaway
Core stack: a COD order form plus WhatsApp/call confirmation, a courier booking/OMS app, reviews (Judge.me has a free tier), Meta and TikTok pixels (free official channel apps), and a fast free theme. Pakistani-built apps (Courierify, ShipOps, Moose Commerce) combine confirmation and courier booking.

### Cited Findings
- WhatsApp COD verification apps exist specifically for this purpose (e.g. COD Verification) — [codverification.com](https://codverification.com/); [dondy.net](https://www.dondy.net/post/whatsapp-cod-order-confirmation-for-shopify-how-to-reduce-returns-by-40)
- Courierify Pro costs $19.99/mo (about PKR 5,600) and includes WhatsApp automation and multi-courier booking — [courierifyapp.com](https://courierifyapp.com/)
- ShipOps offers COD confirmation by Urdu call or WhatsApp plus courier booking — [shipops.app](https://shipops.app/shopify-cod-app-pakistan/)
- A Pakistan COD setup guide covers COD form apps — [theneoapps](https://theneoapps.com/blogs/shopify-cash-on-delivery-pakistan-setup-guide-cod-form-2026/)
- A 2026 cost breakdown for online stores in Pakistan exists — [weproms](https://weproms.com/blog/cost-to-start-online-store-in-pakistan/)

### Inferences
- From general knowledge (not verified in this research): Judge.me has a free plan and an "Awesome" plan of about $15/mo. Meta's "Facebook & Instagram" and "TikTok" Shopify channel apps are free. Shopify's free themes (Dawn, Sense, Refresh) are fast and adequate for a single-product brand. Paid themes cost about $250–$400 one-time. Bundle/upsell apps typically cost $0–$30/mo.
- A reasonable app budget at launch is $0–40/mo (PKR 0–11,200).

### Gaps
- Zapp and Nexus (named in the brief) returned no search results, so their pricing was not verified.
- Judge.me and upsell app pricing were not verified against the App Store during this research.

---

## 5. COD confirmation and fake-order problems and solutions

### Takeaway
Fake, prank and impulse COD orders, plus customers who cannot be reached, drive RTO of 20–35%. Confirming every order on WhatsApp or by call within minutes is the standard fix. Vendors claim it cuts RTO by 30–60%, which is not independently verified. Other fixes: partial advance payment, blocking repeat refusers, and clear address/phone validation.

### Cited Findings
- Estimates of outright fraudulent COD orders: about 8–10% per one source, a 25% average fake-order rate per a COD app, and another argues 70% of COD failures are operational, not fraud — [easysellapp](https://easysellapp.com/blogs/wiki/cod-ecommerce-pakistan-bangladesh-cash-collection-delivery-2026); [codverification.com](https://codverification.com/)
- Merchants who send a confirmation within 5 minutes report RTO dropping from 30–35% to the high teens. Vendors claim reductions of 40–60% or 30–40% — [trackmyorder.pk](https://trackmyorder.pk/blog/shopify-tips/cod-return-rate-pakistan-shopify); [dondy.net](https://www.dondy.net/post/whatsapp-cod-order-confirmation-for-shopify-how-to-reduce-returns-by-40)
- Keep RTO under 15% — [fawazahmed.com](https://fawazahmed.com/rto-cod-ecommerce-pakistan/)
- The COD withholding tax (2%) is higher than for digital payments (1%), which adds to the cost of COD — [theneoapps](https://theneoapps.com/blogs/shopify-cash-on-delivery-pakistan-setup-guide-cod-form-2026/)

### Inferences
- Suggested SOP: auto WhatsApp message on order → if no reply in 2–4 h, call → cancel if unreachable in 24 h. Offer a prepaid discount. Charge a small advance (e.g. delivery fee) for high-value orders and for flagged cities or numbers. Keep a blacklist of numbers that refused delivery.
- Health supplements are an impulse buy, so expect RTO toward the higher end without confirmation.

### Gaps
- No independent (non-vendor) study of RTO reduction was found.

---

## 6. Sourcing shilajit in Pakistan

### Takeaway
Wholesale purified resin sold online in Pakistan lists at roughly **PKR 55,000–95,000 per kg** (2026). One bulk raw (unprocessed) lot from GB is listed at about PKR 6,250/kg (40 kg+), an outlier to verify. Retail is about PKR 75–100/g. Purification is water dissolution → settling and filtration → sun-drying for 30–90 days. No reliable data was found on physical wholesale markets (Rawalpindi, Akbari Mandi, Jodia Bazaar) or private-label suppliers.

### Cited Findings
| Grade | Price | Source |
|---|---|---|
| Raw stone/unprocessed, 40 kg+ lot, GB | PKR 249,998 per lot (about PKR 6,250/kg) — outlier | [GBN Mart](https://www.gbnmart.com/raw-shilajit-from-gilgit-baltistan-natural-unprocessed-himalayan-shilajit-bulk-wholesale-supply-40kg) |
| Raw/semi-purified resin, 1 kg | PKR 55,000–60,000 | [Chitral House](https://chitralhouse.com/blogs/news/shilajit-1kg-price-in-pakistan) |
| Wholesale purified 1 kg | PKR 85,000 | [Hunza Foodways](https://hunzafoodways.com/shop/pure-himalayan-salajeet-shilajit/) |
| Bulk resin from 1 kg | PKR 95,000 | [Organic Aprico](https://organicaprico.com/products/shilajit) |
| Wholesale 1 kg survey (checked 29 Oct 2026) | PKR 60,000–95,000 | [Taj Sultan](https://tajsultan.com/collections/shilajit-in-pakistan) |
| Retail | PKR 2,399 / 20 g; PKR 3,999 / 40 g (~PKR 100/g) | [Taj Sultan](https://tajsultan.com/collections/shilajit-in-pakistan) |

- Purification as described by sellers:
  - Organic Aprico (Skardu): 8-stage ultra-filtration with UV and ozonation, then sun-dried 40+ days — [Organic Aprico](https://organicaprico.com/)
  - Sulaiman Aftabi: water extraction, repeated manual filtration, sun-drying 45–90 days — [sulaiman-aftabi.com](https://www.sulaiman-aftabi.com/about)
  - Rakaposhi: dissolve in water, gravity settle, filter, thin-layer sun-dry at altitude — [Rakaposhi Organics](https://www.rakaposhiorganics.com/products/rakaposhigold20grams)
- An academic study found the drying method (sun vs hot plate) changes the physico-chemical properties of purified shilajit — [ResearchGate / IJATM](https://www.researchgate.net/publication/377380892_International_Journal_of_Ayurveda_and_Traditional_Medicine_A_Comparative_study_of_Physio-chemical_Properties_and_Pharmaceutical_Process_of_Shilajit_Asphaltum_punja-bianum_Purification_with_Triphala_Kw)
- Buying guides advise asking for a batch heavy-metal test report (e.g. PCSIR) before paying, and preferring traditional water filtration plus sun-drying — [Taj Sultan](https://tajsultan.com/collections/shilajit-in-pakistan); [Chitral Herbs](https://chitralherbs.com/blogs/news/top-10-shilajit-buying-tips-for-pakistan)

### Inferences
- COGS for resin alone: at PKR 60,000–95,000/kg, a 20 g jar costs about PKR 1,200–1,900 and a 10 g jar about PKR 600–950. Buying raw and purifying in-house could be much cheaper per kg. Yield losses from raw rock to resin are large, often cited informally as 10–30%, which is not verified here.
- Lab testing (heavy metals, fulvic acid) through PCSIR or a private lab is a key trust differentiator and should be budgeted.

### Gaps
- No news or independent reporting on farm-gate or trader prices in Skardu, Hunza or Chitral.
- No verified info on wholesale traders in Rawalpindi, Lahore Akbari Mandi or Karachi Jodia Bazaar.
- No white-label/private-label shilajit suppliers in Pakistan identified with terms or MOQs.
- Lab test costs (PCSIR) and DRAP/PFA regulatory requirements for selling a supplement were not researched here.

---

## 7. Packaging costs in Pakistan

### Takeaway
Local amber glass jars with lids cost about PKR 150–180 per unit (20–50 g, retail-ish pricing, Bio Shop). Chinese wholesale amber jars on Alibaba cost $0.08–1.49 per unit (PKR 22–420), with MOQs from 100 to 5,000+, plus freight and duty. Prices for spoons, boxes and labels were not found.

### Cited Findings
| Item | Price | MOQ / notes | Source |
|---|---|---|---|
| Amber glass jar, silver lid, 20 g | PKR 150 | In stock. Listing mixes "ml"/"g" units, so confirm | [Bio Shop PK](https://bioshop.pk/products/amber-glass-cosmetic-jar-with-silver-lid) |
| Same, 30 g | PKR 170 | — | [Bio Shop PK](https://bioshop.pk/products/amber-glass-cosmetic-jar-with-silver-lid) |
| Same, 50 g | PKR 180 | — | [Bio Shop PK](https://bioshop.pk/products/amber-glass-cosmetic-jar-with-silver-lid) |
| Amber jars 5–50 g, liner + black lid (China) | $1.50–2.50 (PKR 420–700) | Unclear if per unit | [Herbalsense](https://herbalsense-life.com/product/amber-glass-jars-50g-30g-20g-15g-10g-5g/) |
| Amber jars (Alibaba listings) | $0.08–1.49/unit (PKR 22–417) | MOQ ranges 100 to 5,000 | [Alibaba](https://www.alibaba.com/showroom/amber-glass-jars-wholesale.html) |
| 20/30/50 g amber jars, black lid (factory) | Price on request | — | [Jiaxing Glass](https://www.glass-cosmetic-bottles.com/face-cream-jar/wholesale-cosmetic-glass-jars-20g-30g-50g.html) |

- Bio Shop recommends induction-sealed or liner-based lids for products containing oils or actives, which is relevant for resin — [Bio Shop PK](https://bioshop.pk/products/amber-glass-cosmetic-jar-with-silver-lid)

### Inferences
- An indicative per-unit packaging budget, estimated and not sourced: jar PKR 150–180 + mini spoon PKR 10–30 + printed label PKR 10–25 + printed carton box PKR 40–120 (at 500–1,000 MOQ) + shipping flyer/bubble wrap PKR 15–30. That totals about **PKR 225–385 per unit**. Get quotes from Lahore (Urdu Bazaar / Shah Alam printers) and Karachi packaging suppliers.

### Gaps
- No sourced PKR prices or MOQs for metal/wooden mini spoons, printed boxes, labels or black (miron/violet) glass jars.
- Daraz listings were not retrieved.

---

## 8. Product photography and branding costs

### Takeaway
Product photography in Pakistan costs about PKR 1,500–7,000 per product, or PKR 5,000–15,000 for a basic 10–20 image package (Karachi). Styled or lifestyle shoots cost PKR 20,000–80,000 per session. No logo or branding prices were found.

### Cited Findings
- Lahore: from about Rs 7,000 per product, less at volume — [Delenzo Studio](https://delenzostudio.com.pk/product-photography-in-lahore-guide/)
- Lahore average PKR 2,000–6,000 per product; styled or catalog projects PKR 20,000–60,000. Karachi PKR 2,500–7,000 per product; lifestyle or model PKR 25,000–80,000 per session. The national range is cited as PKR 1,500–3,500 per product — [Hoop Studios 2026 guide](https://hoopstudios.com/blogs/product-photography/product-photography-cost-in-pakistan)
- Karachi package: basic PKR 5,000–15,000 (10–20 images); premium PKR 35,000–75,000 (50–100 images) — [2288.pk](https://www.2288.pk/product-photography-in-karachi/)
- Budget white-background work from Rs 300 per shot (page about 5 years old). Upwork Lahore freelancers about $10–15/hr — [prophotographerlahore](https://www.prophotographerlahore.com/product-photography-services-in-lahore-karachi-islamabad-pakistan/); [Upwork](https://www.upwork.com/hire/product-photography-freelancers/pk/lahore/)

### Inferences
- For a 1–3 SKU shilajit brand, plan PKR 15,000–40,000 for a white-background plus lifestyle shoot. Logo and label design from Pakistani freelancers (Fiverr/Upwork/local) commonly costs about PKR 5,000–50,000 (unsourced estimate).

### Gaps
- No sourced logo, label or brand-identity design prices for Pakistan.
