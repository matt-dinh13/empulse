---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Loan Service Requests"
domain: "Analysis Model"
element_id: 1611053
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}LoanServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Loan Service Requests

## 📝 Notes

{ADD CSI-727/}
The Loan Service Request object

## 🔗 Connections (4)

- ← Generalization: [[PayholServiceRequest]]
- → Usage: [[{ADD}LoanServiceRequestStatusTransition]]
- ← Dependency: [[{ADD}LoanServiceRequests]]
- → Dependency: [[{ADD}RequestDocument]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests - Document acceptation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| requestType | string |  |
| currentStatus | string |  |
| expirationDate | datetime |  |
| loanServiceRequestId | string |  |
| statusLog | {ADD}LoanServiceRequestStatusTransition |  |
| serviceOperationStatus | string |  |
| documents | {ADD}RequestDocument |  |
| supplementStatus | string |  |
| contractSeviceId | string |  |
