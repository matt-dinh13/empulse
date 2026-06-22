---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3_proposal"
domain: "Analysis Model"
element_id: 1768055
diagrams: 9
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 LoanService_v3

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CSI OpenAPI/Contract Insurance Services/v3_proposal

## 📝 Notes

Contract Service structure

## 🔗 Connections (10)

- ← Usage: [[Contract (Class 1719169)]]
- ← Usage: [[GetContractServicesResponse_v8]]
- ← Generalization: [[CoolingOffPeriod]]
- ← Generalization: [[GiftPayment]]
- ← Generalization: [[GracePeriod]]
- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- ← Generalization: [[Insurance_v3]]

## 📊 Appears In (9 diagrams)

- Logical: Contract Insurance Service: GET Contract Insurance Service
- Logical: Contract Insurance Services - GET: Contract list Insurances v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service Cancel v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service Reactivate v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service Terminate v3
- Logical: Contract Insurance Services - POST: Contract Insurance Service v3
- Logical: Contract Insurance Services - POST: Create Contract Insurance Service v3_proposal
- Logical: Contract Services - GET contract services v8
- Logical: CSI-1882 Update of the Add Insurance Service method for new Service Catalogue

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| loanServiceId | string |  |
| serviceCode | string |  |
| serviceVersion | string |  |
| serviceExternalId | string |  |
| serviceType | string |  |
| serviceName | string |  |
| serviceDescription | string |  |
| serviceConditionsStatus | string |  |
| serviceConditionsDescription | string |  |
| validFrom | date |  |
| validTo | date |  |
| relatedDocuments | Document |  |
| status | string |  |
