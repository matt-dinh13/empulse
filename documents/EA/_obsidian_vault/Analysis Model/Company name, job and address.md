---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589683
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Company name, job and address

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: Company name and job title, the address of place of work?
- Localization Code: MSG_REL_AuthQuestion4

Answer Source
customerPersonGetResponse.foundRole -> partyRole -> customerPersonRelationship.employmentInfo -> emplymentInfo.employerName + profession + postalAddress

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
