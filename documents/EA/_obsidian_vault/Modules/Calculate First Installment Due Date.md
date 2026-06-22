---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Installment Schedule Dates/CEL/Business rules"
domain: "Modules"
element_id: 1533900
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Calculate First Installment Due Date 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Installment Schedule Dates/CEL/Business rules

## 📝 Notes

// This algorithm evaluates First Installment Due Date for CEL products 

Input:

	
- LoanProvidingDate (optional) - date when the loan is provided to client (start of the first period for interest calculation).


	
- DayShift - number of days for evaluation of LoanProvidingDate. 
Used only if LoanProvidingDate is not defined on input.


	
- PreferredDay  (optional) - day in month preferred as due day by client


	
- FastDueDate - flag which determines if first due date will be right after contract sign date without month delay.
{DEL PCG-2355}Used only if PreferredDay  is not defined on input.{/DEL}


	
- DueDaysMap - map of enabled due days; specify which day in a month are allowed to be FirstDueDate. Defined in form of sequence of characters 0 and 1; day in month is represented by its position and character 1 means allowed day, e.g. 001111111111111111111111111100 means that only days from 3 till 26 are allowed


	
- EOMSpread - flag true/false; if true then the FirstDueDate is spread out to prevent of peak, which can appear when LoanProvidingDate is around the EOM and days around EOM are prohibited in DueDaysMap
Used only if PreferredDay  is not defined on input.


	
- MinDaysAfterLoanProvidingDate - specifies that FirstDueDate must be at least this number of days after LoanProvidingDate


	
- MaxDaysAfterLoanProvidingDate - specifies that FirstDueDate must be maximally this number of days after LoanProvidingDate.
Used only if DeferredPeriodLength <= 0.


	
- MinDaysAfterPreferredDay - specifies that FirstDueDate must be at lest this number of days after PreferredDay .
Used only if PreferredDay  is defined on input.


	
- DeferredPeriodLength - number of months for postponing of the first due date


	
- AddDeferredPeriodToResult - boolean; specifies how deferred period will be reflected in algorithm. If True then number of months defined by DeferredPeriodLength is added to final FirstDueDate. Else the deferred period is incorporated into calculation, i.e. in such case the calculated FirstDueDate can be a bit earlier. 
Used only if DeferredPeriodLength > 0.


Output: 

	
- FirstDueDate - returns NULL if the FirstDueDate cannot be calculated


	
- LoanProvidingDate


If LoanProvidingDate is not defined on input then
-- LoanProvidingDate = current date + DayShift

If PreferredDay  is provided then continue in step :PREFDD 

// A. Preferred Day IS NOT provided
:NOPREFDD
InitDate = LoanProvidingDate 

If EOMSpread = True then InitDate is adjusted as follows:
// Spread InitDate into days around EOM
-- InitDay = Day (InitDate)
-- FirstDay = position of the first ‘1’ in DueDaysMap
-- LastDay = position of the last ‘1’ in DueDaysMap. 
-- If InitDay > LastDay 
---- Then InitDate = date of FirstDay in next month following InitDate  + (InitDay – LastDay – 1)
---- Else
------ If InitDay < FirstDay then InitDate = date of FirstDay in the same month as InitDate + (InitDay + 31 – LastDay - 1)

// By default add one month to InitDate (not for FastDueDate)
If FastDueDate = False then add 1 month to InitDate.

// Find closest possible due dates (previous, next)
Find the PreviousPossibleDueDate as closest date before InitDate where PreviousPossibleDueDate <= InitDate and PreviousPossibleDueDate is allowed by DueDaysMap.
Find the NextPossibleDueDate as closest date after InitDate where NextPossibleDueDate >= InitDate and NextPossibleDueDate is allowed by DueDaysMap.

// Reflect Deferred Period
If AddDeferredPeriodToResult = false then add number of months defined by DeferredPeriodLength to 
- PreviousPossibleDueDate
- NextPossibleDueDate 

// Calculate FirstDueDate
IF the PreviousPossibleDueDate – LoanProvidingDate < MinDaysAfterLoanProvidingDate
THEN
// PreviousPossibleDueDate is too close to LoanProvidingDate, so use NextPossibleDueDate 
-- FirstDueDate = NextPossibleDueDate
-- If NextPossibleDueDate – LoanProvidingDate < MinDaysAfterLoanProvidingDate then
---- // NextPossibleDueDate is too close to LoanProvidingDate, find the next one (limit MaxDaysAfterLoanProvidingDate is ignored) 
---- Find FirstDueDate as closest date after NextPossibleDueDate where FirstDueDate – LoanProvidingDate >= MinDaysAfterLoanProvidingDate and is allowed by DueDaysMap.
ELSE
// Select closer from PreviousPossibleDueDate and NextPossibleDueDate
-- If (InitDate – PreviousPossibleDueDate) < (NextPossibleDueDate – InitDate)
---- then FirstDueDate = PreviousPossibleDueDate
---- else FirstDueDate = NextPossibleDueDate

Continue in step :COMMON

// B. Preferred Day IS provided
:PREFDD
FirstDueDate = NULL
If PreferredDay is not in interval (1..28) then 
-- continue in step :RETURN
// Find NextPossibleDueDate
Set InitDate as date in month defined by LoanProvidingDate where day = PreferredDay  
InitDate = InitDate + MinDaysAfterPreferredDay
Find the NextPossibleDueDate as closest date where NextPossibleDueDate >= InitDate and is allowed by DueDaysMap.

// Reflect Deferred Period
If AddDeferredPeriodToResult = false then add number of months defined by DeferredPeriodLength to NextPossibleDueDate .

{ADD PCG-2355} // Ensure that NextPossibleDueDate is after LoanProvidingDate
If NextPossibleDueDate < LoanProvidingDate then add 1 month to NextPossibleDueDate
{/ADD}
// Add 1 month if NextPossibleDueDate is too close to LoanProvidingDate (less than half of month)
{ADD PCG-2355}If FastDueDate = False // do not add month when FastDueDate = True
then{/ADD}
	If (LoanProvidingDate + 1 month - NextPossibleDueDate) >= (NextPossibleDueDate - LoanProvidingDate)
	-- Add 1 month to NextPossibleDueDate.

:LOOP1
If NextPossibleDueDate – LoanProvidingDate < MinDaysAfterLoanProvidingDate then
-- // NextPossibleDueDate is too close to LoanProvidingDate 
-- Add 1 month to the NextPossibleDueDate and go back to step :LOOP1.

FirstDueDate = NextPossibleDueDate

// Common part of calculation
:COMMON

// Check MaxDaysAfterLoanProvidingDate
If DeferredPeriodLength = 0 or not defined on input then 
-- If FirstDueDate – LoanProvidingDate > MaxDaysAfterLoanProvidingDate then FirstDueDate = NULL

// Reflect Deferred Period
If DeferredPeriodLength > 0 and AddDeferredPeriodToResult = True then 
-- Add number of months defined by DeferredPeriodLength to FirstDueDate. 

:RETURN
Return FirstDueDate, LoanProvidingDate

## 🔗 Connections (1)

- ← Dependency: [[First Installment Due Date determination]]

## 📊 Appears In (2 diagrams)

- Custom: CEL Installment Schedule Dates determination
- Custom: First Installment Due Date for Application/Contract
