---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model"
domain: "Analysis Model"
element_id: 1878557
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Generate outgoing payment code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/Use Case Model

## 📝 Notes

System generates a unique textual code for each outgoing payment. There is no special requirement to format or contents of the code. It will be used internaly and for inter-systems communication to identify and reference payments.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Generate outgoing payment for contract]]
- ← Dependency: [[Generate participated payment]]
- ← Dependency: [[{MOD}05.091 Generate outgoing payment - insurance]]

## 📊 Appears In (1 diagrams)

- Use Case: Generate and Cancel outgoing payments
