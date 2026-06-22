---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/Business Rules"
domain: "Analysis Model"
element_id: 1813861
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Search criteria rule for KZ

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/Business Rules

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

- ← Dependency: [[Search criteria - KZ]]
- → Generalization: [[Rules for Search criteria has to be filled in (Requirement 1813857)]]

## 📊 Appears In (2 diagrams)

- Custom: Search clients
- Custom: Search criteria - KZ
