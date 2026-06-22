---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589684
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Mobile phone number

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: What is client’s mobile phone number (registered when creating contract)?
- Localization Code: MSG_REL_AuthQuestion10

Answer Source
customerPersonGetResponse.foundRole -> partyRole -> phoneNumber.number where abstractContact.classification = 'PRIMARY_MOBILE'

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
