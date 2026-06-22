---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1698927
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAccountListRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Account search criteria.

## 🔗 Connections (3)

- → Generalization «XSDextension»: [[AccountManagementSearchBaseDto]]
- → Dependency: [[AccountSearchDto (Class 1660355)]]
- ← Dependency: [[AccountManagementWS (v6) (Interface 1698913)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - GetAccountList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| criteria | AccountSearchDto |  |
