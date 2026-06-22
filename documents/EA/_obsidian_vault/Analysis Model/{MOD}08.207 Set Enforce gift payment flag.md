---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/User Interface Model"
domain: "Analysis Model"
element_id: 1869009
diagrams: 6
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.207 Set Enforce gift payment flag

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Gift Payment/User Interface Model

## 📝 Notes

This use case shows current status of Enforce gift payment flag for selected service and allows to modify it.

Frequency of usage:
A few requests a day created by back-office operators

Actor:
Authorized user

## 🔗 Connections (4)

- ← InformationFlow: [[OK (GUIElement 1397361)]]
- ← Dependency: [[Services]]
- → InformationFlow: [[Enforce Gift Payment]]
- → Realisation: [[{ADD}08.207 Set Enforce gift payment flag]]

## 📊 Appears In (6 diagrams)

- Custom: {ADD}Gift Payment
- Custom: Access Rights
- Custom: CBL-1902 (CLM-969) Enforce gift payment without fulfilled eligibility criteria
- Custom: CBL-6572 (CLM-2126) Disable gift payment and grace period when PER is executed
- Custom: Tab-Services
- Use Case: Status of Gift payment
