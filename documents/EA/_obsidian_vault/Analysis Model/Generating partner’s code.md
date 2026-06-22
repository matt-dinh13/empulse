---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1280899
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Generating partner’s code

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants

## 📝 Notes

Partner’s code is a numerical serie from the range 00001 to 99999. Each partner has it’s own unique code in whole scope of Sales Network Management and therefore each partner can be clearly specified by this number. New partner’s code is determined as the ID of last created partner increased by one. Overflow of partner’s code doesn’t have to be solved. If the partner’s code was once assigned to partner, than this exact partner’s code will never be used by any other partner (partner’s code is permanent).

## 🔗 Connections (1)

- → Dependency: [[{DEL}09.010 Create partner]]

## 📊 Appears In (2 diagrams)

- Custom: Partner - Business Rules
- Use Case: Manage partner
