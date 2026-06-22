---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model"
domain: "Modules"
element_id: 1347890
diagrams: 4
connections: 15
tags:
  - class
  - modules
---

# 🔷 TransactionMessageDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model

## 📝 Notes

Transaction message. (TRANSACHEAD160)
                See: https://wiki.homecredit.net/confluence/pages/viewpage.action?pageId=134023323

## 🔗 Connections (13)

- ← Association: [[ModelGroup1]]
- → Dependency «transformation»: [[TRANSACHEAD160]]
- → Dependency «use»: [[TransactionDirectionDto (Enumeration 1223774)]]
- → Dependency: [[TransactionSourceIdDto (Class 1266629)]]
- → Dependency: [[TransactionSourceIdDto (Class 1266629)]]
- → Dependency: [[CancellationReasonDto (Class 1223773)]]
- → Dependency: [[AllocationTypeDto (Enumeration 1223766)]]
- → Generalization «XSDextension»: [[MessageBaseTypeDto]]
- → Dependency: [[TransactionReconciliationDto (Class 1223771)]]
- → Dependency: [[AttributesDto (Class 1266625)]]
- → Dependency: [[AccountingEntryType (Enumeration 1223772)]]
- → Dependency «use»: [[BillingSystemType (Enumeration 1266627)]]
- → Dependency: [[Processing TransactionMessageDto]]

## 📊 Appears In (4 diagrams)

- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: COMMON for consumed JMS messages from CaBus
- Logical: REL Account Transactions - Communication model
- Logical: REL Account Transactions - JMS messages

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
