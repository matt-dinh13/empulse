---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819491
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 ContractServiceDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Structure of contract service common data object

Source #1 is taken for contract before status = Signed; #2 since Signed

## 🔗 Connections (5)

- → Dependency: [[ContractServiceCategoryDto]]
- → Dependency: [[ContractServiceTypeDto]]
- → Dependency: [[ServiceParametersDto]]
- → Generalization «XSDextension»: [[ContractServiceBaseDto]]
- ← Dependency: [[ContractSnapshotDto (Class 1819463)]]

## 📊 Appears In (1 diagrams)

- Logical: Account management structures - Contract Snapshot

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceType | ContractServiceTypeDto |  |
| serviceCategory | ContractServiceCategoryDto |  |
| serviceParameters | ServiceParametersDto |  |
