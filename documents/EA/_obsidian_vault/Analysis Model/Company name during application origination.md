---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589685
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Company name during application origination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: Company name where client was employed when contract was created?
- Localization Code: MSG_REL_AuthQuestion14

Answer Source
Get employer name via: Contract -> Deal -> Client Snapshot -> Employment -> Employer.Name

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
