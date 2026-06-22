---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID"
domain: "Analysis Model"
element_id: 1538369
diagrams: 1
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 PaymentChannelType validation rule - ID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/ID

## 📝 Notes

- accountNumber - 6-30 digits, Account number validation


	
- holderName - Allowed character set (Account holder name - ID), Length <= 100

## 🔗 Connections (6)

- → Dependency: [[Allowed character set (Account holder name - ID)]]
- → Dependency: [[Length _= 100]]
- → Dependency: [[6-30 digits]]
- → Dependency: [[Account number validation]]
- → Dependency: [[Latin alphabet character set]]
- ← Dependency: [[{MOD}Application validation rule-ID]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules - ID
