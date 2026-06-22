---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN"
domain: "Analysis Model"
element_id: 1819516
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 PaymentChannel validation rule-IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules/IN

## 📝 Notes

- accountNumber - Length <= 20


	
- holderName - Length <= 50

## 🔗 Connections (3)

- → Dependency: [[Length _= 50]]
- → Dependency: [[Length _= 20 (Requirement 1789741)]]
- ← Dependency: [[{MOD}Application validation rule - IN]]

## 📊 Appears In (1 diagrams)

- Custom: Validation rules - IN
