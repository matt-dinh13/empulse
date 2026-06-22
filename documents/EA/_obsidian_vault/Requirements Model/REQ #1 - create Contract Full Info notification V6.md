---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7957 (CLM-2467) Update ContractFullInfo message with Financing Schema"
domain: "Requirements Model"
element_id: 1486358
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - create Contract Full Info notification V6

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7957 (CLM-2467) Update ContractFullInfo message with Financing Schema

## 📝 Notes

Goal of this requirement is to create Contract Full Info notification V6, which have following modifications compare to previous version:

ContractCommodity

	
- commodityTypeCode – make attribute optional
	
- producer – make attribute optional
	
- price – make attribute optional


Notification: As the result all parameters except commodityExchangeId will be optional in the class ContractCommodity.

ContractParameter

	
- productCode – remove attribute
	
- productName – make attribute optional
	
- productVariantCode – make attribute optional
	
- netCashPayment – make attribute optional
	
- product – add attribute
	
- financialSchema – add attribute
	
- financialSchemaVariantCode – add attribute


Notification: Contract Full Info notification V5 will be preserved and will be available together with V6. Version will be included in JMS header, so OSB team can proceed them accordingly.

## 📊 Appears In (1 diagrams)

- Custom: CBL-7957 (CLM-2467) Update ContractFullInfo message with Financing Schema
