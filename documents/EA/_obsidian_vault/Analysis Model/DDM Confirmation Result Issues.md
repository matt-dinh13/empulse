---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model"
domain: "Analysis Model"
element_id: 1869701
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 DDM Confirmation Result Issues

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Logical Data Model

## 📝 Notes

Information about Direct Debit Mandate received from client's bank.

## 🔗 Connections (4)

- → Dependency: [[DDM Confirmation Status Type]]
- → Dependency: [[Account Type]]
- → Dependency: [[Bank Branch (Class 1761502)]]
- → Dependency: [[DDM Result Issue Type]]

## 📊 Appears In (1 diagrams)

- Logical: Contract - DDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Account holder name | Text |  |
| Account number | Account number |  |
| Account type | Account Type |  |
| Bank branch | Bank Branch |  |
| DDM Code | DDM Code |  |
| Issue | DDM Result Issue Type |  |
| Line number | Number |  |
| Status | DDM Confirmation Status Type |  |
| Status remark | Text |  |
