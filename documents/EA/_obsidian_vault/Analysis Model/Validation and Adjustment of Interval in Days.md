---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Validation rules/Common for all variants"
domain: "Analysis Model"
element_id: 1789758
diagrams: 9
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Validation and Adjustment of Interval in Days

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/COMMON for Common for BSL/Validation rules/Common for all variants

## 📝 Notes

Input:

	
- DateFrom - optional
	
- DateTo - optional
	
- MaxDays - maximal length of interval in days (mandatory)
	
- RestrictIfNonLimit - defines if the interval has to be restricted to last MaxDays if no limit is entered - optional, default True



Output:

	
- DateFrom
	
- DateTo


If the both values DateFrom/To are entered then DateTo must be greater or equal to DateFrom (MSG_COMPARE_GREATER_THAN_EQUAL_DATE).

	
- If the both values DateFrom/To are entered then the maximal length of interval is MaxDays (MSG_MaxLengthInDays, ${Maxdays}). 
	
- If DateFrom is not filled and DateTo  is filled in then the filter for DateFrom is set to the date just MaxDays before DateTo .
	
- If DateTo  is not filled and DateFrom is filled in then the filter for DateTo is set to Minimum of (date just MaxDays after DateFrom, current date).


	
- If RestrictIfNonLimit = True and none of the values DateFrom/To is entered then the filter for DateFrom is set to the date just MaxDays before current date.

## 🔗 Connections (8)

- ← Dependency: [[{MOD}Rules for Entering Outgoing Payment Search criteria - STANDARD]]
- ← Dependency: [[{MOD}Rules for Entering Outgoing Payment Search criteria - CANCELED]]
- ← Dependency: [[{MOD}Rules for Entering Outgoing Payment Search criteria - CUSTOM]]
- ← Dependency: [[{MOD}Rules for Entering Outgoing Payment Search criteria - PARTNER]]
- ← Dependency: [[{MOD}Rules for Entering Outgoing Payment Search criteria - BLOCKED]]
- ← Dependency: [[Rules for Entering Outgoing Payment Search criteria - PAID]]
- ← Dependency: [[{MOD}Rules for Entering Outgoing Payment Search criteria - POS]]
- ← Dependency: [[{MOD}Rules for Entering Outgoing Payment Search criteria - ORIGINATING POS]]

## 📊 Appears In (9 diagrams)

- Custom: General rule tasks
- Custom: Search criteria - BLOCKED
- Custom: Search criteria - CANCELED
- Custom: Search criteria - CUSTOM
- Custom: Search criteria - ORIGINATING POS
- Custom: Search criteria - PAID
- Custom: Search criteria - PARTNER
- Custom: Search criteria - POS
- Custom: Search criteria - STANDARD
