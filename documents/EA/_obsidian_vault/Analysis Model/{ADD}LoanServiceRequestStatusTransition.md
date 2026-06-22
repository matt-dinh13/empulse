---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Loan Service Requests"
domain: "Analysis Model"
element_id: 1611048
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}LoanServiceRequestStatusTransition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests/Loan Service Requests

## 📝 Notes

{ADD CSI-727 /}
A record of LoanServiceRequest status changes

## 🔗 Connections (1)

- ← Usage: [[{ADD}LoanServiceRequest]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Service Requests - Document acceptation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | string |  |
| changedBy | string |  |
| changeDate | dateTime |  |
| reason | string |  |
