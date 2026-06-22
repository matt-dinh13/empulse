---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1708947
diagrams: 0
connections: 2
tags:
  - requirement
  - _uncategorized
---

# 📋 Selection of Document Type on Product Calculator

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

Rule used for selection of documents which should be ticked by default on product calculator GUI.

Input:
- ProductOption selected on product calculator GUI
- all DocumentTypes displayed in Client's documents grid on product calculator GUi (with DocumentType.DocumentTypeFlag = PCALC_DISPLAYED)

Output:
List of client documents with DocumentType.Selection = True.

System searches for all active records from entity Documents Selected on Product Calculator.
If there is any record present for currently selected ProductOption (}from rule Selection of Product Type for product calculation in LOR area), all related DocumentTypes are ticked by default on product calculator GUI.

## 🔗 Connections (2)

- → Dependency: [[Selection of Product Type for product calculation in LOR area]]
- ← Dependency: [[Client's documents]]
