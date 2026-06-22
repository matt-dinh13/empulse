---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model"
domain: "Analysis Model"
element_id: 1753288
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 DDS Error Reason

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Logical Data Model

## 📝 Notes

Enumeration holds information about possible bounce error codes of direct debit statements. There are expected reasons provided by DD provider (bank).

## 🔗 Connections (1)

- ← Dependency: [[Direct Debit Statement]]

## 📊 Appears In (1 diagrams)

- Logical: Direct Debit Statements

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Name |  |
| Permanent Flag | Boolean |  |
| Notification Flag | Boolean |  |
| Auto Cancel Count | int |  |
