---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions"
domain: "Analysis Model"
element_id: 1160759
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 ChargeFeeStatusDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Transactions

## 📝 Notes

Charge fee status (uses the same results codes as for LCS).

## 🔗 Connections (1)

- ← Dependency: [[ChargeFeeResponse]]

## 📊 Appears In (1 diagrams)

- Logical: Account TransactionsWS - charge/cancel fee

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OK |  |  |
| CONTRACT_IN_WRONG_STATUS |  |  |
| FEE_TYPE_NOT_AVAILABLE |  |  |
| AMOUNT_NOT_ALLOWED |  |  |
| AMOUNT_REQUIRED |  |  |
| OTHER_ERROR |  |  |
