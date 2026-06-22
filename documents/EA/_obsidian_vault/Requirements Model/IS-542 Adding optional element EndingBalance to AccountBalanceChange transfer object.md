---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-441 (CBL-2216) Ending balance repository for credit card contracts"
domain: "Requirements Model"
element_id: 1290890
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 IS-542 Adding optional element EndingBalance to AccountBalanceChange transfer object

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-441 (CBL-2216) Ending balance repository for credit card contracts

## 📝 Notes

As LCS (LOXON Collection System), I want to receive an information about ending balance of REL account on account balance change.

As CaBus, I want to be able to send an information about ending balance of REL account on account balance change.

In order to achieve this the AccountBalanceChange transfer object which is used for generating JMS message will be extended with an optional element EndingBalance (Money data type).

## 🔗 Connections (1)

- → Generalization: [[IS-441 (CBL-2216) Ending balance repository for credit card contracts (Requirement 1290889)]]

## 📊 Appears In (1 diagrams)

- Custom: IS-441 (CBL-2216) Ending balance repository for credit card contracts
