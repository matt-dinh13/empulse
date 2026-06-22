---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1575829
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 UnblockAccountRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 📝 Notes

Unblock account request specifies blocking states to be cleared.
The Account still may stay blocked for different reason(s).

## 🔗 Connections (5)

- → Dependency: [[{MOD}Contract (Class 1879596)]]
- → Dependency: [[Active blockings]]
- → Dependency: [[BlockingReasonDto (Class 1819473)]]
- ← Dependency: [[AccountManagementWS]]
- ← Dependency: [[12.610 Unblock account (UseCase 1849947)]]

## 📊 Appears In (3 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: AccountManagementWS - Account blocking
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| reason | BlockingReasonDto |  |
