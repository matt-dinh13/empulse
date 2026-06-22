---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Use Case"
domain: "Analysis Model"
element_id: 1746891
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Assignment of Product to Salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Use Case

## 📝 Notes

Abbreviations:
IAV = required interval of validity of product assignment to salesroom
StartIAV = Start of IAV
EndIAV = End of IAV
S2P = product assignment to salesroom
Date+time is described in format (DD/MM/YYYY HH:MM:SS)

Transformation to date+time:
If StartIAV = TODAY it is transformed to current date+time else to StartIAV 00:00:00.
Date EndAV is transformed to date+time: EndIAV 23:59:59 (if it is not empty).

If EndIAV is null then the interval of validity of required assignment is right open. 
If S2P.ValidTo is null then the interval of validity of existing assignment is right open. 

Assignment:
1) If exists S2P where current date+time is in interval <SP.ValidFrom, SP.ValidTo> then
--If date of StartIAV = TODAY then
----System updates existing S2P, i.e. sets S2P.ValidTo = EndIAV
--else
----System finishes existing S2P, i.e. sets S2P.ValidTo = current date+time.
--end if
end if

2) System removes all assignments with start of validity > current date+time (if exist).
3) System creates new S2P and sets its validity interval S2P.ValidFrom = StartIAV and S2P.ValidTo = EndIAV.

Note:

	
- Only one S2P can exist with validity in future.
	
- Product is assigned to salesroom by code, not by version, so the active version of product is always related.


Examples:
Current date+time is 01/01/2014 10:31:00 

Example 1:
Exists assignment A: S2P.ValidFrom = 01/02/2014 00:00:00 and S2P.ValidTo = 31/03/2014 23:59:59
Required assignment: StartIAV = 01/04/2014 and EndIAV = 31/05/2014
Result:

	
- Existing assignment A is removed. 


	
- New assignment is created with interval of validity S2P.ValidFrom = 01/04/2014 00:00:00 and S2P.ValidTo = 31/05/2014 23:59:59


Example 2:
Exists assignment B: S2P.ValidFrom = 01/12/2013 00:00:00 and S2P.ValidTo = 31/03/2014 23:59:59
Required assignment: StartIAV = 01/01/2014 and EndIAV = 31/05/2014
Result:  

	
- Existing assignment B is updated, i.e. S2P.ValidTo = 31/05/2014 23:59:59


Example 3:
Exists assignment C: S2P.ValidFrom = 01/12/2013 00:00:00 and S2P.ValidTo = 31/03/2014 23:59:59
Required assignment: StartIAV = 01/04/2014 and EndIAV is empty
Result:

	
- Existing assignment C is finished, i.e. S2P.ValidTo = current date+time


	
- New assignment is created with interval of validity S2P.ValidFrom = 01/04/2014 00:00:00 and S2P.ValidTo = null

## 🔗 Connections (2)

- ← Dependency: [[09.270 Assign product to salesroom (UseCase 1746868)]]
- ← Dependency: [[09.272 Process product to salesroom assignment file (UseCase 1746864)]]

## 📊 Appears In (1 diagrams)

- Use Case: Manage Products on Salesroom
