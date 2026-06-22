---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules"
domain: "Analysis Model"
element_id: 1854268
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Filter for Transaction date From/To for Incoming payments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules

## 📝 Notes

Input:
- Transaction Date From
- Transaction Date To
- Maximal length of interval in days (MaxDays)

If the both values are entered then TransactionDateTo must be greater or equal to TransactionDateFrom (MSG_COMPARE_GREATER_THAN_EQUAL_DATE).
If MaxDays is not null then

	
- If both the values Transaction date From/To are entered then the maximal length of interval is MaxDays (MSG_BrowseInPayMaxDaysPeriod, ${Maxdays}). 
	
- If Transaction date From is not filled and Transaction date To is filled in then the filter for Transaction date From is set to the date just MaxDays before Transaction date To.
	
- If Transaction date To is not filled and Transaction date From is filled in then the filter for Transaction date To is set to Minimum of (date just MaxDays after Transaction date From, current date).
	
- If none of the values Transaction date From/To is entered then the filter for Transaction date From is set to the date just MaxDays before current date.

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
