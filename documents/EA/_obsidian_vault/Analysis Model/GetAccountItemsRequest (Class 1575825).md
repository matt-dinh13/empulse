---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1575825
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAccountItemsRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 📝 Notes

Get account items request.

## 🔗 Connections (3)

- → Dependency: [[AccountItemSearchDto (Class 1611763)]]
- → Generalization «XSDextension»: [[AccountManagementSearchBaseDto (Class 1819487)]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (3 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: Account ManagementWS - Account items
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| criteria | AccountItemSearchDto |  |
