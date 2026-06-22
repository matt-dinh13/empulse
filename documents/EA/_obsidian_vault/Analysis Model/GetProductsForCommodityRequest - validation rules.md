---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case"
domain: "Analysis Model"
element_id: 1825190
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 GetProductsForCommodityRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case

## 📝 Notes

// Validation of request for getting products for commodity
// returned resultCode code is in bracket

Input:
- request (validation rules for request elements see below)

Output:
- resultCode

GetProductsForCommodityRequest

	
- salesroomCode
Mandatory
Exists Salesroom(S) where S.Code = salesroomCode and S.Status = Active(A) [INVALID_SALESROOM]
Current user is assigned as sales agent to the Salesroom [NOT_SALESROOMUSER]


	
- commodityType
Mandatory
Exists active Commodity Type (CT) where CT.Code = commodityType [INVALID_COMMODITYTYPE]


	
- productProfile
Optional
Exists Product Profile (PP) where PP.Code = productProfile and PP.InitialTransactionType = POS [INVALID_PRODUCTPROFILE]


	
- manufacturer
Optional
Exists Manufacturer (M) where M.Code = manufacturer [INVALID_MANUFACTURER]
	
- model
Optional
Maximum of 50 characters [INVALID_MODEL]

## 🔗 Connections (1)

- ← Dependency: [[{DEL}02.845 Provide Products for Finacing of Commodity for External system (UseCase 1820896)]]

## 📊 Appears In (1 diagrams)

- Use Case: Product Calculator for External system - Provide Data
