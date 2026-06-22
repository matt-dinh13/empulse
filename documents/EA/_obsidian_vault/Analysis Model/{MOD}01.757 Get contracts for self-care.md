---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights"
domain: "Analysis Model"
element_id: 1869801
diagrams: 10
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.757 Get contracts for self-care

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Access Rights

## 📝 Notes

Use case provides list of contracts for self-care purposes

...openapi/v10.0/customers/{cuid}/contracts/{contractNumber}
e.g.: https://bsl.in00c1.in.infra/bsl/openapi/v9.0/customers/10132756/contracts/4000000028

...openapi/v10.0/contracts/
e.g.: https://bsl.in00c1.in.infra/bsl/openapi/v9.0/customers/10132756/contracts/
e.g.: https://bsl.in00c1.in.infra/bsl/openapi/v9.0/customers/10132756/contracts/?contractStatuses=A,N,K

...openapi/v10.0/contracts/{contractNumber}
e.g.: https://bsl.in00c1.in.infra/bsl/openapi/v9.0/contracts/4000000028
e.g.: https://bsl.in00c1.in.infra/bsl/openapi/v9.0/contracts/4000000028?contractStatuses=A,N,K

## 🔗 Connections (7)

- ← InformationFlow: [[REQ#1 - Extension of REST API Contract Services (getContracts) by new attribute presentedInterestRat]]
- ← Dependency: [[contract]]
- ← Dependency: [[(MOD)contracts]]
- → Dependency: [[Get Business Events list]]
- → Dependency: [[Supported contract statuses for self-care]]
- → Realisation: [[01.757 Get contracts for self-care]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (10 diagrams)

- Custom: Access Rights
- Custom: Business Rules
- Custom: CBL-5169 (CLM-1837) Add PIR parameter to getContracts Rest API
- Logical: Contract
- Logical: Contract
- Logical: Contracts/Contract
- Logical: Contracts/Contract
- Logical: Contracts/Contract
- Logical: Contracts/Contract
- Use Case: Customer Self-Care API - Use Case Model
