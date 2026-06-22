---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals"
domain: "Requirements Model"
element_id: 1586679
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Get Fees charged to principal

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-998 (CBL-10543) CET via MobApp and Terminals

## 📝 Notes

{ADD IS-998 /}
This rule describes how to get tariff items used for charging a fee (or fees) to the processed contract service. 
Input:

	
- ContractServiceId

Output:

	
- OriginalFeeAmountInPrincipal


Steps:

	
- For the chosen ContractService[where externalId = ContractServiceId] related to the processed Contract
- get OriginalFeeAmountInPrincipal from calculated Financial Parameters Items.Item Amount used for the processed Contract Service (i.e. Contract Service -> FP Service Tariff Item ->Tariff Item -> Tariff Item Type with Tariff Item Usage = S(Service) and Tariff Item Type.Flag Type = TO_PRINCIPAL and Tariff Item Type.Charging Periodicity = ONE_TIME)
	
- Returns OriginalFeeAmountInPrincipal

## 🔗 Connections (1)

- ← Dependency: [[{MOD}03.070 Calculate early repayment amount]]

## 📊 Appears In (1 diagrams)

- Custom: IS-998 (CBL-10543) CET via MobApp and Terminals
