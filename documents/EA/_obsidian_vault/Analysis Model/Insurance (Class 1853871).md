---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0"
domain: "Analysis Model"
element_id: 1853871
diagrams: 5
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Insurance

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v1.0

## 🔗 Connections (3)

- → Generalization: [[LoanService (Class 1768073)]]
- ← Aggregation: [[InsuranceCommodity (Class 1853876)]]
- ← Aggregation: [[InsuranceCustomData (Class 1853881)]]

## 📊 Appears In (5 diagrams)

- Logical: Contract Insurance Services - GET: Contract list Insurances
- Logical: Contract Insurance Services - POST: Contract Insurance Service
- Logical: Contract Insurance Services - PUT: Contract Insurance Service Cancel
- Logical: Contract Insurance Services - PUT: Contract Insurance Service Terminate
- Logical: Contract Services - GET contract services

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
