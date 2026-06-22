---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v2.0"
domain: "Analysis Model"
element_id: 1719168
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Insurance

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v2.0

## 🔗 Connections (3)

- ← Aggregation: [[InsuranceCommodity]]
- → Generalization: [[LoanService_v2]]
- ← Aggregation: [[InsuranceCustomData]]

## 📊 Appears In (1 diagrams)

- Logical: Contract Insurance Services - GET: Contract list Insurances

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
