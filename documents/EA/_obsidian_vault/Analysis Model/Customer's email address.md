---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions"
domain: "Analysis Model"
element_id: 1589687
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Customer's email address

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/Business rules/Authentication questions

## 📝 Notes

Question
- Text: What is your email address?
- Localization Code: MSG_REL_AuthQuestion13

Answer Source
Value of {ADD CLM-2727}customerPerson{/ADD}{DEL CLM-2727}abstractContact{/DEL}.emailAddress is obtained by calling {ADD CLM-2727}if GP CallCifRestApi = false then{/ADD} PartyWS.customerPersonGet {ADD CLM-2727}else Customer Data.GetCustomerDataRequest{/ADD}, which is already called within the use case 12.533 Client authentication. The type of contact is PRIMARY_EMAIL.

## 🔗 Connections (1)

- → Generalization: [[Authentication questions (Requirement 1589890)]]

## 📊 Appears In (3 diagrams)

- Custom: Authentication questions
- Custom: CLM Overview
- Custom: Overview
