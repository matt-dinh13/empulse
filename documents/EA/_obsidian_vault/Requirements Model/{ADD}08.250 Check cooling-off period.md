---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1530 (CBL-4170) COP logic enhancement"
domain: "Requirements Model"
element_id: 1862259
diagrams: 3
connections: 2
tags:
  - usecase
  - requirements-model
---

# 🎯 {ADD}08.250 Check cooling-off period

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1530 (CBL-4170) COP logic enhancement

## 📝 Notes

{ADD CBL-5507 PAYM-2254_REQ1 /}

THIS UC WAS ORIGINALLY IMPLEMENTED AS A DB PROCEDURE (PART OF ODS)

This use case evaluates whether the Cooling-off period service is applicable for the checked contract. If so, the contract is forwarded to processing (see 08.252 Process cooling-off period use case).

## 🔗 Connections (1)

- ← UseCase «include»: [[{ADD}08.004 Check and process services on contract]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-1530 (CBL-4170) COP logic enhancement
- Use Case: Cooling-off period processing
- Use Case: Evaluation of services on system events (Java)
