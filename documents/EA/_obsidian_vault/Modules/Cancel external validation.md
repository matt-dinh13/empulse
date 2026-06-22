---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights"
domain: "Modules"
element_id: 1879008
diagrams: 4
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 Cancel external validation

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Access Rights

## 📝 Notes

This use case describes process of external validation cancelation of commodity IMEI or Serial number.

## 🔗 Connections (9)

- ← Realisation: [[commodities-validation-cancelation]]
- ← Association: [[External System (Actor 1854672)]]
- ← Association: [[External System (Actor 1854672)]]
- → Realisation: [[{ADD}01.620 Cancel external validation]]
- ← UseCase «include»: [[Process transaction cancelation notification]]
- → Dependency: [[{ADD}Cancel external validation - validation]]
- → Dependency: [[{MOD}External validation cancellation]]
- ← UseCase «include»: [[{MOD}Process application cancelation notification]]
- ← UseCase «include»: [[Process contract cancelation notification]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Commodity API
- Use Case: Commodity cancelation
- Use Case: Use Case
