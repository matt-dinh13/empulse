---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Access Rights"
domain: "Modules"
element_id: 1872534
diagrams: 5
connections: 11
tags:
  - usecase
  - modules
---

# 🎯 {MOD}08.060 Replace Loan Service method (COS)

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Access Rights

## 📝 Notes

The use case presents a web service method for replacement of current Service (including Deal) related to a Contract by new Contract service.

## 🔗 Connections (10)

- ← Association: [[External System (Actor 1835754)]]
- ← Dependency: [[ContractServices (Interface 1835824)]]
- → Dependency: [[Get Service definition from Services (COS)]]
- → Dependency: [[Get Service definition from New Service Catalogue (COS)]]
- → Dependency: [[{ADD}Check Contract status for Contract Service cancellation and termination (COS)]]
- → Realisation: [[08.060 Replace Loan Service method (COS)]]
- → Dependency: [[{ADD}Create Loan Service Request with Service Operation Status (COS)]]
- → Dependency: [[{ADD}Check Account status by account number in AM (COS)]]
- → Dependency: [[{ADD}Get the latest Service Operation Status (COS)]]
- → Association: [[VAS Deal (Actor 1835756)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders
- Logical: Replace Contract Services method (COS)
- Use Case: CSI-2973 Replace Service on Contract
- Use Case: Replace Loan Service - Use Case Model
