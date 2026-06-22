---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module"
domain: "Requirements Model"
element_id: 1688863
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-3768 Remove CLM dependencies on Commodity Module

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module

## 📝 Notes

Migrate following use cases from SOAP to REST:

	
- Contraft full info message (CFI) which contains list of commodities for contract


	
- ContractOpenApiRestV1 and V2 - getCommodities (UC01_758) - example url: https://bsl.vn00a1.cz.infra/bsl/openapi/v1.0/customers/ {CUID}; /contracts/{CONTRACT_NUMBER}/commodities
	
- Contract validation during registration when transaction type is POS (product purchase) and this is for all three cases - register from UI, WS and automatically after sign (UC01_273, UC01_271, UC01_270)
	
- Edit commodity form in contract detail commodity tab - model for editing loading and saving is affected (see screenshot)


This migration is under following switches:

	
- CLM Feature Flag commodityModuleCleanup
	
- CLM Feature Flag updateCommodityRest

## 📊 Appears In (1 diagrams)

- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
