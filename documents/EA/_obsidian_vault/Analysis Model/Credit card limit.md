---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589677
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Credit card limit

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: What is credit limit of client’s card?
- Localization Code: MSG_REL_AuthQuestion9

Answer Source
- value from GetAccountResponse.accountDto.creditLimit taken by calling AccountManagementWS.GetAccountBalance (Cabus API)

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (1 diagrams)

- Custom: Authentication questions
