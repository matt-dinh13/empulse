---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Register contract/Access Rights"
domain: "Modules"
element_id: 1879073
diagrams: 5
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Register contract automatically

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Register contract/Access Rights

## 📝 Notes

This use case registers a contract automatically. It's triggered by an incoming ContractSigned Kafka event.

## 🔗 Connections (3)

- ← Association: [[COMA (Actor 1844330)]]
- → UseCase «include»: [[{MOD}Check all registration documents]]
- → UseCase «include»: [[{MOD}Register contract]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Custom: CLM-5165 - Implement IN specific logic
- Use Case: Contract registration
- Use Case: Register contract
