---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme"
domain: "Modules"
element_id: 1762316
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Evaluate NetCredit Amount and Limit 

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme

## 📝 Notes

{ADD PCG-707/}
Inputs:

	
- Product
	
- LoanPreferences


	
- OfferParameters


Outputs:

	
- OfferParameters with NetCreditAmount, NetCreditLimit
	
- Result (Yes/No)


Calculate and save into OfferParameters:
- NetCreditAmount (NCA), according to Net credit amount definition.
- NetCreditLimit (NCL) according to Net credit limit definition. 

If a campaign (CO) is defined in LoanPreferences then check if:
- NetCreditLimit <= CO.MaximalCreditAmount
- NetCreditAmount <= CO.MaximalCreditAmount
If the validation is not successful then return Result = False and algorithm ends.

{ADD TPH-5091}
For Product.ProductType = REL check if 
Product.FinancingScheme.MinimalTransactionAmount <= NetCreditLimit
Product.FinancingScheme.MaximalTransactionAmount >= NetCreditLimit
Limits Maximal/MinimalTransactionAmount are checked only if defined on FinancingScheme.
If check fails then return no ProductOfferFinancialParameters and algorithm ends.
{/ADD}

Save calculated parameters into OfferParameters.

Return Result = True and algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]

## 📊 Appears In (1 diagrams)

- Custom: Evaluation of Products based on Financing Scheme
