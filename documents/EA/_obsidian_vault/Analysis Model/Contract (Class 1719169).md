---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3_proposal"
domain: "Analysis Model"
element_id: 1719169
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3_proposal

## 🔗 Connections (4)

- → Aggregation: [[GetContractListInsurancesResponse_v2]]
- → Usage: [[LoanService_v3]]
- ← Aggregation: [[LoanService_v2]]
- ← Usage: [[GetContractListInsurancesResponse_v3]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Insurance Service: GET Contract Insurance Service
- Logical: Contract Insurance Services - GET: Contract list Insurances
- Logical: Contract Insurance Services - GET: Contract list Insurances v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| loanServices | LoanService_v3 |  |
