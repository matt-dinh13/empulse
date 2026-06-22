---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0"
domain: "Analysis Model"
element_id: 1853875
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractDataChanged

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0

## 📝 Notes

Contract attributes presenting changes in case of contract insurance cancellation/termination

## 🔗 Connections (2)

- ← Usage: [[ContractInsuranceTerminatePreview]]
- ← Usage: [[ContractInsuranceCancelPreview]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Insurance Change Requests - GET: ContractInsuranceCancelPreview
- Logical: Contract Insurance Change Requests - GET: ContractInsuranceTerminatePreview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| currentMonthlyInstallmentAmount | MoneyType |  |
| contractNumber | string |  |
| futureMonthlyInstallmentAmount | MoneyType |  |
