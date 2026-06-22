---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1660359
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 FeeDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 🔗 Connections (2)

- → Dependency: [[AccountNumberType (Class 1660370)]]
- ← Dependency: [[ActivateAccountRequest (Class 1698933)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - ActivateAccount

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
