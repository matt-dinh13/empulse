---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules"
domain: "Analysis Model"
element_id: 1755904
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Access control to remote application

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules

## 📝 Notes

Salesroom where the application was created is get according to the rule Get salesroom by operation

Entry condition A: Application is created remotely
Entry condition B: Salesroom_code from business event 'SIGN'= currently logged salesroom
Entry condition C: Salesroom from Business event 'CREATE_CONTRACT' = currently logged salesroom

If A=True AND (B=True OR C= True) then the contract is accessible

## 🔗 Connections (1)

- ← Dependency: [[Access control to contract search results]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
