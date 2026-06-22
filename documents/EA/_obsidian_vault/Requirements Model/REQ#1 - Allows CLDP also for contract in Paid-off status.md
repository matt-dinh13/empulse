---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8776 (CLM-2825) Decrease credit limit for paid-off contracts"
domain: "Requirements Model"
element_id: 1504781
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Allows CLDP also for contract in Paid-off status

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8776 (CLM-2825) Decrease credit limit for paid-off contracts

## 📝 Notes

KZ needs to decrease credit limit for contracts also in Paid-Off status.

New global parameter CLDPExtraContractStatusList is created which defines comma separated list of additional possible contract statuses for CLDP (statuses Signed + Active is allowed by default).

Default value:  null (parameter is not used)
Value for KZ:  L

## 📊 Appears In (1 diagrams)

- Custom: CBL-8776 (CLM-2825) Decrease credit limit for paid-off contracts
