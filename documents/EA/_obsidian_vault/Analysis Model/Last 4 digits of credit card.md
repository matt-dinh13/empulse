---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589682
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Last 4 digits of credit card

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: What are the last 4 digits of your card number?
- Localization Code: MSG_REL_AuthQuestion11

Answer Source
The last 4 card digits in CardDto.truncatedPan are obtained by calling CardManagementWS.GetCard.

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
