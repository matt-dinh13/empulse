---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules"
domain: "Modules"
element_id: 1870146
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get Application data by code from ADS (SUP)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Business Rules

## 📝 Notes

This rule describes getting data of a transaction application from ADS module based on applicationCode.

Input:

	
- applicationCode


output:

	
- ApplicationData object



	
- System calls GET method of ...ADS/v1/applications/{applicationCode}
	
- System returns the ApplicationData result. If ADS component is unavailable (timeout), system returns error message of MSG_ADS_NOT_AVAILABLE; e.g. Application Data System is not available.

## 🔗 Connections (1)

- ← Dependency: [[Validate Contract Supplement request]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Create Contract Service Supplement - Use Case Model
