---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Commodities validation"
domain: "Analysis Model"
element_id: 1789780
diagrams: 2
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 IMEI validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/IN/Commodities validation

## 📝 Notes

IMEI (International Mobile Station Equipment Identity) number is validated using Luhn algorithm (ISO/IEC 7812).

The format of the IMEI is 14 decimal digits plus a check digit: AA-BBBBBB-CCCCCC-D (it should be handed to validation without hyphens)

The IMEI number is validated in three steps:

	
- Double every even digit (starting from second digit from the left)
	
- Sum the digits - if result of doubling (step 1) is more than 9 add sum the digits of doubling result (e.g., 14 › 1 + 4 = 5).
	
- IMEI number is valid if the sum is divisible by 10.


e.g.: 
IMEI: 352301042845319

	
- double every even digit: 3 10 2 6 0 2 0 8 2 16 4 10 3 2 9
	
- sum the digits: 3+(1+0)+2+6+0+2+0+8+2+(1+6)+4+(1+0)+3+2+9 = 50
	
- is divisible by 10? yes! - it's a valid IMEI number

## 🔗 Connections (5)

- ← Dependency: [[IMEI]]
- ← Dependency: [[IMEI (GUIElement 1721996)]]
- ← Dependency: [[{DEL}CommodityDataRequest - validation rules]]
- ← Dependency: [[Commodity validation rule]]
- ← Dependency: [[{MOD}Commodity - validation]]

## 📊 Appears In (2 diagrams)

- Custom: Commodities validation
- Custom: Validation Rules
