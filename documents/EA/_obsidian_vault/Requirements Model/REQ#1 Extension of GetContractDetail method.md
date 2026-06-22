---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-622 (CBL-219) Credit Card MMIL definition"
domain: "Requirements Model"
element_id: 1271199
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Extension of GetContractDetail method

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-622 (CBL-219) Credit Card MMIL definition

## 📝 Notes

It is required following:
Sum instalments from following period (month) in BSL = Close end loans sum instalments for following period
Close end loans sum instalments for next period – it is total of instalments from all close end loans which have due dates in following period.
We suppose to use ContractWS - > GetContractList method (to return all client's contracts) and GetContractDetail (to get data for calculation sum of installments.

## 📊 Appears In (1 diagrams)

- Custom: CLM-622 (CBL-219) Credit Card MMIL definition
