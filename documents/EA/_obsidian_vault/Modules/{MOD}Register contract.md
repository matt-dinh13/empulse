---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Register contract/Access Rights"
domain: "Modules"
element_id: 1879072
diagrams: 4
connections: 12
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Register contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Register contract/Access Rights

## 📝 Notes

This use case deals with the registering of a contract.

## 🔗 Connections (12)

- ← Association: [[User (Actor 1844326)]]
- → Dependency: [[{ADD}Get User Id based on Employee Number or Client Id]]
- → Dependency: [[{ADD}getContractServices]]
- → Dependency: [[{ADD}register (Class 1806666)]]
- ← UseCase «include»: [[{MOD}Register contract automatically]]
- → Dependency: [[BSL (Actor 1844327)]]
- → UseCase «include»: [[Get registration documents (UseCase 1856105)]]
- → Dependency: [[TCK (Actor 1844333)]]
- ← UseCase «include»: [[{MOD}Register contract via API]]
- → Realisation: [[Search tickets]]
- → Dependency: [[Get registration documents (UseCase 1856105)]]
- → Dependency: [[COMMODITY (Actor 1844328)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: register
- Use Case: Contract registration
- Use Case: Register contract
