---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model"
domain: "Modules"
element_id: 1310054
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 ACCOPER156

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model

## 📝 Notes

Through this table the banking system is informed that a new item (fee or interest) was charged by HoSel on a contract and needs to be moved from credit account to the respective account of the bank. 
Message is also used for canceling already charged items.

## 🔗 Connections (4)

- → Dependency «use»: [[CommResult]]
- → Dependency «use»: [[ACCOPER156 CancelFlagType]]
- → Dependency «use»: [[ACCOPER156 OperationType]]
- ← Dependency «transformation»: [[CELFeeAccountTransaction]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Account Transactions - Communication model
- Logical: CEL Account Transactions - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| IdCredit | number |  |
| OperType | ACCOPER156 OperationType |  |
| OperValue | decimal |  |
| CancelFlag | ACCOPER156 CancelFlagType |  |
| IdSource | number |  |
| TimeStamp | dateTime |  |
| IdResult190 | number |  |
| ResultCode | CommResult |  |
