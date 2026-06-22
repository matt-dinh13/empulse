---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Business rules"
domain: "Modules"
element_id: 1753414
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Find default page specification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Business rules

## 📝 Notes

{ADD CSI-1040 /}
The rule checks if page specification with Merged File flag exists for specified document type and return the page specification code.

Inputs:
Document Type

Output:
Page Specification Code  or NULL

System finds Document type -> Document Type Page specification[Merged File=true].
If no record exists, system returns NULL, else returns found Page Specification code.

## 🔗 Connections (2)

- ← Dependency: [[14.050 Create Document File (UseCase 1880045)]]
- ← Dependency: [[{MOD}14.010 Create Document]]

## 📊 Appears In (3 diagrams)

- Custom: Business rules
- Custom: CBL-14943 (CSI-1040) Support for merged files
- Use Case: Document services - Use Case Model
