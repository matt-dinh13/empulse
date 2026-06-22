---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules"
domain: "Analysis Model"
element_id: 1878871
diagrams: 4
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Tariff Item amount for period from debt

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules

## 📝 Notes

Input:
- tariffItem
- contract
- periodStartDate
- periodEndDate
- tariffItemTypeCode (optional)
- futurePercentageBase (optional); if no value is provided, it is set to 0 (used by Debt calculator)
Output:
- tariffItemAmount

Steps:

Initial value of totalAmount is zero.
For each date from interval <periodStartDate, periodEndDate> system:

	
- Evaluates referenceDateTime as date at 23:59:59.
	
- Finds in Debt Catalogue (history inclusive) a record for contract with the highest ValidFrom where ValidFrom <= referenceDateTime and (validTo > referenceDateTime or empty).
	
- System calculates percentageBase using {ADD} Calculate base per day business rule
	
- Adds percentageBase to totalBase  and continues with next date
	
- Calculates totalAmount according to algorithm {MOD CBL-15418 IS-1537} {ADD} Calculate tariff item amount {/MOD} with parameters

- tariffItem
- contract
- totalBase
- rounding = True

	
- System returns totalAmount.

## 🔗 Connections (6)

- ← Dependency: [[{MOD}04.140 Charge fees]]
- → Dependency: [[Calculate base per day]]
- → Dependency: [[{ADD} Calculate tariff item amount]]
- ← Dependency: [[{ADD} Calculate fees and penalties]]
- → Dependency: [[Calculate Base for Sanction Interest]]
- ← Dependency: [[01.478 Show supposed debt for CEL contract (UseCase 1876077)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Use Case: Debt calculator
- Use Case: Fee services used by external system (Collection)
- Use Case: OVERVIEW - Installment Schedule
