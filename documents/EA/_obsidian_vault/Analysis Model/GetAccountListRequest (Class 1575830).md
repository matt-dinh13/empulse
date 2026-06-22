---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1575830
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAccountListRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 📝 Notes

Account search criteria.

## 🔗 Connections (3)

- → Generalization «XSDextension»: [[AccountManagementSearchBaseDto (Class 1819487)]]
- → Dependency: [[AccountSearchDto (Class 1819458)]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (3 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - GetAccountList
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| criteria | AccountSearchDto |  |
