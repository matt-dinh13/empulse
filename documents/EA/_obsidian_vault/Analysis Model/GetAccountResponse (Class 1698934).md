---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1698934
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAccountResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Account details by account number.

## 🔗 Connections (3)

- → Generalization «XSDextension»: [[AccountManagementResponseBaseDto]]
- → Dependency: [[AccountDto (Class 1660373)]]
- ← Dependency: [[AccountManagementWS (v6) (Interface 1698913)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - GetAccount

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| account | AccountDto |  |
