---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Services (COS_NG)/Requirement Model/CBL-22777 SME Project"
domain: "Modules"
element_id: 1869958
diagrams: 3
connections: 1
tags:
  - class
  - modules
---

# 🔷 Contract Service Role

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Services (COS_NG)/Requirement Model/CBL-22777 SME Project

## 📝 Notes

This entity represents user roles adjusted on the contract service and their validity.

## 🔗 Connections (1)

- → Aggregation: [[Contract Service (Class 1869957)]]

## 📊 Appears In (3 diagrams)

- Custom: CSI-3202 - UserRole assignment to contract service
- Logical: COS - LDM changes
- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Party UUID | number |  |
| Role Code | string |  |
| Valid From | datetime |  |
| Valid To | datetime |  |
| Contract Service External ID | int |  |
