---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/REL Account Messages/Communication model/JMS messages"
domain: "Modules"
element_id: 1223740
diagrams: 4
connections: 16
tags:
  - class
  - modules
---

# 🔷 AccruedInterestMessageDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/REL Account Messages/Communication model/JMS messages

## 📝 Notes

It is new message which reports accrued interest from IP plan. CaBus will send all future interests in advance to OBS. OBS will post the interest to the account at moment, when banking date will correspond to the billing date from the message.

## 🔗 Connections (11)

- ← Association: [[ModelGroup1]]
- → Dependency: [[TransactionSubTypeDto]]
- → Dependency «transformation»: [[ACCRUEDINTEREST162]]
- → Dependency: [[TariffItemTypeCodeType]]
- → Dependency: [[Process AccruedInterestMessageDto]]
- → Dependency: [[CancellationReasonDto (Class 1223773)]]
- → Dependency: [[BillingSystemType (Enumeration 1266627)]]
- → Dependency: [[TransactionDirectionDto (Enumeration 1223774)]]
- → Dependency: [[AccountNumberType (Class 1266620)]]
- → Generalization «XSDextension»: [[MessageBaseTypeDto]]
- → Dependency: [[ContractCodeType]]

## 📊 Appears In (4 diagrams)

- Logical: Accured Interest -  JMS messages
- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: COMMON for consumed JMS messages from CaBus
- Logical: REL Accured Interest - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accruedInterestCode | string |  |
| accountNumber | AccountNumberType |  |
| contractCode | ContractCodeType |  |
| valueDate | date |  |
| tariffItemTypeCode | TariffItemTypeCodeType |  |
| amount | MoneyDto |  |
| direction | TransactionDirectionDto |  |
| subtype | TransactionSubTypeDto |  |
| cancelled | boolean |  |
| cancellationReason | CancellationReasonDto |  |
| billingSystem | BillingSystemType |  |
