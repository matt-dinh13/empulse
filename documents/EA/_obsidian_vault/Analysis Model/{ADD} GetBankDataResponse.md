---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank Management"
domain: "Analysis Model"
element_id: 1557366
diagrams: 1
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 {ADD} GetBankDataResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Bank Management

## 📝 Notes

{ADD DRR-396/}

## 🔗 Connections (7)

- → Dependency: [[Bank (Class 1761500)]]
- → Dependency: [[Bank (Class 1761500)]]
- → Dependency: [[Direct Debit Provider]]
- → Dependency: [[Bank (Class 1761500)]]
- → Dependency: [[Bank (Class 1761500)]]
- → Dependency: [[Bank (Class 1761500)]]
- ← Dependency: [[{ADD} BankManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: BankManagementWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Due Date Offset | int |  |
| Name | Text |  |
| Code | Text |  |
| Status | Text |  |
| DD Type | Text |  |
| Synchronization Code | Text |  |
