---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages"
domain: "Analysis Model"
element_id: 1611763
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AccountItemSearchDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)/Account Management - Messages

## 📝 Notes

Account item search

## 🔗 Connections (5)

- ← Dependency «use»: [[GetAccountItemsRequest]]
- ← Generalization: [[AccountUISearchBaseDto]]
- ← Dependency: [[GetAccountItemsRequest (Class 1575825)]]
- → Dependency: [[CancellationReasonDto (Class 1160769)]]
- → Dependency: [[TariffItemCategoryDto]]

## 📊 Appears In (3 diagrams)

- Logical: Account Management - Messages - Interface diagram
- Logical: Account ManagementWS - Account items
- Logical: Account UI - Interface diagram - Transactions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| transactionDateRange | DateRangeDto |  |
| cancellationDateRange | DateRangeDto |  |
| billingDateRange | DateRangeDto |  |
| amountRange | AmountRangeDto |  |
| directions | AccountItemAmountDirectionDto |  |
| eventTypes | AccountItemEventTypeDto |  |
| subtypes | TransactionSubTypesDto |  |
| isCancelled | boolean |  |
| billingPeriodStartMonth | date |  |
| tariffItemCategory | TariffItemCategoryDto |  |
| tariffItemTypeCode | TariffItemTypeCodeType |  |
| excludedCancellationReasons | CancellationReasonDto |  |
