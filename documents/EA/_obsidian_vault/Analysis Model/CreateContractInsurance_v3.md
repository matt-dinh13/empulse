---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3"
domain: "Analysis Model"
element_id: 1853859
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreateContractInsurance_v3

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3

## 📝 Notes

POST parameters for creation of an insurance service on defined contract

## 🔗 Connections (3)

- ← Usage: [[Contract Insurance Services (Interface 1853845)]]
- → Usage: [[{ADD}InsuranceOffer_v3]]
- → Usage: [[InsuranceService_v3]]

## 📊 Appears In (3 diagrams)

- Logical: Contract Insurance Services - POST: Contract Insurance Service v3
- Logical: Contract Insurance Services - POST: Create Contract Insurance Service v3_proposal
- Logical: CSI-1882 Update of the Add Insurance Service method for new Service Catalogue

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| customerId | string |  |
| contractNumber | string |  |
| insuranceService | InsuranceService_v3 |  |
| insuredCommodity | string |  |
| activateInsuranceYN | boolean |  |
| notice | string |  |
| transactionSupplementId | string |  |
| {ADD}insuranceOffer | {ADD}InsuranceOffer_v3 |  |
