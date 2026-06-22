---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Address/Validation rules"
domain: "Analysis Model"
element_id: 1280595
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}SN Address validation rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Address/Validation rules

## 📝 Notes

Address structures are country specific, if not specified in any variant then following limits are valid for all variants.

	
- Block
max.30 chars
	
- Block set
max.30 chars
	
- Country	
code max.3 chars.; reference to Country;
	
- District 	
code max.30 chars.; reference to District;
	
- Flat 	
max.20 chars
	
- Floor 	
max.10 chars
	
- House number 	
max. 55 chars
	
- Landmark 	
max. 60 chars
	
- Locality 	
max. 40 chars
	
- Region 	
code max.30 chars.; reference to Region;
	
- Street name 	
max. 40 chars
	
- Sub-district 	
code 30 chars.; reference to SubDistrict;
	
- Town 	
max.255 chars
	
- ZIP code 	
max.20 chars; reference to ZIPcode list
	
- Role type	
Mandatory; enumeration of [BP, POST, REG]; max.4 chars


For KZ variant see KZ address validation rules

## 🔗 Connections (3)

- ← Dependency: [[Edit Address]]
- ← Dependency: [[SNM synchronization - validation rules]]
- → Dependency: [[KZ address validation rules]]

## 📊 Appears In (2 diagrams)

- Custom: SN Address validation rules
- Custom: Synchronization validation rules
