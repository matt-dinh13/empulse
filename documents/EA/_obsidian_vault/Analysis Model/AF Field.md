---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Logical Data Model/AF structure"
domain: "Analysis Model"
element_id: 936336
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 AF Field

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Logical Data Model/AF structure

## 📝 Notes

This entity represents field of application form, for example:
Gender with AF Field Client Gender ...

## 🔗 Connections (3)

- → Aggregation: [[Application Form]]
- → Association: [[AF Part]]
- → Association: [[AF Field Type]]

## 📊 Appears In (1 diagrams)

- Logical: AF structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name | string |  |
| type | AF Field Type |  |
