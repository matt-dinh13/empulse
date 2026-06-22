---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/Business Rules"
domain: "Modules"
element_id: 1799870
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Search criteria rule for KZ

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/Business Rules

## 📝 Notes

This rule defines minimal groups of search criteria for Kazakhstan. At least one group must be entered for search to start.
1. Contract number 
2. CUID 
3. National identification number
4. Client’s surname and Birth date
5. (Client's surname) or (Client's first name and Client's surname) or (Client's middle name and Client's first name and Client's surname)
6. Document type and document number.
7. Contact type and contact

## 🔗 Connections (2)

- → Generalization: [[Rules for Search criteria has to be filled in]]
- ← Dependency: [[Search criteria - KZ (GUIElement 1799873)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Search criteria - KZ
