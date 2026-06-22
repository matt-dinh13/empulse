---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules"
domain: "Modules"
element_id: 1878999
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 SN duplicity check

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Business Rules

## 📝 Notes

// Checking duplicity of SN

Input:
- SerialNumber

Output:
- ValidationResult - boolean, true if successful (there is no sn duplicity)
 

	
- System finds in Commodity all commodities where Commodity.SerialNumber = SerialNumber and Commodity.Status = USED
	
- If there is any entry found (excluding commodity that is being validated) then ValidationResult = false and system fills a log to Commodity duplication validation with all the found commodities to Commodity Duplication Validation List
else ValidationResult = true

## 🔗 Connections (1)

- ← Dependency: [[Commodity Validation algorithm]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
