---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme"
domain: "Modules"
element_id: 1778241
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Filter Financing Scheme Variants

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme

## 📝 Notes

// Filtering of Financing Schemes according to properties of particular transaction

Inputs:

	
- FinancingPackage


	
- TransactionProperties:
- ValidityDate (mandatory)
- TransactionAmount
- PricingCategory
{ADD PCG-707}
- MaxTerm

Outputs:

	
- SetOfFinancingSchemeVariants

{/ADD}

InitialSet = set of FinancingPackage.FinancingPackageItem.FinancingScheme

For each FinancingScheme from InitialSet check following rules:

Preference = FinancingScheme.FinancingPackageItem.Preference

// Validity

	
- If FinancingScheme.ValidFrom is defined then FinancingScheme.ValidFrom <= TransactionProperties.ValidityDate


	
- If FinancingScheme.ValidTo is not defined then FinancingScheme.ValidTo >= TransactionProperties.ValidityDate

// Transaction Amount

	
- If FinancingScheme.TransactionAmountFrom is defined then FinancingScheme.TransactionAmountFrom <= TransactionProperties.TransactionAmount


	
- If FinancingScheme.TransactionAmountTo is not defined then FinancingScheme.TransactionAmountTo >= TransactionProperties.TransactionAmount


For each FinancingSchemeVariant from FinancingScheme check following rules:
// Pricing Category
Criterion = FinancingSchemeVariant.Financing Scheme Variant Criterion

	
- If TransactionProperties.PricingCategory is defined then
- If exists Criterion where Criterion.Type = MINIMAL_PRICING_CATEGORY then TransactionProperties.PricingCategory >= Criterion.Value
- If exists Criterion where Criterion.Type = MAXIMAL_PRICING_CATEGORY then TransactionProperties.PricingCategory <= Criterion.Value
	
- {ADD PCG-707}
If TransactionProperties.MaxTerm is defined then TransactionProperties.MaxTerm >= FinancingSchemeVariant.Term
{/ADD}
	
- If TransactionProperties.MinTerm is defined then TransactionProperties.MinTerm <= FinancingSchemeVariant.Term
	
- {ADD PCG-3405}FinancingSchemeVariant.AIR is filled{/ADD}


If all conditions satisfied {DEL PCG-707}and FinancingSchemeVariant is not yet in SetOfFinancingSchemeVariants{/DEL} then add the FinancingSchemeVariant to SetOfFinancingSchemeVariants including 
- reference to FinancingPackage and FinancingScheme
- {ADD PCG-707}FinancingPackage.FinancingPackageItem.Preference {/ADD}

Continue with the next FinancingSchemeVariant.

Continue with the next FinancingScheme.

Return SetOfFinancingSchemeVariants.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}Evaluation of Product Offers]]
- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]

## 📊 Appears In (1 diagrams)

- Custom: Evaluation of Products based on Financing Scheme
