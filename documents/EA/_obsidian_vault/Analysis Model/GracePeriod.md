---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Services"
domain: "Analysis Model"
element_id: 1768071
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GracePeriod

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Services

## 📝 Notes

GRPER service specific parameters

## 🔗 Connections (2)

- → Generalization: [[LoanService (Class 1768073)]]
- → Generalization: [[LoanService_v3]]

## 📊 Appears In (2 diagrams)

- Logical: Contract Services - GET contract services
- Logical: Contract Services - GET contract services v8

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Length | int |  |
| Moratorium | int |  |
| Premium interest rate | percent |  |
| gracePeriodEnd | date |  |
| graceAmountToPay | Money |  |
| graceRepaymentDate | date |  |
