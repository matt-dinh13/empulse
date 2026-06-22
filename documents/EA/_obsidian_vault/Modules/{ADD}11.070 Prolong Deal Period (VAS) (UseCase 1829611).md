---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Access Rights"
domain: "Modules"
element_id: 1829611
diagrams: 6
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {ADD}11.070 Prolong Deal Period (VAS)

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Access Rights

## 📝 Notes

{ADD CSI-2967 /}
The use case presents a method for the Deal Period (insurance Period) prolongation. 
Based on the Service setting, system selects suitable process for the Deal Period prolongation

The method call example:
https://api.vas.id00a1.cz.infra/rest/v1/deals/646546546546/prolong
  "startDate": "2024-04-10",
  "endDate": "2024-09-09",
  "firstOverdueDate": "2024-04-10",
  "insuranceAmount": {
    "sumInsured": {
      "value": 0,
      "currency": "string"
    },
    "premium": {
      "value": 0,
      "currency": "string"
    },
    "premiumTerminated": {
      "value": 0,
      "currency": "string"
    }
  }

## 🔗 Connections (7)

- ← Association: [[External system (Actor 1787232)]]
- ← Dependency: [[Deals (Interface 1827210)]]
- → Dependency: [[Get Service definition from Services]]
- → UseCase «include»: [[{ADD}11.072 Create New Period for Prolongation (VAS)]]
- → Realisation: [[{ADD}11.070 Prolong Deal Period (VAS)]]
- → Dependency: [[Get Service definition from New Service Catalogue]]
- → UseCase «include»: [[{ADD}11.074 Finalize Elapsed and Create new Period for Prolongation (VAS)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Logical: Prolong Deal
- Use Case: CSI-2979 Process Account EoM billing notification
- Use Case: CSI-2979 Process Account EoM billing notification
- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
