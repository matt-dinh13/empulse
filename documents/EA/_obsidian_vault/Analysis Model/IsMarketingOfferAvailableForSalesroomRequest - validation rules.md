---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/Validation rules"
domain: "Analysis Model"
element_id: 1401687
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 IsMarketingOfferAvailableForSalesroomRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/«functionality» COMMON for Common for Sales Network Management/{ADD}Sales Features/Validation rules

## 📝 Notes

{ADD PCG-1344/}
// Validation of IsMarketingOfferAvailableOnSalesroomRequest 
If any validation fails for attribute then
Add new record with
- validationCode (defined in brackets)
- description (if defined)
- isAvailable - false
into checkAvailabilityResponse 

Validations:

	
- salesroom
Mandatory [MISSING_SALESROOM]
Salesroom must exist [INVALID_SALESROOM]
Salesroom must be active [INACTIVE_SALESROOM]
	
- serialNumber
Mandatory [MISSING_SERIALNUMBER]
serialNumber must be unique in a request scope [NONUNIQUE_SERIALNUMBER]

## 🔗 Connections (1)

- ← Dependency: [[{ADD}09.501 Marketing Offer Available For Salesroom]]

## 📊 Appears In (2 diagrams)

- Logical: Validation rules
- Use Case: Sales Features
