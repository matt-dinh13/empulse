---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules"
domain: "Analysis Model"
element_id: 1878874
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD} Calculate fees and penalties

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules

## 📝 Notes

{ADD CBL-40 IS }Input:
- tariffItem
- contract
- periodStartDate
- periodEndDate
- tariffItemTypeCode (optional)
- futurePercentageBase (optional); if no value is provided, it is set to 0 (used by Debt calculator)
Output:
- tariffItemAmount

Steps:
{/ADD}

	
- System calculates tariffItemAmount:

If tariffItem.AnnualRateProjection = 'PID' (Period In Days) and tariffItem.PercentageBasedOn = EDB (Explicitly defined base)  
then system calls algoritmus Calculate Tariff Item amount for period from debt with parameters tariffItem, contract, penalizationStartDate, penalizationEndDate, tariffItemTypeCode, furutePercentageBase
else system calls {MOD CBL-15418 IS-1537} {ADD} Calculate tariff item amount {/MOD} with parameters tariffItem and contract.

## 🔗 Connections (4)

- ← Dependency: [[{MOD}04.140 Charge fees]]
- → Dependency: [[{ADD} Calculate tariff item amount]]
- → Dependency: [[{MOD}Algorithm_ Calculate tariff item amount]]
- → Dependency: [[Calculate Tariff Item amount for period from debt]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
