---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1575824
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 GetAuthorizationsResponse

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Returns list of authorizations on an account.

## 🔗 Connections (2)

- → Dependency: [[TransactionAuthorizationDto]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS - Authorization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| authorizations | TransactionAuthorizationDto |  |
