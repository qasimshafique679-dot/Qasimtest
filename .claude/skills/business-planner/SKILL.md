---
name: business-planner
description: Builds business plans, product-market-fit assessments and go-to-market (GTM) strategies — ICP and positioning, pricing, channels, launch plan, milestones and a one-page plan or full plan document. Use whenever the user wants a business plan, lean canvas, PMF check, GTM or launch strategy, pricing strategy, or asks "how do I take this product to market", even if they only describe an idea.
---

# Business Planner

Turn an idea or an early product into a plan someone could act on and an investor could check.

## 1. Gather inputs first

Ask only for what is missing (one short round of questions, then proceed with stated assumptions):

- Product: what it does, for whom, current stage (idea / MVP / revenue)
- Customer: who pays, who uses, who decides
- Evidence so far: interviews, waitlist, pilots, revenue, retention
- Constraints: budget, team, timeline, geography
- Goal of the document: internal plan, investor pitch, bank loan, grant

Label every number you did not get from the user as **Assumption** and keep an assumptions table at the end.

## 2. Product-market fit assessment

Score each 1–5 with a one-line justification and the evidence behind it:

| Signal | What "5" looks like |
|---|---|
| Problem severity | Customers already pay or hack workarounds |
| Frequency | Problem occurs weekly or more |
| ICP clarity | You can name 20 target accounts/people |
| Retention | Flat cohort curve after month 3 |
| Pull | Inbound demand, referrals, "very disappointed" ≥ 40% (Sean Ellis test) |
| Willingness to pay | Price tested with real money, not surveys |

Verdict: **Pre-PMF / Emerging / Strong**, plus the 3 cheapest experiments that would move the weakest score.

## 3. Go-to-market strategy

1. **ICP and segments** — firmographics/demographics, trigger events, top 3 pains.
2. **Positioning** — "For [ICP] who [pain], [product] is a [category] that [key benefit]. Unlike [alternative], we [differentiator]." Use the `competitive-landscape` skill if competitors need deeper analysis.
3. **Pricing** — model (seat, usage, tier, flat), anchor price, packaging table, and how it maps to value delivered.
4. **Motion** — product-led, sales-led, partner-led or community-led; justify from ACV (rough rule: < $5k ACV → self-serve/PLG, $5k–50k → inside sales, > $50k → field sales).
5. **Channels** — rank 3–5 channels by expected CAC and time-to-signal; pick one primary to master first.
6. **Launch plan** — 90-day plan by week block: pre-launch, launch, post-launch, with owners and success metrics.
7. **Funnel targets** — visitors → signups → activated → paid, with conversion assumptions.

## 4. Business plan structure

Produce sections in this order, concise and number-backed:

1. Executive summary (half a page; write last)
2. Problem and solution
3. Market size — TAM/SAM/SOM bottom-up (customers × price), with top-down sanity check
4. Product and roadmap
5. Competition and differentiation
6. Business model and unit economics (CAC, LTV, payback, gross margin)
7. GTM strategy (from section 3)
8. Team and hiring plan
9. Financial plan — 3-year summary; use the `financial-modeling` skill for full statements
10. Milestones and funding ask (amount, use of funds, runway, milestones it buys)
11. Risks and mitigations
12. Assumptions table

Offer to run the `startup-stress-test` skill on the finished plan.

## Output

- Default: a document (use the docs skill when available), otherwise Markdown.
- Offer a one-page version (lean canvas style) alongside any full plan.
- Never invent market data as fact; cite sources found via research, or mark as Assumption.
