---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Business Rules"
domain: "Analysis Model"
element_id: 1544254
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Address rules - PH

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Business Rules

## 📝 Notes

Mandatory territorial units and it's hierarchy ordered from top level:

	
- District (Province)
	
- Sub-district (Municipalities/Cities)
	
- Town (Barangay)


Sub-district, Town, and ZIP code can contain value from a related code list

If District is chosen then:

	
- List of possible Sub-districts is restricted to chosen District (note: if only one Sub-district is linked with the District, it is set as default)
	
- List of possible Towns is restricted to chosen District
	
- List of possible ZIP codes is restricted to District


If Sub-district is filled in and is equal to codelist value:

	
- List of possible Towns is restricted to chosen Sub-district

## 🔗 Connections (1)

- → Generalization: [[Address rules]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Edit Address - PH
- Custom: Edit Address on AF - PH
