---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1310052
diagrams: 2
connections: 7
tags:
  - class
  - modules
---

# 🔷 TRANSACHEAD160

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

Purpose of this message is to inform banking system (OBS) about a new transaction.
OBS uses this message just to account for currency translation in case of foreign transactions. Transactions themselves are then recorded on basis of reconciliation sent in TRANSAC161 messages, because one transaction may be divided to multiple reconciliation records.

## 🔗 Connections (6)

- → Dependency «use»: [[CommResult]]
- → Dependency «use»: [[TRANSHEAD160 TransactionDirection]]
- → Dependency «use»: [[TRANSHEAD160 OperationReasonType]]
- → Dependency: [[REL Allocation Type]]
- → Dependency: [[TRANSACHEAD160TypeInform]]
- ← Dependency «transformation»: [[TransactionMessageDto (Class 1347890)]]

## 📊 Appears In (2 diagrams)

- Logical: REL Account Transactions - Communication model
- Logical: REL Account Transactions - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| IdCredit | number |  |
| AccountNumber | string |  |
| {MOD}Source | {DEL}TRANSHEAD160 SourceType |  |
| TypeInform | RecordTypeInform |  |
| TimeStamp | date |  |
| IdResult190 | number |  |
| ResultCode | CommResult |  |
| IdTransaction | number |  |
| {ADD}SourceTrxID | number |  |
| OperationReason | TRANSHEAD160 OperationReasonType |  |
| Direction | TRANSHEAD160 TransactionDirection |  |
| AmountTrans | decimal |  |
| CurrencyTrans | number |  |
| AmountSett | decimal |  |
| CurrencySett | number |  |
| AmountAccount | decimal |  |
| CurrencyAccount | number |  |
| ExchangeRateAccount | decimal |  |
| BillingDate | date |  |
| TransactionType | string |  |
| SellerplaceCode | string |  |
| PackCount | number |  |
| TargetAccountNumber | string |  |
| {ADD}IdOrigTransaction | number |  |
| {ADD}PaymentSymbols | BLOB |  |
| {ADD}Allocation | REL Allocation Type |  |
