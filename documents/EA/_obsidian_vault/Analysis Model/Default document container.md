---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/Business Rules"
domain: "Analysis Model"
element_id: 1672144
diagrams: 9
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Default document container

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Container/Business Rules

## 📝 Notes

If ClientScoringSegmentCode is null, then the related DocumentContainer is considered as a default document container (i.e. document container applicable for clients with non-defined scoring segment).

## 🔗 Connections (8)

- ← Dependency: [[Necessary documents]]
- ← Dependency: [[{MOD}Sent to evaluation]]
- ← Dependency: [[Product offer search result]]
- ← Dependency: [[Get document containers for applicable client scoring segment]]
- ← Dependency: [[Web camera check]]
- ← Dependency: [[{MOD}Document container check]]
- ← Dependency: [[Prepare CustomerOffer]]
- ← Dependency: [[Algorithm_ Decision of 1SP or 2SP]]

## 📊 Appears In (9 diagrams)

- Custom: Business Rules
- Custom: Calculate product offer
- Custom: Product and Service selection
- Use Case: Choose product offer
- Use Case: Fill in application
- Use Case: Fill in application - 1SP
- Use Case: Fill in application - 2SP
- Use Case: Product Calculator for External system - Calculate/Recalculate
- Use Case: Product Calculator for External system - Provide Data
