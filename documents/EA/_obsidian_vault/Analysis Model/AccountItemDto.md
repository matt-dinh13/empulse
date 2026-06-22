---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)"
domain: "Analysis Model"
element_id: 1819496
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 AccountItemDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account Management/AccountManagementWS (v2)

## 📝 Notes

Account item. Account items are created by transaction billing or EOM process based as a result of tariff item calculation.
                Account item can be billed transaction, fee, penalty, payment,...

## 🔗 Connections (5)

- ← Dependency: [[GetAccountItemsResponse (Class 1575834)]]
- → Dependency: [[AccountItemEventTypeClassificationDto]]
- → Dependency: [[TransactionSubTypeDto]]
- → Generalization: [[BasicAccountItemDto]]
- → Dependency: [[TariffItemCategoryDto]]

## 📊 Appears In (3 diagrams)

- Logical: Account ManagementWS - Account items
- Logical: Account UI - Interface diagram - Transactions
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventType | AccountItemEventTypeClassificationDto |  |
| applyIr | boolean |  |
| irTariffItemTypeCode | TariffItemTypeCodeType |  |
| irStartDate | date |  |
| subtype | TransactionSubTypeDto |  |
| tariffItemCategory | TariffItemCategoryDto |  |
| firstPrescribeDate | date |  |
| prescribedAmount | MoneyDto |  |
| pairedAmount | MoneyDto |  |
| fullyPaired | boolean |  |
| fullyPairedDate | date |  |
| prescribed | boolean |  |
| createdBy | UserNameType |  |
| updatedBy | UserNameType |  |
| updateDate | dateTime |  |
| creationDate | dateTime |  |
| cardAcceptorName | string |  |
| cardAcceptorCity | string |  |
| cardAcceptorState | string |  |
| cardAcceptorCountryCode | string |  |
| billingPeriodStartDate | date |  |
| attributes | AttributesDto |  |
| truncatedPan | TruncatedPanType |  |
