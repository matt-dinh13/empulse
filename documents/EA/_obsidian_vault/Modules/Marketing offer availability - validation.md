---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Validation Rules"
domain: "Modules"
element_id: 1565114
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Marketing offer availability - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Sales Features/Validation Rules

## 📝 Notes

MarketingOfferAvailabilityInputDto 
Validations:

	
- salesroom
mandatory
salesroom must exists in Salesroom 
[INVALID_SALESROOM]


MarketingOfferAvailabilityInputItemDto 
Validations:

	
- requestId
mandatory [MISSING_REQUEST_ID]
must be unique in whole request MarketingOfferAvailabilityInputDto [NONUNIQUE_REQUEST_ID]

## 🔗 Connections (1)

- ← Dependency: [[POST marketing offer availability]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
