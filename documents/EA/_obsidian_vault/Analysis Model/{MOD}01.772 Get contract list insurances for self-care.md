---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights"
domain: "Analysis Model"
element_id: 1869809
diagrams: 10
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.772 Get contract list insurances for self-care

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights

## 📝 Notes

Use case provides list of contract insurances for self-care purposes

...openapi/v3/contractservices/insurance
e.g.: https://bsl.id00c1.id.infra/bsl/openapi/v3/contractservices/insurance/?contractNumbers=3900004909
e.g.: https://bsl.id00c1.id.infra/bsl/api/v3/contractservices/insurance?contractNumbers=4300119217&contractNumbers=4300119258&contractStatuses=N&contractStatuses=A

## 🔗 Connections (6)

- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- ← Dependency: [[Contract Insurance Services (Interface 1853845)]]
- → Realisation: [[01.772 Get contract list insurances for self-care]]
- → Dependency: [[Supported contract statuses for self-care]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (10 diagrams)

- Custom: Access Rights
- Custom: Business Rules
- Custom: CBL-4968 (CLM-1779) Extension of Self-Care API GetContractListInsurances by Custom data attributes
- Custom: CBL-7686 (CLM-2459) Enhancement Insurance API for Mobile Apps
- Logical: CBL-1110 (CLM-935) New service to get insurance data for list of contracts
- Logical: Contract Insurance Service: GET Contract Insurance Service
- Logical: Contract Insurance Services - GET: Contract list Insurances
- Logical: Contract Insurance Services - GET: Contract list Insurances
- Logical: Contract Insurance Services - GET: Contract list Insurances v3
- Use Case: Customer Self-Care API - Use Case Model
