---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract LRES Service Requests"
domain: "Analysis Model"
element_id: 1561114
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}LRESLoanServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract LRES Service Requests

## 📝 Notes

{ADD CLM-3060 /}
A detail of LRES LSR and offers for GET of LRESServiceRequest

## 🔗 Connections (2)

- ← Dependency: [[{ADD}LRESServiceRequestOffers]]
- → Dependency: [[{ADD}LRESOffer]]

## 📊 Appears In (1 diagrams)

- Logical: Contract LRES Service Requests - get offer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanServiceRequestId | string |  |
| firstDueDateRestructured | date |  |
| restructuringStartDate | date |  |
| totalAmountRestructured | money |  |
| offers | LRESOffer |  |
| status | string |  |
| supplementStatus | string |  |
| supplementReason | string |  |
| preferredMonthlyInstallment | money |  |
