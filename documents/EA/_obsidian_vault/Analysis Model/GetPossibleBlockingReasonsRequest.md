---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1575812
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 GetPossibleBlockingReasonsRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Request to find privileges regarding account (un)blocking for given user.
As an input, user is stored in SOAP header.

## 🔗 Connections (1)

- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountManagementWS - Account blocking
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| username | string |  |
| token | string |  |
