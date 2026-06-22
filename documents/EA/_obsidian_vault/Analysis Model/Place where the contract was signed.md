---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589678
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Place where the contract was signed

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: Place where the contract was signed?
- Localization Code: MSG_REL_AuthQuestion7

Answer Source
System gets salesroom where the contracts was signed. It is get according to the rule Get salesroom by operation, passed is Contract and operation = CONTRACT_SIGNED and use its attributes below.
Salesroom.Name + Salesroom -> Salesroom Address -> adress.country+zip+region+district+town+street+block+flat+floor+house where Salesroom Address.Role="BP"

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
