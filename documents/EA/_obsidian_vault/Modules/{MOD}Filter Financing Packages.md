---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme"
domain: "Modules"
element_id: 1778238
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Filter Financing Packages

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme

## 📝 Notes

// Filtering of Financing Packages according to properties of particular transaction

Inputs:

	
- InitialSet - set of Financing Packages to be filtered


	
- TransactionProperties:
- ValidityDate (mandatory)
- Purpose (mandatory)
- TransactionDate
- TransactionType
- Merchant
- set of Commodity.(CommodityType, Price, Model, Manufacturer)
{ADD PCG-4278}Segment{/ADD}


Outputs:

	
- ResultSet - filtered set of Financing Packages


Initialize (clear) ResultSet.

For each FinancingPackage from InitialSet check following rules:

// Validity

	
- If FinancingPackage.ValidFrom is defined then FinancingPackage.ValidFrom <= TransactionProperties.ValidityDate


	
- If FinancingPackage.ValidTo is not defined then FinancingPackage.ValidTo >= TransactionProperties.ValidityDate


// -- Criterions
Check set of Criterion from FinancingPackage.Financing Package Criterion as follows: 
// Purpose

	
- Exists Criterion where Criterion.Type = PURPOSE and Criterion.Value = TransactionProperties.Purpose

// Transaction Date

	
- If TransactionProperties.TransactionDate is defined then
- If exists Criterion where Criterion.Type = MINIMAL_TRANSACTION_DATE then TransactionProperties.TransactionDate >= Criterion.Value
- If exists Criterion where Criterion.Type = MAXIMAL_TRANSACTION_DATE then TransactionProperties.TransactionDate <= Criterion.Value

// Transaction Type

	
- If TransactionProperties.TransactionType is defined then
- Either does not exist Criterion where Criterion.Type = TRANSACTION_TYPE
- Or exists Criterion where Criterion.Type = TRANSACTION_TYPE and Criterion.Value = TransactionProperties.TransactionType

// Merchant

	
- If TransactionProperties.Merchant is defined then
- Either does not exist Criterion where Criterion.Type = MERCHANT
- Or exists Criterion where Criterion.Type = MERCHANT and Criterion.Value = TransactionProperties.Merchant

// Commodities
If at least one TransactionProperties.Commodity is defined on input then:
// Commodity Type

	
- Find the MostExpensiveCommodityType with highest price from the set TransactionProperties.Commodity (prices of commodities of the same types are summarized) and check:
- Either does not exist Criterion where Criterion.Type = COMMODITY_TYPE 
   Or exists Criterion where Criterion.Type = COMMODITY_TYPE and Criterion.Value = MostExpensiveCommodityType.

// Commodity Model

	
- If TransactionProperties.Commodity.Model is not defined for all commodities:
- Does not exist Criterion where Criterion.Type = COMMODITY_MODEL.
	
- Check each TransactionProperties.Commodity where Commodity.Model is defined:
- Exist Criterion where Criterion.Type = COMMODITY_TYPE and Criterion.Value = Commodity.CommodityType
AND
- Either does not exist Criterion where Criterion.Type = COMMODITY_MODEL 
   Or exists Criterion where Criterion.Type = COMMODITY_MODEL and Criterion.Value = TransactionProperties.Commodity.Model (case insensitive)

// Commodity Manufacturer

	
- If TransactionProperties.Commodity.Manufacturer is not defined for all commodities:
- Does not exist Criterion where Criterion.Type = COMMODITY_MANUFACTURER.
	
- Check each TransactionProperties.Commodity where Commodity.Manufacturer is defined:
- Either does not exist Criterion where Criterion.Type = COMMODITY_MANUFACTURER 
   Or exists Criterion where Criterion.Type = COMMODITY_MANUFACTURER and Criterion.Value = TransactionProperties.Commodity.Manufacturer

{ADD PCG-4278}
// Segment

	
- Exists Criterion where Criterion.Type = SEGMENT and Criterion.Value = TransactionProperties.Segment 

{/ADD}
// -- End of Criterions checking

If all conditions satisfied then add the FinancingPackage to ResultSet.

Continue with the next FinancingPackage.

Return ResultSet

## 🔗 Connections (2)

- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]
- ← Dependency: [[{DEL}Evaluation of Product Offers]]

## 📊 Appears In (1 diagrams)

- Custom: Evaluation of Products based on Financing Scheme
