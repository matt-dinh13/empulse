---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/REL Account transactions"
domain: "Analysis Model"
element_id: 1347887
diagrams: 1
connections: 10
tags:
  - class
  - analysis-model
---

# 🔷 TransactionMessageDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/REL Account transactions

## 📝 Notes

Transaction message. (TRANSACHEAD160)
                See: https://wiki.homecredit.net/confluence/pages/viewpage.action?pageId=134023323

## 🔗 Connections (10)

- → Dependency «use»: [[TransactionDirectionDto]]
- → Dependency: [[AttributesDto]]
- → Dependency: [[AccountingEntryType]]
- → Generalization «XSDextension»: [[MessageBaseTypeDto]]
- → Dependency «use»: [[BillingSystemType]]
- → Dependency: [[TransactionSourceIdDto]]
- → Dependency: [[AllocationTypeDto]]
- → Dependency: [[TransactionSourceIdDto]]
- → Dependency: [[TransactionReconciliationDto]]
- → Dependency: [[CancellationReasonDto]]

## 📊 Appears In (1 diagrams)

- Logical: Consumed JMS messages - REL Account transactions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | ContractCodeType |  |
| accountNumber | AccountNumberType |  |
| sourceEventId | TransactionSourceIdDto |  |
| transactionSourceId | TransactionSourceIdDto |  |
| billingSystem | BillingSystemType |  |
| iban | IbanType |  |
| direction | TransactionDirectionDto |  |
| amount | PositiveMoneyDto |  |
| originalAmount | PositiveMoneyDto |  |
| reconciliationAmount | PositiveMoneyDto |  |
| conversionRate | decimal |  |
| billingDate | date |  |
| cancelled | boolean |  |
| reconciliationItems | TransactionReconciliationDto |  |
| tariffItemTypeCode | TariffItemTypeCodeType |  |
| attributes | AttributesDto |  |
| cancellationReason | CancellationReasonDto |  |
| parentAccountItemCode | AccountItemCodeType |  |
| accountingEntryType | AccountingEntryType |  |
| allocation | AllocationTypeDto |  |
| transactionDate | date |  |
