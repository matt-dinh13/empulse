---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model"
domain: "Modules"
element_id: 833505
diagrams: 4
connections: 9
tags:
  - class
  - modules
---

# 🔷 PaidInstallmentMessageDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Communication Model

## 📝 Notes

Paid instalment message.

## 🔗 Connections (8)

- → Dependency: [[AccountTypeDto]]
- → Dependency «use»: [[BillingSystemType (Enumeration 1266627)]]
- → Dependency: [[Processing PaidInstalmentMessageDto]]
- → Dependency «use»: [[ReconciliationTypeDto (Enumeration 1266621)]]
- → Generalization «XSDextension»: [[MessageBaseTypeDto]]
- → Dependency «use»: [[TransactionSourceIdDto (Class 1266629)]]
- → Dependency «transformation»: [[INSTALPAY126]]
- ← Association: [[ModelGroup1]]

## 📊 Appears In (4 diagrams)

- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: COMMON for consumed JMS messages from CaBus
- Logical: REL Payment Pairing - Communication Model
- Logical: REL Payment Pairing - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| sourceTransactionId | TransactionSourceIdDto |  |
| contractCode | ContractCodeType |  |
| instalmentCode | AccountItemCodeType |  |
| pairedAmount | MoneyDto |  |
| paymentDepositDate | date |  |
| cancelled | boolean |  |
| accountItemInstalmentCode | AccountItemCodeType |  |
| accountItemCode | AccountItemCodeType |  |
| billingSystem | BillingSystemType |  |
| reconciliationType | ReconciliationTypeDto |  |
| accountType | AccountTypeDto |  |
