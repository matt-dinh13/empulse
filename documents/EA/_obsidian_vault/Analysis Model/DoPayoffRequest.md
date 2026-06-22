---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1575804
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 DoPayoffRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Submits payoff request message

## 🔗 Connections (2)

- → Dependency: [[PayoffRequestItemDto]]
- ← Dependency: [[AccountManagementWS]]

## 📊 Appears In (2 diagrams)

- Logical: AccountManagementWS - Contract payoff
- Logical: AccountManagementWS - Service overview

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| payoffItems | PayoffRequestItemDto |  |
