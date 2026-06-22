---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Logical Data Model"
domain: "Modules"
element_id: 1676928
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Document Container to Document Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Logical Data Model

## 📝 Notes

This entity specifies which document types belongs to which container and at which time period.

## 🔗 Connections (2)

- → Aggregation: [[Document Container (Class 1676927)]]
- → Dependency: [[Photo Acquiring Type (Class 1676926)]]

## 📊 Appears In (1 diagrams)

- Logical: Document Container

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document Type | Document Type |  |
| Valid From | datetime |  |
| Valid To | datetime |  |
| Photo Acquiring Method | Photo Acquiring Type |  |
