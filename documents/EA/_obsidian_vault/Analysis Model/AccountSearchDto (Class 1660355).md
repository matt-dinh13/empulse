---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)"
domain: "Analysis Model"
element_id: 1660355
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 AccountSearchDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v6)

## 📝 Notes

Account search.

## 🔗 Connections (6)

- → Dependency: [[AccountNumberType (Class 1660370)]]
- → Dependency: [[ContractCodeType (Class 1660372)]]
- → Dependency: [[AccountTypeDto (Class 1660374)]]
- → Dependency: [[AccountStatusDto (Enumeration 1660368)]]
- → Dependency: [[DayOfMonth (Class 1660365)]]
- ← Dependency: [[GetAccountListRequest (Class 1698927)]]

## 📊 Appears In (1 diagrams)

- Logical: AccountManagementWS (v6) - GetAccountList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | long |  |
| accountNumber | AccountNumberType |  |
| contractCode | ContractCodeType |  |
| statuses | AccountStatusDto |  |
| types | AccountTypeDto |  |
| blocked | boolean |  |
| billingPeriodCode | DayOfMonth |  |
