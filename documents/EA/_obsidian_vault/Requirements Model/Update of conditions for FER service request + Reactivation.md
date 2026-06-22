---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23535 (CLM-6055) Update of conditions for FER service request"
domain: "Requirements Model"
element_id: 1810906
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Update of conditions for FER service request + Reactivation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23535 (CLM-6055) Update of conditions for FER service request

## 📝 Notes

Two new bool params added to FER service setting in PCG:
 

	
- useCurrentDate
	
- blockRequestReactivation


Update of UC / rules:
 

	
- {MOD}03.060 Calculate early repayment date
	
- {MOD}Get FER service setting rule
	
- {MOD}Limitation of ER due date selection range

if useCurrentDate is set then use nearest possible date as ER date (same as for system property FER_UseCurrentDayAsRepaymentDate) and limit range to this date only

{MOD}03.202 Extend or Reactivate ER request  + screen
if blockRequestReactivation is set then hide Reactivation button in list of LSR screen

## 📊 Appears In (1 diagrams)

- Custom: CBL-23535 (CLM-6055) Update of conditions for FER service request
