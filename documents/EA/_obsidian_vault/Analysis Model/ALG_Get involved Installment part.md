---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case"
domain: "Analysis Model"
element_id: 1851707
diagrams: 6
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 ALG_Get involved Installment part

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Grace period/Use Case

## 📝 Notes

This rule determines which Installment_Parts (and their related Tariff_Item_Types) will be involved into calculation used for some type of manipulation with the Installment Schedule (Recalculation reason) (e.g. Early repayment, Pay off contract, etc.).
The rules are set in the Installment_Included_In_Operation entity. Valid setting is determined as follow:

	
- find Product related to the given Contract
	
- find the product's Terms_And_Conditions valid in the moment of contract creating (Contract.Date_Created)
	
- find all Installment_Parts which are allowed for appropriate operation (defined by Installment_Included_In_Operation) by the Terms_And_Conditions. Only the active Terms_And_Conditions entity is searched.

Notice: All Installment_Parts (and their related Tariff_Item_Types), which should be involved into calculation, must be set in the Installment_Included_In_Operation entity.
Setting is possible by data manipulation only (No user interface is enabled.)

## 🔗 Connections (4)

- ← Dependency: [[03.150 Regenerate terminated installment schedule (UseCase 1838778)]]
- ← Dependency: [[{MOD}03.120 Pay off installment schedule]]
- ← Dependency: [[{MOD}08.222 Calculate Grace period amount]]
- ← Dependency: [[{MOD}03.070 Calculate early repayment amount]]

## 📊 Appears In (6 diagrams)

- Use Case: Calculation of early repayment amount under Grace period
- Use Case: Common for Early repayment Request and Processing 
- Use Case: OVERVIEW - Installment Schedule
- Use Case: Pay off instalment schedule
- Use Case: Pay off instalment schedule
- Use Case: Write-off CEL contract
