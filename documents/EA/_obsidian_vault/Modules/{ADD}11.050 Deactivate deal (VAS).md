---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Access Rights"
domain: "Modules"
element_id: 1829621
diagrams: 6
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {ADD}11.050 Deactivate Deal (VAS)

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Access Rights

## 📝 Notes

{ADD CSI-2936 /}
The use case presents a method for the Deal deactivation (operation status SWITCHED-OFF)

Method example:
https://api.vas.<environment>/rest/v1/deals/{uuid}/deactivate
{
  "deactivationDate": "2024-02-14",
  "reasonCode": "DEACTIVATED_MANUALLY",
  "reasonNotice": "string"
}

## 🔗 Connections (6)

- ← Association: [[External system (Actor 1787232)]]
- ← Dependency: [[Deals (Interface 1827210)]]
- → Dependency: [[Get Service definition from Services]]
- → Dependency: [[Get Service definition from New Service Catalogue]]
- → Realisation: [[{ADD}11.050 Deactivate deal (VAS)]]
- → Dependency: [[Insurance service setting mapping]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Logical: Deactivate Deal
- Use Case: CSI-2936 VAS Deal deactivation method
- Use Case: CSI-2978 Process Account Closure notification
- Use Case: CSI-2978 Process Account Closure notification
- Use Case: Deal management - Use Case Model
