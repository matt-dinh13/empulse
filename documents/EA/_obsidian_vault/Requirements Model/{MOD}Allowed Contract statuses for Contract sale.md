---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4472 (CLM-1687) PH Contract Debt Sale"
domain: "Requirements Model"
element_id: 1536031
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Allowed Contract statuses for Contract sale

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4472 (CLM-1687) PH Contract Debt Sale

## 📝 Notes

{DEL CLM-1687}This rule defines allowed contract statuses for the Contract sale feature:

Set allowed contract statuses as follow:

	
- L (paidoff)
	
- if AllowWrittenoff4ContractSale (system property) = 1 add H (written-off){/DEL}


{ADD CLM-1687}Allowed contract status are specified in global database parameter SaleContractStatuses.{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[01.802 Process sold contracts file (UseCase 1839172)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-4472 (CLM-1687) PH Contract Debt Sale
- Use Case: Import sold contracts file
