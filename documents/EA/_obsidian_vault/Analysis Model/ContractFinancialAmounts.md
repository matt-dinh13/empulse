---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821406
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ContractFinancialAmounts

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Entity holding the information about the financial amounts of various types (e.g. paid, outstanding, refinanced etc.) related to a selected contract.

//RefinancedContractType.amountOfPrincipal, .amountOInterests, .amountOFees and .amountOPenalties to be possibly moved into this entity in the future.

## 🔗 Connections (1)

- ← Dependency «use»: [[{MOD}RefinancedContractType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| amountOfPrincipal | MoneyType |  |
