---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872756
diagrams: 1
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {MOD}16.050 Process Contract Supplement notification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

The use case presents orchestration of the process for Account activation after customer accept (sign) contract documents (notification from SUP is received).

## 🔗 Connections (5)

- ← Association: [[SUP.ContractSupplements]]
- → Dependency: [[SIR - Activate Contract Service in COS]]
- → Dependency: [[SIR - Get Service definitions from PRC Service Catalogue (Requirement 1872723)]]
- → Dependency: [[{MOD}Get Contract Service by Contract code from COS]]
- → Dependency: [[{ADD}Cancel Contract Service in COS]]

## 📊 Appears In (1 diagrams)

- Use Case: Account origination - Use Case Model
