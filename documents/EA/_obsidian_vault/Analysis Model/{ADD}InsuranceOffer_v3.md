---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3_proposal"
domain: "Analysis Model"
element_id: 1772482
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}InsuranceOffer_v3

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3_proposal

## 📝 Notes

{ADD CSI-2738 /}
A structure of the insurance offer; used for adding insurance to signed/active CEL loan

## 🔗 Connections (2)

- ← Usage: [[Insurance_v3]]
- ← Usage: [[CreateContractInsurance_v3]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Insurance Service: GET Contract Insurance Service
- Logical: Contract Insurance Services - POST: Contract Insurance Service v3
- Logical: Contract Insurance Services - POST: Create Contract Insurance Service v3_proposal

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| premiumTariffItemCode | string |  |
| insurancePremiumAmount | money |  |
| currentMonthlyInstallment | money |  |
| futureMonthlyInstallment | money |  |
| sumInsured | money |  |
| firstDueDateInsurance | date |  |
| remainingInstallmentsCount | int |  |
