---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1575807
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 UnblockAccountResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 📝 Notes

Unblock account response.

## 🔗 Connections (4)

- → Generalization «XSDextension»: [[AccountManagementResponseBaseDto (Class 1819447)]]
- → Dependency: [[AccountDto (Class 1819446)]]
- ← Dependency: [[AccountManagementWS]]
- ← Dependency: [[12.610 Unblock account (UseCase 1849947)]]

## 📊 Appears In (3 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - Account blocking
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| account | AccountDto |  |
