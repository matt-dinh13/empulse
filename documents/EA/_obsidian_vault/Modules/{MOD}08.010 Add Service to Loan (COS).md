---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Access Rights"
domain: "Modules"
element_id: 1872533
diagrams: 4
connections: 11
tags:
  - usecase
  - modules
---

# 🎯 {MOD}08.010 Add Service to Loan (COS)

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Analytical Model/Access Rights

## 📝 Notes

This use case presents a method for adding a Service (defined in the Service Catalogue) including VAS to a Loan (Contract, Account)

## 🔗 Connections (10)

- ← UseCase: [[External System (Actor 1835754)]]
- ← Dependency: [[ContractServices (Interface 1835824)]]
- → Dependency: [[Get Service definition from New Service Catalogue (COS)]]
- → Dependency: [[Get Service definition from New Service Catalogue (COS)]]
- → Dependency: [[Get Service definition from Services (COS)]]
- → Dependency: [[{ADD}Check Account status by account number in AM (COS)]]
- → Dependency: [[{ADD}Create Loan Service Request with Service Operation Status (COS)]]
- → Dependency: [[Insurance Service setting mapping (COS)]]
- → Association: [[VAS Deal (Actor 1835756)]]
- → Realisation: [[08.010 Add Service to Loan (COS)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CBL-26584 (CSI-3772) Flexible loyalty value proposition for credit card holders
- Logical: Adding Loan Service to Contract method (COS)
- Use Case: Adding Service to Contract - Use Case Model
