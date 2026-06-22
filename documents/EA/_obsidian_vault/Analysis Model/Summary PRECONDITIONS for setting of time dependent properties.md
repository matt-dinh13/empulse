---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules"
domain: "Analysis Model"
element_id: 1623719
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Summary PRECONDITIONS for setting of time dependent properties

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Business Rules

## 📝 Notes

Following rules are defined for time dependent properties to keep consistent history of setting.
Note: 
TODAY is date, which part is in past. Because the smallest time unit is one day, TODAY is supposed to be in past.
Preconditions:

	
- If End of validity < TODAY then all active operations (editing, termination) are disabled.
	
- If start of validity <= TODAY and end of validity >= TODAY then only end of validity can be changed.
It allows to terminate (end of validity = TODAY), prolong or shorten already valid interval of validity (end of validity > TODAY).
	
- If change of business attribute is required in already active validity interval (Start of validity <= TODAY) , it is necessary to terminate active interval of validity and create new one with start of validity(new) = end of validity(old) + 1.
	
- It is possible to remove only intervals with start of validity > TODAY. 
Note: Logical meaning of "Remove" is setting invalid, not physically delete.


	
- Removed intervals are no longer displayed.
	
- All other records are still displayed (can be controlled by filtering of History in particular cases).

When comparing date values the rule Start and end of validity if only date is entered is respected.

## 🔗 Connections (1)

- → Dependency: [[Start and end of validity if only date is entered]]

## 📊 Appears In (1 diagrams)

- Custom: Time dependent business objects
