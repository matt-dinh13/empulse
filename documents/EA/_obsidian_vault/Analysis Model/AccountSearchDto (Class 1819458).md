---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures"
domain: "Analysis Model"
element_id: 1819458
diagrams: 2
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 AccountSearchDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Structures

## 📝 Notes

Account search.

## 🔗 Connections (6)

- ← Dependency: [[GetAccountListRequest (Class 1575830)]]
- → Dependency: [[AccountStatusDto]]
- → Dependency: [[DayOfMonth]]
- → Dependency: [[ContractCodeType (Class 1611745)]]
- → Dependency: [[AccountNumberType (Class 1611749)]]
- → Dependency: [[AccountTypeDto (Enumeration 1638516)]]

## 📊 Appears In (2 diagrams)

- Logical: Account management structures
- Logical: AccountManagementWS - GetAccountList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | long |  |
| accountNumber | AccountNumberType |  |
| contractCode | ContractCode |  |
| statuses | AccountStatusDto |  |
| types | AccountTypeDto |  |
| blocked | boolean |  |
| billingPeriodCode | DayOfMonth |  |
