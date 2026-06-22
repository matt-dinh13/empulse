---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589679
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Permanent address

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: Permanent address (address of registration)?
- Localization Code: MSG_REL_AuthQuestion2

Answer Source
customerPersonGet.foundRole -> partyRole.postalAddress where classification = 'PERMANENT' -- only official address is got (officialOnly = TRUE)

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
