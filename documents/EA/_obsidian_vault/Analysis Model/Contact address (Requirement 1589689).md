---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589689
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Contact address

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: Contact address (address of residence)?
- Localization Code: MSG_REL_AuthQuestion3

Answer Source
customerPersonGet.foundRole -> partyRole.postalAddress where classification = 'CONTACT' -- only official address is got (officialOnly = TRUE)

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
