---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract LRES Service Requests"
domain: "Analysis Model"
element_id: 1561106
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}LRESOffer

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Contract LRES Service Requests

## 📝 Notes

{ADD CLM-3060 /}
A detail of LRES offer for GET of LRESServiceRequest

## 🔗 Connections (1)

- ← Dependency: [[{ADD}LRESLoanServiceRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Contract LRES Service Requests - get offer

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerId | string |  |
| annuity | money |  |
| term | int |  |
| totalMonthlyPayment | money |  |
| chosen | bool |  |
| interestRate | double |  |
| presentedInterestRate | double |  |
