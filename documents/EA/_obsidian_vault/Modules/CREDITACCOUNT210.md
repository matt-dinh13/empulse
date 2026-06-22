---
type: Class
stereotype: "output"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/Communication tables"
domain: "Modules"
element_id: 1309488
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 CREDITACCOUNT210

> **Type**: Class · **Stereotype**: «output»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/Communication tables

## 📝 Notes

This message is sent by OBS when a new revolving contract (REL) is created in OBS, i.e. after the first Credit110 message with filled account number is sent to OBS

## 🔗 Connections (2)

- → Dependency «transformation»: [[{DEL}ContractCreditAccountRequest (Class 1713642)]]
- ← Dependency «transformation»: [[{DEL}ContractCreditAccountResponse]]

## 📊 Appears In (2 diagrams)

- Logical: Contract - Communication tables
- Logical: Contract credit account - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| Date Open | date |  |
| Id Credit | number |  |
| Fail reason | CommResult |  |
| Num Account | string |  |
| Processed | boolean |  |
| Time stamp | datetime |  |
