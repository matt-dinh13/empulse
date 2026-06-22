---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1819488
diagrams: 4
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 FeeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 🔗 Connections (3)

- ← Dependency «use»: [[ChargeFeeRequest]]
- ← Dependency: [[ActivateAccountRequest]]
- → Dependency «use»: [[TransactionSourceIdDto (Class 1638513)]]

## 📊 Appears In (4 diagrams)

- Logical: Account Management - Activate account
- Logical: Account management structures - Initial Transaction
- Logical: Account TransactionsWS - charge/cancel fee
- Logical: AccountManagementWS - Contract signing

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceId | TransactionSourceIdDto |  |
| accountNumber | AccountNumberType |  |
| chargeDate | date |  |
| tariffItemType | TariffItemTypeCodeType |  |
| amount | MoneyDto |  |
| note | NoteType |  |
| userName | UserNameType |  |
| attributes | AttributesDto |  |
