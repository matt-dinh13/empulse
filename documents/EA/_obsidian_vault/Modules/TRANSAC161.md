---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1310055
diagrams: 2
connections: 3
tags:
  - class
  - modules
---

# 🔷 TRANSAC161

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

Purpose of this message is to inform banking system (OBS) about reconciliation of a transaction. Each reconciliation record is sent in a separate message Transac161.

Note:
This table has no related Result190 - all result are sent only via results to head element, i.e. to TRANSHEAD160

## 🔗 Connections (3)

- ← Dependency «transformation»: [[TransactionReconciliationDto (Class 1223771)]]
- → Dependency «use»: [[TRANSAC161 ReconciliationType]]
- → Dependency «use»: [[RecordTypeInform]]

## 📊 Appears In (2 diagrams)

- Logical: REL Account Transactions - Communication model
- Logical: REL Account Transactions - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| IdCredit | number |  |
| TimeStamp | dateTime |  |
| IdTransaction | number |  |
| {MOD}TransactionSource | {DEL}TRANSHEAD160 SourceType |  |
| IdReconciliation | number |  |
| ReconciliationType | TRANSAC161 ReconciliationType |  |
| TypeInform | RecordTypeInform |  |
| Amount | decimal |  |
