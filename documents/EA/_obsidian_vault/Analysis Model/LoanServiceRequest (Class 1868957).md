---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests"
domain: "Analysis Model"
element_id: 1868957
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 LoanServiceRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Service Requests

## 📝 Notes

The Loan Service Request object

## 🔗 Connections (5)

- ← Generalization: [[EarlyRepaymentServiceRequest]]
- ← Generalization: [[{ADD}LRESServiceRequest (Class 1868950)]]
- → Aggregation: [[GetContractServiceRequestsResponse]]
- ← Generalization: [[{ADD}CHDDRServiceRequest (Class 1868945)]]
- ← Generalization: [[PayholServiceRequest (Class 1868944)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Service Requests

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceRequestType | string |  |
| serviceRequestStatus | string |  |
| creationDate | datetime |  |
| completionDate | datetime |  |
| expirationDate | datetime |  |
| loanServiceRequestId | string |  |
| serviceOperationStatus | string |  |
