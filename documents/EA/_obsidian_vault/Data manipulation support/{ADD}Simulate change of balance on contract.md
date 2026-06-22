---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract service manipulations"
domain: "Data manipulation support"
element_id: 1380103
diagrams: 1
connections: 1
tags:
  - usecase
  - data-manipulation-support
---

# 🎯 {ADD}Simulate change of balance on contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Data manipulation support/HS3.0 and later/Contract service manipulations

## 📝 Notes

{ADD PAYM-551 CBL-691 /}

This mBean triggers 05.184 Reflect change of balance for a specified contract to a specified date. It is mostly used in case of unsuccessful processing of a contract service. After a correction of a contract, running this MBean will process the unprocessed contract service. It is necessary to reactivate the service request in case it's already canceled or terminated before running this MBean.

## 🔗 Connections (1)

- → Dependency: [[{MOD}05.184 Reflect change of balance]]

## 📊 Appears In (1 diagrams)

- Use Case: Contract service manipulations
