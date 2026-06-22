---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-21155 (CLM-6898) Business event list filtering according to privilege"
domain: "Requirements Model"
element_id: 1848213
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Business event filtering

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-21155 (CLM-6898) Business event list filtering according to privilege

## 📝 Notes

1/ each business event type definition (BE) will contain security level, currently there will be just 0 (null) or 1 (can be extended in future if needed)

	
- null will be kept for BE which should be visible for all regardless on privileges (in CBL removed = NO)
	
- 1 will be set for BE which should be hidden if user do not have specific right (in CBL removed=YES)


2/ new privilege will be created for access of BE with sec. level1, eg. UC01_210_BESL1

	
- this new privilege will be assigned to selected roles only (eg. all roles except listed) - to be clarified by country
	
- It means user without UC01_210_BESL1 will see just basic BE, user with UC01_210_BESL1 will see all BE as now.


WARNING: Business events are shown in Contract detail page but also in Application detail page, both should be updated.

LDM:

	
- table HO.BSL_BUSINESS_EVENT_TYPE - add new int column SecurityLevel, keep null value as default
	
- prepare sql script to update SecurityLevel value to 1 for all records except listed codes in CBL (removed=NO)


Privilege:

	
- add new privilege UC01_210_BESL1
	
- update privilege map (XLS + script) according to role list - add UC01_210_BESL1 and assign to specified roles (probably all except listed in CBL, clarification with country in progress)


UC01.210 Show contract detail Contract detail page + Application detail page

	
- update functionality for loading of business events to show BE according setting and user rights
	
- condition:

visible=1 (current func)
AND
(SecurityLevel = NULL OR 0) OR (SecurityLevel = 1 AND UC01_210_BESL1 is assigned)

## 📊 Appears In (1 diagrams)

- Custom: CBL-21155 (CLM-6898) Business event list filtering according to privilege
