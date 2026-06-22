---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model"
domain: "Analysis Model"
element_id: 1869694
diagrams: 1
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 DDM Documents for Banks

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model

## 📝 Notes

Information about documents related to DDM (form, cancelled chegue, etc.) and if they are necessary for successful confirmation.

## 🔗 Connections (2)

- ← Association: [[DDM (Class 1869699)]]
- → Dependency: [[Bank (Class 1761500)]]

## 📊 Appears In (1 diagrams)

- Logical: Contract - DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Bank | Bank |  |
| DocumentType | Document Type |  |
| Mandatory | Boolean |  |
