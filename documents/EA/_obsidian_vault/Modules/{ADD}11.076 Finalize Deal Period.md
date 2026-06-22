---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model"
domain: "Modules"
element_id: 1829619
diagrams: 2
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {ADD}11.076 Finalize Deal Period

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Use Case Model

## 📝 Notes

{ADD CSI-2967 /}
The use case presents a common part of the Deal prolongation method

## 🔗 Connections (8)

- → Dependency: [[Determine register inclusion date]]
- → Dependency: [[{ADD}Create Outgoing Payment by calling BSL API]]
- → Association: [[InsuranceProgram (Actor 1787234)]]
- → Dependency: [[Get Insurance Program data from INSR]]
- → Dependency: [[Calculate Net Premium based on Revenue Share]]
- → Dependency: [[{ADD}Create Payment Channel for Premium payment]]
- ← UseCase «include»: [[{ADD}11.072 Create New Period for Prolongation (VAS)]]
- ← UseCase «include»: [[{ADD}11.074 Finalize Elapsed and Create new Period for Prolongation (VAS)]]

## 📊 Appears In (2 diagrams)

- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
