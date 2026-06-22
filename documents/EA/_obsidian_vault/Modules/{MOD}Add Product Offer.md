---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme"
domain: "Modules"
element_id: 1778237
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Add Product Offer

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme

## 📝 Notes

// Add Product Offer to SetOfProductOffers

Inputs:

	
- ProductOfferFinancialParameters
	
- {DEL PCG-707}Preference{/DEL}


	
- ProductVariant
	
- Marketing Offer
	
- FinancingPackage


	
- FinancingScheme
	
- SetOfSelectedFSVariants 


	
- SetOfProductOffers (also output, see below)


// Offer Duplicity
Check duplicity of ProductOfferFinancialParameters with an already existing offer in SetOfProductOffers according to rule Offer duplicity. 
If duplicate then algorithm ends. 

// Creating of Product Offer
Create ProductOffer based on LoanPreferences and ProductOfferFinancialParameters including reference to
- ProductVariant 
- Marketing Offer if it is defined in LoanPreferences
- FinancingPackage
- FinancingScheme
- SetOfSelectedFSVariants 
{DEL PCG-707}Set ProductOffer.Preference = Preference{/DEL}
Add the ProductOffer to SetOfProductOffers.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}Evaluation of Product Offers]]
- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]

## 📊 Appears In (1 diagrams)

- Custom: Evaluation of Products based on Financing Scheme
