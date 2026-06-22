---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules"
domain: "Modules"
element_id: 1851657
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 CARD service parameter validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules

## 📝 Notes

CARD

	
- INSTANT_CARD_TYPE
must exist in list obtained by Get list of card types where personalized = false [INVALID_CARD_TYPE]
	
- PERSONALIZED_CARD_TYPE
must exist in list obtained by Get list of card types where personalized = true [INVALID_CARD_TYPE]
	
- POSTPONED_ACTIVATION_MONTHS
equal or higher than 0 [INVALID_NUMBER]
mandatory [REQUIRED]
	
- POSTPONED_ACTIVATION_OFFSET
equal or higher than 0 [INVALID_NUMBER]
mandatory [REQUIRED]
	
- POS_DELIVERY_ALLOWED
can be true only when card type selected in PERSONALIZED_CARD_TYPE has handoverType in (POS, ALL)
	
- CUSTOMER_ADDRESS_DELIVERY_ALLOWED
can be true only when card type selected in PERSONALIZED_CARD_TYPE has handoverType in (CUSTOMER, ALL)

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Service Catalog Service - validation]]
- → Dependency: [[{ADD}Get list of card types]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
