---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model"
domain: "Modules"
element_id: 1705423
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Check Commodity type data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program functionalities/Use Case Model

## 📝 Notes

This rule presents a list of checks for commodity eligibility

Input:

	
- EligibleCommodityType (array) (from Insurance Program setting)
	
- commodityData
- orderId
- commodityActivationDate (optional)
- commodityPrice (optional)
- commodityTypeCode
	
- ignoreMissingValues
	
- ReferenceDate



Output:

	
- CommodityResult.result (possible codes: PASSED/FAILED); .orderId = commodityData.orderId
	
- CommodityResult.resultDetails in ResultDetail (checkedItem, checkResult) array (optional)


Steps:

	
- System checks the commodityTypeCode is included in the EligibleCommodityType.Commodity Type Code list -- check Commodity Type eligibility
- if so, set CommodityResult.result = PASSED
- else set CommodityResult.result = FAILED, add into ResultDetail[checkedItem = 'CommodityType', checkResult = INSR_IneligibleCommodity] and Exit rule with CommodityResult
	
- If EligibleCommodityType.Max Days After Activation value exists,
- if commodityActivationDate is NULL
--- ignoreMissingValues = 1 and CommodityResult.result is NULL, system sets CommodityResult.result = PASSED,
--- ignoreMissingValues = 0, system sets CommodityResult.result = FAILED
--- add into ResultDetail[.checkedItem = 'commodityActivationDate', checkResult = INSR_CommodityDateActivationMissing] 
- if commodityActivationDate > current_date then add into ResultDetail[.checkedItem = 'commodityActivationDate', checkResult = INSR_CommodityDateActivationInvalid] -- Commodity Date activation cannot be in future
System checks ReferenceDate <= commodityActivationDate + Add Days (Max Days After Activation) -- check Commodity Date activation
- if not, set CommodityResult.result = FAILED, add into ResultDetail[.checkedItem = 'commodityActivationDate', checkResult = INSR_CommodityActivationDateIneligible
	
- If EligibleCommodityType.Minimal Price value exists, 
- if commodityPrice is NULL,
--- ignoreMissingValues = 1 and CommodityResult.result is NULL, system sets CommodityResult.result = PASSED,
--- ignoreMissingValues = 0, system sets CommodityResult.result = FAILED
--- add into ResultDetail[.checkedItem = 'commodityPrice', checkResult = INSR_CommodityPriceMissing] and Exit rule with CommodityResult 
System checks commodityPrice >= EligibleCommodityType.Minimal Price.
- if not, set CommodityResult.result = FAILED, add into ResultDetail[.checkedItem = 'commodityPrice', checkResult = INSR_CommodityPriceIneligible
	
- Return CommodityResult

## 🔗 Connections (1)

- ← Dependency: [[Check Insurance Eligibility based on Commodity data]]

## 📊 Appears In (1 diagrams)

- Use Case: Insurance Program functions
