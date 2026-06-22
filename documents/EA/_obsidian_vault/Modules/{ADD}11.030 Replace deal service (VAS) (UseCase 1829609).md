---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Access Rights"
domain: "Modules"
element_id: 1829609
diagrams: 4
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {ADD}11.030 Replace deal service (VAS)

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Access Rights

## 📝 Notes

{ADD CSI-3072 /}
The use case presents a web service method for Deal service replacement. 

Method example:
https://api.vas.<environment>/rest/v1/deals/{uuid}/replaceservice
{
  "service": {
    "code": "TEST",
    "version": 1
  },
  "reasonNotice": "note"
}

## 🔗 Connections (3)

- ← Dependency: [[Deals (Interface 1827210)]]
- → Realisation: [[{ADD}11.030 Replace deal service (VAS)]]
- → Association: [[External system (Actor 1787232)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: Replace Deal Service
- Use Case: CSI-3072 VAS - Replace Service method
- Use Case: Deal management - Use Case Model
