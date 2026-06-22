---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API"
domain: "Requirements Model"
element_id: 1878899
diagrams: 6
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Getting Commodity data rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-13568 (CLM-4182) - Pagination for commodity search REST API

## 📝 Notes

This rule describes way of getting commodity data based on commodityId array.
Input:

	
- commodityId[] - array of commodity identifiers



	
- System calls Commodity module REST API getCommodities with commodityId[] as request parameters.
	
- List of commodity attributes is received in the Commodity.
	
- If an error is received, system returns error message MSG_CommoditySystemUnavailable (e.g. "Commodity system is unavailable.")

## 🔗 Connections (7)

- ← Dependency: [[PaidContractChannel_SBA]]
- ← Dependency: [[Unique chassis and engine numbers]]
- ← Dependency: [[{MOD}Validate contract commodity]]
- ← Dependency: [[01.759 Get contract services for self-care (UseCase 1869812)]]
- ← Dependency: [[{MOD}01.758 Get contract commodities for self-care]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]
- ← Dependency: [[{MOD}Generate outgoing payment for contract]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
- Custom: Common Business Rules for Contract Management
- Use Case: Contract detail
- Use Case: Customer Self-Care API - Use Case Model
- Use Case: Show Insurance commodity
