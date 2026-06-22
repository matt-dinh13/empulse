---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1303851
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {MOD}Sorting of generated Primary product offers

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

System orders found product offers by level of matching (best match first) according to following rules:

	
- The result is sorted by 
- {DEL PCG-707}Product Preference (descending as defined in Product Preference){/DEL}
- {ADD PCG-707}Preference in descending order{/ADD}
- number of selected insurance types (descendingly); if InsuranceVariantsRequired = True then ignore this criterion, i.e. use number = 0 for all product offers
- Product Type (REL, CEL) 
For offers based on product where ProductType = CEL
- When term was inputted:
    -- by smallest difference between requested term and offered term (absolute value) ascending order then
    -- by product variant code ascending order.
- When maximal monthly payment was inputted:
    -- by annuity descending order 
    {DEL PCG-707}
    -- by product variant code ascending order
    {/DEL}
- Otherwise:
    -- by term: if GlobalParameter.ProductOffersSortingPreference = 'TERM_DESC' in descending else in ascending order     {DEL PCG-707}
    -- by product variant code ascending order
    {/DEL}
For offers based on product where ProductType = REL and ProductProfile.IsDebit = FALSE
-- by difference between Net Credit Amount and Preferred loan amount inputted in calculator descending order (inclusive the sign of result, i.e. most positive difference is the first and the most negative difference is the last) then
-- by Presented Minimal Installment Amount ascending order then
-- by product variant code ascending order.
	
- From the sorted set only the best (first) are returned according to following rules:
-- numCELret = Minimum(numCELgen, MaxProductOffersCEL)
-- numRELret = Minimum(numRELgen, MaxProductOffersREL) 
where
numCELgen/numRELgen = number of generated offers based on ProductType = CEL/REL  
MaxProductOffersCEL, MaxProductOffersREL= global parameters; maximal number of returned offers based on ProductType = CEL/REL
numCELret, numRELret = number of returned offers based on ProductType = CEL/REL

## 🔗 Connections (1)

- → Generalization: [[Sorting of generated offers]]

## 📊 Appears In (1 diagrams)

- Custom: Calculate product offer
