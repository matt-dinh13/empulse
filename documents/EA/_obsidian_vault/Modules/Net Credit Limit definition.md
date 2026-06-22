---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1878844
diagrams: 3
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Net Credit Limit definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

Net Credit Limit (NCL) is an credit amount available for client.  It is calculated only for ProductType = REL and ProductProfile.IsDebit = FALSE (for other products the NCL = 0).
For Primary offer:

	
- If InitialTransactionType = NDF then NCL = Preferred Loan amount (Loan amount asked by client) - Upfront fee else NCL = NetCreditAmount


	
- If PlusExtraLimit is defined then NCL = NCL + PlusExtraLimit.

For Optional offer based on LAP vector:

	
- If CreditAmount_Max is defined in LAP vector then NCL = CreditAmount_Max from LAP
	
- Else the same calculation is applied as for Primary offer.

For Optional offer based on Offer preferences with adjusted credit limit :

	
- If CreditAmount_Max is defined in Offer preferences then NCL = OfferPreferences.CreditAmount_Max
	
- Else the same calculation is applied as for Primary offer.

## 🔗 Connections (3)

- ← Dependency: [[{DEL}Evaluate Product Offer Financial Parameters]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- ← Dependency: [[Provided Credit Limit definition]]

## 📊 Appears In (3 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Calculation of financial parameters of offer
- Custom: Financial calculations
