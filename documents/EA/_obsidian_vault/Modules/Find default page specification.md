---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Business rules"
domain: "Modules"
element_id: 1856869
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Find default page specification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS_NG)/Analytical Model/Document Instances/Business rules

## 📝 Notes

The rule checks if page specification with Merged File flag exists for specified document type and return the page specification code.

Inputs:
Document Type

Output:
Page Specification Code  or NULL

System finds Document type -> Document Type Page specification[Merged File=true].
If no record exists, system returns NULL, else returns found Page Specification code.

## 🔗 Connections (2)

- ← Dependency: [[14.050 Create Document File (UseCase 1856714)]]
- ← Dependency: [[14.010 Create Document (UseCase 1856713)]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Use Case: Document services - Use Case Model
