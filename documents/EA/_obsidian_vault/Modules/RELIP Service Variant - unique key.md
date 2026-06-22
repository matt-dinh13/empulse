---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1275558
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 RELIP Service Variant - unique key

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

// For each combination of Transaction Type, Transaction Amount and Transaction date no more than one setting can be defined

Lets have two RELIP Service Variants with the same Transaction Type:

Variant A
TransactionAmountMinA, TransactionAmountMaxA, i.e. AmountIntervalA
TransactionDateMinA, TransactionDateMaxA, i.e. DateIntervalA

Variant B
TransactionAmountMinB, TransactionAmountMaxB, i.e. AmountIntervalB
TransactionDateMinB, TransactionDateMaxB, i.e. DateIntervalB

Upper limits are not included in intervals. Any of limits can be missing then interval is left or/and right opened.

Following conditions must be satisfied:
- If AmountIntervalA has intersection with AmountIntervalB then intervals DateIntervalA and DateIntervalB have no intersection.
- If DateIntervalA has intersection with DateIntervalB then interval AmountIntervalA and AmountIntervalB have no intersection.

## 🔗 Connections (1)

- ← Dependency: [[RELIP Service Variant - validation rules]]

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP Service Variant
