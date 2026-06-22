---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Logical Data Model/AF configuration"
domain: "Analysis Model"
element_id: 1738681
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 Application Form Configuration

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Logical Data Model/AF configuration

## 📝 Notes

This class defines configuration of particular part of application form (e.g. 1SP, short 2BoD of 2SP, etc.) If the record is default, the configuration is used for client identification.

## 🔗 Connections (6)

- → Dependency: [[Contract origination Type]]
- ← Aggregation: [[{DEL}Field Validation]]
- ← Aggregation: [[{DEL}Cross Validation]]
- → Dependency: [[Application Form Scope]]
- → Dependency: [[Data Block Type]]
- ← Dependency: [[Product Profile 2 Application Form Configuration]]

## 📊 Appears In (2 diagrams)

- Logical: AF configuration
- Logical: Product Profile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Contract Origination Type | Contract Origination Type |  |
| Form Scope | Application Form Scope |  |
| Block Type | Data Block Type |  |
| Default | boolean | false |
