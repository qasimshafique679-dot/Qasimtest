---
name: startup-stress-test
description: Stress-tests a startup, business plan, pitch deck or financial model — surfaces hidden assumptions, checks SaaS metrics (CAC, LTV, payback, churn, NRR, burn multiple, Rule of 40, magic number) against benchmarks, and runs downside scenarios to find what breaks first. Use whenever the user asks to validate, sanity-check, poke holes in, red-team, or "be a skeptical investor" about a startup idea, plan, deck or model.
---

# Startup Stress Test

Act as a skeptical but constructive investor. The goal is to find what breaks first, not to be negative.

## 1. Extract assumptions

Read the plan/deck/model and list every load-bearing assumption in a table:

| # | Assumption | Stated value | Source/evidence | Confidence (H/M/L) | Impact if wrong (H/M/L) |
|---|---|---|---|---|---|

Cover: market size, ICP, pricing, conversion rates, sales cycle, CAC, churn, expansion, hiring speed, gross margin, fundraising timing. Flag anything **Low confidence + High impact** as a critical risk.

## 2. SaaS metrics check

Compute what the inputs allow; show the formula and the result, and compare with these rough benchmarks (state that they vary by stage and segment):

| Metric | Formula | Healthy (rough) |
|---|---|---|
| LTV | ARPA × gross margin % ÷ monthly churn | — |
| LTV : CAC | LTV ÷ CAC | ≥ 3 |
| CAC payback (months) | CAC ÷ (ARPA × gross margin %) | < 12 SMB, < 18–24 enterprise |
| Gross margin | (Revenue − COGS) ÷ Revenue | ≥ 70% software |
| Monthly logo churn | Lost customers ÷ start customers | < 3% SMB, < 1% enterprise |
| Net revenue retention | (Start MRR + expansion − contraction − churn) ÷ start MRR | ≥ 100%, best > 120% |
| Burn multiple | Net burn ÷ net new ARR | < 1.5 good, > 3 concerning |
| Rule of 40 | Growth % + profit (or FCF) margin % | ≥ 40% at scale |
| Magic number | Δ quarterly revenue × 4 ÷ prior-quarter S&M spend | > 0.75 |
| Runway (months) | Cash ÷ monthly net burn | ≥ 18 after a raise |

Also check internal consistency: does the funnel math produce the revenue claimed? Does headcount match the opex? Do growth rates imply an impossible market share by year 5?

## 3. Scenario and sensitivity

- Run **Base / Downside / Severe** cases: e.g. CAC +50%, conversion −30%, churn ×2, sales cycle +3 months, raise delayed 6 months.
- Report for each: runway, breakeven month, cash low point, ARR at month 24.
- Identify the single variable the outcome is most sensitive to.

If the user gives a spreadsheet, use the xlsx skill to read it and audit formulas (hard-coded numbers in formula rows, broken links, circular references, inconsistent ranges).

## 4. Investor red flags

Check and call out: top-down-only market sizing, "no competitors", hockey stick without a driver, CAC excluding salaries, churn assumed near zero, founder-market fit gaps, single-channel dependency, customer concentration, regulatory exposure.

## Output

1. **Verdict** in 3 lines: biggest strength, biggest risk, survivability rating (Fragile / Viable / Robust).
2. Critical risks (top 5), each with a cheap test to de-risk it within 30 days.
3. Assumptions table, metrics table, scenario table.
4. Questions an investor will ask, with suggested answers.

Never present benchmarks as universal truth; note stage, segment and that numbers came from the user or are assumptions.
