---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Contract status transition equest management/Business Rules"
domain: "Analysis Model"
element_id: 1692088
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Create contract status transition request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Contract status transition equest management/Business Rules

## 📝 Notes

{ADD CLM-4771}
Input parameters: 
- type
- reasonCode

System creates a record into CST_REQUEST for given contract with the following parameters:
- requestedDate = current date
- type = type
- status = SENT
- reasonCode = reasonCode

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
