---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model/Enums&Types"
domain: "Analysis Model"
element_id: 1822533
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Source Of Income to Economical Status

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model/Enums&Types

## 📝 Notes

Represents relationship between economical status and source of income with possible distinction when value should be used (attribute Specific for).

## 🔗 Connections (4)

- ← Dependency: [[Main source of income]]
- → Dependency: [[Economical Status]]
- → Association: [[Source Of Income]]
- ← Dependency: [[Main source of income values]]

## 📊 Appears In (1 diagrams)

- Logical: Source of income and economical status relation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Specific for | string |  |
| Economical status | Economical Status |  |
