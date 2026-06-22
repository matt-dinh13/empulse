---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/VN/Other/Other"
domain: "Analysis Model"
element_id: 1822835
diagrams: 3
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 X-sell code encoding

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/VN/Other/Other

## 📝 Notes

Encoding:

	
- Mulitply CUID*13 
	
- Convert to an array of bytes (the standard two's complement) 
	
- Decode using the base32 to string (discard all characters '=')


Decoding:

	
- Convert to uppercase 
	
- Append characters '=' to obtain valid base32 (string length must be divisible by 8) 
	
- Decode using base32 to byte array 
	
- Convert to the number (the standard two's complement) 
	
- Divided by 13 (to verify that it is divisible)

## 🔗 Connections (5)

- ← Dependency: [[X-sell offer code]]
- ← Dependency: [[X-sell offer code (Requirement 1127581)]]
- ← Dependency: [[Mapping CLIENT_SEARCH data to application form]]
- ← Dependency: [[CustomerPerson]]
- ← Dependency: [[{MOD}partyRole]]

## 📊 Appears In (3 diagrams)

- Custom: Other
- Custom: Other
- Custom: Product business rules
