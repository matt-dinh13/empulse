---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819477
diagrams: 3
connections: 5
tags:
  - enumeration
  - analysis-model
---

# 📝 PayoffReasonCodeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

A list of reasons to pay-off

## 🔗 Connections (5)

- ← Dependency: [[{ADD}WriteOffResponse]]
- ← Dependency: [[{ADD}WriteOffRequest]]
- ← Dependency: [[PayoffRequestItemDto]]
- ← Dependency: [[{ADD}PayOffResponse]]
- ← Dependency: [[{ADD}PayOffRequest]]

## 📊 Appears In (3 diagrams)

- Logical: Account management structures
- Logical: AccountManagementWS - Contract payoff
- Logical: COMMON (v2)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DELINQUENCY | string |  |
| DEATH | string |  |
| CONTRACT_EXPIRATION | string |  |
| FRAUD | string |  |
| OVERDUE | string |  |
| WRITE_OFF_PROP | string |  |
