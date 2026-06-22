---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Access Rights"
domain: "Modules"
element_id: 1829615
diagrams: 7
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {ADD}11.080 Cancel Deal (VAS)

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Access Rights

## 📝 Notes

{ADD CSI-2969 /}
The use case presents a web service method for Deal cancellation. In case of Deals (insurances) where the premium is charged by BSL, there are also cancelled the outgoing payments related to the Deal Period.

## 🔗 Connections (4)

- ← Association: [[External system (Actor 1787232)]]
- ← Dependency: [[Deals (Interface 1827210)]]
- → Realisation: [[{ADD}11.080 Cancel Deal (VAS)]]
- → Dependency: [[{ADD}Cancel Outgoing Payments related to Deal]]

## 📊 Appears In (7 diagrams)

- Custom: Access Rights
- Logical: Cancel Deal
- Use Case: CSI-2969 Cancel Deal method
- Use Case: CSI-2975 COS - Cancel Service on Contract
- Use Case: CSI-2975 COS - Cancel Service on Contract
- Use Case: Deal management - Use Case Model
- Use Case: VAS - Cancel Deal method update - cancel out payment
