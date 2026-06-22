---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Type Definition/Logical Data Model"
domain: "Modules"
element_id: 1877953
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Behavior Rule

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Type Definition/Logical Data Model

## 📝 Notes

This class represents rule which determines how attributes ("owner" attribute of the rule) is affected based on value of different attribute ("trigger" attribute).

## 🔗 Connections (3)

- → Dependency: [[State Type (Enumeration 1877956)]]
- → Association: [[Document Type Attribute (Class 1877952)]]
- → Association: [[Document Type Attribute (Class 1877952)]]

## 📊 Appears In (1 diagrams)

- Logical: Document Type - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Condition | string |  |
| State | State Type |  |
| Active Flag | boolean |  |
