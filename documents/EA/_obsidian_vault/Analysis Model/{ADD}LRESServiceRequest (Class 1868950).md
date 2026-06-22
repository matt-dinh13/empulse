---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests"
domain: "Analysis Model"
element_id: 1868950
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}LRESServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests

## 📝 Notes

{ADD CSI-286 /}
For LRES service only

## 🔗 Connections (1)

- → Generalization: [[LoanServiceRequest (Class 1868957)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| firstDueDateRestructured | datetime |  |
| preferredMonthlyInstallment | int |  |
| keepInstallmentAmount | bool |  |
| restructuringStartDate | datetime |  |
| totalAmountRestructured | money |  |
