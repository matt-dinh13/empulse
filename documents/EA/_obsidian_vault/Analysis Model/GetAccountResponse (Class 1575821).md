---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1575821
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 GetAccountResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 📝 Notes

Account details by account number.

## 🔗 Connections (3)

- → Dependency: [[AccountDto (Class 1819446)]]
- → Generalization «XSDextension»: [[AccountManagementResponseBaseDto (Class 1819447)]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (3 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - GetAccount
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| account | AccountDto |  |
