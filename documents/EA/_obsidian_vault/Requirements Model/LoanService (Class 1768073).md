---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument"
domain: "Requirements Model"
element_id: 1768073
diagrams: 7
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 LoanService

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8652 (CLM-2697) Enhancement API ContractDocument

## 📝 Notes

Contract Service structure

## 🔗 Connections (8)

- → Aggregation: [[GetContractServicesResponse]]
- → Dependency: [[Document (Class 1833149)]]
- → Aggregation: [[Contract (Class 1768075)]]
- ← Generalization: [[CoolingOffPeriod]]
- ← Generalization: [[GiftPayment]]
- ← Generalization: [[GracePeriod]]
- ← Usage: [[Contract Insurance Services (Interface 1853845)]]
- ← Generalization: [[Insurance (Class 1853871)]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: REQ #5 - Update Contract Insurance Services WS to use UUID instead of DOCUMENT_REF
- Logical: Contract Insurance Services - GET: Contract list Insurances
- Logical: Contract Insurance Services - POST: Contract Insurance Service
- Logical: Contract Insurance Services - PUT: Contract Insurance Service Cancel
- Logical: Contract Insurance Services - PUT: Contract Insurance Service Terminate
- Logical: Contract Services - GET contract services

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceId | string |  |
| serviceType | string |  |
| serviceName | string |  |
| serviceDescription | string |  |
| serviceConditionsStatus | string |  |
| validFrom | date |  |
| validTo | date |  |
| serviceCode | string |  |
| serviceConditionsDescription | string |  |
| relatedDocuments | Document |  |
