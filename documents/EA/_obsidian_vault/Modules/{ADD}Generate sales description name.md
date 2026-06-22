---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions/Business Rules"
domain: "Modules"
element_id: 1845864
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Generate sales description name

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Descriptions/Business Rules

## 📝 Notes

{ADD PCG-4839/} {ADD PCG-5137/}
Rule for generation of name for sales description.

If the Versioned checkbox is ticked (true) then
name = entity.Code-entity.VersionNumber
If the Versioned checkbox is not ticked (false) then
name = entity.Code

for country: mobi bank  {ADD PCG-5137} also for PH country {PCG-5137/}

## 🔗 Connections (2)

- ← Dependency: [[Add (GUIElement 1845867)]]
- → Realisation: [[POST new sales description]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: One Level Requirement Hierarchy
- Custom: Set Sales Description on entity
