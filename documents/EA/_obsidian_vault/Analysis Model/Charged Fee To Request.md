---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Logical Data Model"
domain: "Analysis Model"
element_id: 1868569
diagrams: 9
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Charged Fee To Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Logical Data Model

## 📝 Notes

Composite entity of Loan Service Request. It keeps fees which are to be charged in case the client ask for the Loan Service application (granting).
Take into account, fees for the Loan Service providing in moment of Contract origination are stored on Financial parameters of the Contract.

## 🔗 Connections (2)

- → Association: [[{MOD}Tariff Item]]
- → Aggregation: [[Loan Service Request (Class 1868549)]]

## 📊 Appears In (9 diagrams)

- Logical: CEL Rewards request
- Logical: Change due date request
- Logical: Checking Terms of Loan Service Request
- Logical: Early repayment request
- Logical: Loan consolidation - Logical Data Model
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: LSR.Insurance Offer - Logical Data Model
- Logical: Payment holiday request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | Financial Amount |  |
