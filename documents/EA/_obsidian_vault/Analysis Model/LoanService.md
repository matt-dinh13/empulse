---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Services"
domain: "Analysis Model"
element_id: 1720576
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 LoanService

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/KAFKA messages/Generated KAFKA messages/CSI messages/Loan Services

## 📝 Notes

This entity represents services adjusted on the contract and their current status. Some tariff items may be linked to the service adjusted. Some adjusted services can be linked to a specific commodity.

## 🔗 Connections (8)

- → Dependency: [[OperationStatusType]]
- → Dependency: [[LoanServiceStatus]]
- → Dependency: [[RelatedSubject (Class 1720581)]]
- → Dependency: [[CreationMoment]]
- → Dependency: [[CardService]]
- → Dependency: [[LoanServiceParameter]]
- → Dependency: [[Service (Class 1720575)]]
- → Dependency: [[Tariff (Class 1720574)]]

## 📊 Appears In (1 diagrams)

- Logical: Loan Services

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| externalId | string |  |
| service | Service |  |
| tariff | Tariff |  |
| startDate | Date |  |
| endDate | Date |  |
| currentStatus | LoanServiceStatus |  |
| statusReason | string |  |
| statusDescription | string |  |
| currentOperationStatus | {MOD}Check Moment Type |  |
| evaluationPaused | boolean |  |
| creationMoment | {MOD}Check Moment Type |  |
| {MOD}relatedSubjects | RelatedSubject |  |
| parameters | LoanServiceParameter |  |
| cardService | CardService |  |
