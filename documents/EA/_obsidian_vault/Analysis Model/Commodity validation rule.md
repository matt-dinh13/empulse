---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773425
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Commodity validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- Color
	
- deliveryType-must be value of Delivery Type.Code
	
- engineNumber
	
- modelNumber
	
- name
	
- price- if commodityID is not on input, mandatory.
	
- producerName  -  Must be empty, if producerCode is not empty; 
	
- producerCode - ,  Must be empty, if producerName is not empty; 
	
- serialNumber
	
- type -  If commodityID is not on input, then mandatory. ownershipBookNumber
	
- vehicleRegistrationNumber
	
- vehicleRegistrationExpirationDate
	
- licencePlaceNumber
	
- IMEI
	
- commodityID - must exist in appropriate Contract 2 Commodity.Commodity ID
	
- MSISDN 
	
- SKU 
	
- Year - must be 4-digit number > 1900

## 🔗 Connections (3)

- → Dependency: [[IMEI validation]]
- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[MSISDN (Requirement 1324092)]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
