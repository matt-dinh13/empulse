---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589690
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Work phone number

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: Work phone number?
- Localization Code: MSG_REL_AuthQuestion6

Answer Source
customerPersonGetResponse.foundRole -> partyRole -> customerPersonRelationship.employmentInfo -> employmentInfo.phoneNumber.number

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
