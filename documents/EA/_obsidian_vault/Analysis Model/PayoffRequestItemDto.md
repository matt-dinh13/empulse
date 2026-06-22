---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1819490
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PayoffRequestItemDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 🔗 Connections (2)

- ← Dependency: [[DoPayoffRequest]]
- → Dependency: [[PayoffReasonCodeDto (Enumeration 1819477)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS - Contract payoff

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| payoffDate | date |  |
| payoffReason | PayoffReasonCodeDto |  |
