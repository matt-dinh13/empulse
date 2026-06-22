---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Use case model"
domain: "Analysis Model"
element_id: 750813
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Find Tariff Items by Tariff Item Type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Fees-back/Use case model

## 📝 Notes

This rule describes getting Tariff Items from a Tariff by provided Tariff Item Type with regard on Current Tariff Use flag setting.
Either tariff version or contract (contract service) must be specified.

Input parameters:

	
- TariffItemType
	
- Contract
	
- ContractService (optional)
	
- TariffVersion (optional)


Output:

	
- list of TariffItem


Steps:
1. For the provided TariffItemType
1.1 If tariff version parameter is not specified on input then 
1.1.1 System finds tariff version according to Algorithm: Find tariff by Current Tariff Use flag with parameters: TariffItemType, Contract, ContractService
1.2 System finds all Tariff Items assigned to tariff where tariff.TariffItem.TarifItemType = provided TariffItemType and adds them to the result list.
2. System returns the result list.

## 🔗 Connections (2)

- ← Dependency: [[Get related tariff item to discount]]
- → Dependency: [[Algorithm_ Find tariff by Current Tariff Use flag]]

## 📊 Appears In (1 diagrams)

- Use Case: Fees-back service evaluation and processing
