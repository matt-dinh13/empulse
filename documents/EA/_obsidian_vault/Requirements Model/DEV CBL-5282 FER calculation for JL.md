---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1982 (CBL-5282) FER calculation for JL"
domain: "Requirements Model"
element_id: 1405771
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 DEV CBL-5282 FER calculation for JL

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1982 (CBL-5282) FER calculation for JL

## 📝 Notes

Current options of tariff item settings already allow calculation of tariff item amount as a percentage from outstanding principal. In order to fulfill the requirement we need to implement a logic to decide whether a tariff item is charged within the first 6 months of a contract. This can be done by a new tariff item limit number base type.

PCG will add a new Base Type for Base Type Usage = 'TILN' (Tariff Item Limit Number): Installment number (defined as maximal installment number of standard installment with due date <= fee date) and extend AbstractTariffItemAlgorithm.calculateLimitNumberComparedValue method.

We will implement a method for calculation of Installment number in TariffItemForContractAlgorithm.

Fee date = date to which a fee is being charged.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1982 (CBL-5282) FER calculation for JL (Requirement 1405770)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1982 (CBL-5282) FER calculation for JL
