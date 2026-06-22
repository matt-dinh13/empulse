---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3_proposal"
domain: "Analysis Model"
element_id: 1853862
diagrams: 8
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Insurance_v3

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3_proposal

## 📝 Notes

Loan Service extension of the Insurance data

## 🔗 Connections (4)

- → Generalization: [[LoanService_v3]]
- → Usage: [[InsuranceCustomData]]
- → Usage: [[{ADD}InsuranceOffer_v3]]
- → Usage: [[InsuranceCommodity_v3]]

## 📊 Appears In (8 diagrams)

- Logical: Contract Insurance Service: GET Contract Insurance Service
- Logical: Contract Insurance Services - GET: Contract list Insurances v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service Cancel v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service Reactivate v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service Terminate v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service v3
- Logical: Contract Insurance Services - POST: Create Contract Insurance Service v3_proposal
- Logical: Contract Services - GET contract services v8

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| insuranceStatus | string |  |
| insuranceContract | string |  |
| insuredFrom | date |  |
| insuredTo | date |  |
| sumInsured | money |  |
| premium | money |  |
| signatureDate | dateTime |  |
| automaticProlongation | boolean |  |
| commodities | InsuranceCommodity_v3 |  |
| customData | InsuranceCustomData |  |
| {ADD}offer | {ADD}InsuranceOffer_v3 |  |
