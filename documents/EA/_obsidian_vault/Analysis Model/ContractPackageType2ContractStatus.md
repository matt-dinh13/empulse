---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/Logical Data Model"
domain: "Analysis Model"
element_id: 1335503
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractPackageType2ContractStatus

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/Logical Data Model

## 📝 Notes

This entity keeps setting for dividing contracts to package types by contract status

Note:
Because the name of the element is too long, the name of the DB table was shortened on CONTR_PACK_TY2CONTR_STAT.

## 🔗 Connections (2)

- → Dependency: [[ContractPackageType]]
- → Dependency: [[Contract Status Type (Class 1880196)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract tracking

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ContractStatus | Contract Status Type |  |
| PackageType | ContractPackageType |  |
