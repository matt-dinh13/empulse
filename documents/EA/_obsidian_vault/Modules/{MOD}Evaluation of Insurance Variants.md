---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1774324
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Evaluation of Insurance Variants

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Input: 
- OriginalOffer - financial parameters of offer (OFP)

Output: 
- set of RecalculatedOffers representing derived Insurance Variants (structure of OFP)

{ADD PCG-2029}If allInsuranceCombination = True recalculate offer only for X product offers, where X = globalParameter.MAX_PROD_OFFER_INS_COMB.value (MaximalProductOfferInsuranceCombination){/ADD}

Find set of available combination of Insurance services according to rule Prepare list of derived Insurance Variants.
If no combination found then return empty set of RecalculatedOffers and algorithm ends.

For each InsuranceVariant from the list:

Recalculate OriginalOffer according to selected insurance services in InsuranceVariant using business rule Offer recalculation. 
If no RecalculatedOffer is returned from recalculation then continue with the next InsuranceVariant.

Check RecalculatedOffer if at least one service has been selected for each service types assigned to product as mandatory. If not then omit RecalculatedOffer and continue with the next InsuranceVariant.

Add RecalculatedOffer to the result set.

Continue with the next InsuranceVariant.

## 🔗 Connections (2)

- → Dependency: [[{MOD}Prepare list of derived Insurance Variants]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate product offer
- Custom: Evaluation of Insurance Variants
