---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589686
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Date of card contract signing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: On which date have you signed your card contract?
- Localization Code: MSG_REL_AuthQuestion12

Answer Source
Obtain Contract Status Transition.CreationDate where
Status = N (Signed) and Cotract = processed contract. Take the first status transition.

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
