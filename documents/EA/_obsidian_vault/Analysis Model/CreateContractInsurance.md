---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0"
domain: "Analysis Model"
element_id: 1853873
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CreateContractInsurance

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0

## 📝 Notes

{ADD CLM-1770 /}
POST parameters for creation of an insurance on defined contract

## 🔗 Connections (2)

- ← Usage: [[Contract Insurance Services (Interface 1853845)]]
- → Usage: [[InsuranceService (Class 1766725)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Insurance Services - POST: Contract Insurance Service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| customerId | string |  |
| contractNumber | string |  |
| insuranceService | InsuranceService |  |
| insuredCommodity | string |  |
| activateInsuranceYN | boolean |  |
| notice | string |  |
