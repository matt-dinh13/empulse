---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment"
domain: "Requirements Model"
element_id: 1310805
diagrams: 2
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Rules for Entering Outgoing Payment Search criteria - STANDARD

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment

## 📝 Notes

At entering search criteria following fields’ combinations are required as mandatory:

	
- Payment channel has to be entered at least with Status = (any value except ‘PAID’) and Payment type. 
In case Status = (‘PAID’) also (Created from and Created to){ADD CBL-3001 PAYM-1012} or (ReadyForDisbursementFrom and ReadyForDisbursementTo){/ADD} has to be entered and set period cannot exceed [N] days.
	
- Payment type has to be entered at least with Status = (any value except ‘PAID’). 
In case Status = (‘PAID’) also (Created from and Created to){ADD CBL-3001 PAYM-1012} or (ReadyForDisbursementFrom and ReadyForDisbursementTo){/ADD} has to be entered and set period cannot exceed [N] days.
	
- Status = (any value except ‘PAID’) has to be entered at least with Payment type
	
- Status = ‘PAID’ has to be entered at least with Payment type and always Created from and Created to has to be entered and set period cannot exceed [N] days
	
- Amount sum limit has to be entered with Currency and at least with Status = (any value except ‘PAID’) and Payment type. 
In case Status = (‘PAID’) also (Created from and Created to){ADD CBL-3001 PAYM-1012} or (ReadyForDisbursementFrom and ReadyForDisbursementTo){/ADD} has to be entered and set period cannot exceed [N] days
	
- Values CreatedFrom, CreatedTo{ADD CBL-3001 PAYM-1012}, ReadyForDisbursementFrom,ReadyForDisbursementTo{/ADD}  are checked and adjusted according to the rule Validation and Adjustment of Interval in Days with parameter MaxDays = 31. Adjusted values are refreshed in the form for search criteria.
	
- Currency – see Amount sum limit
	
- Following fields can be entered separately (no next field is required for entering): Payment Order ID; Contract number; Recipient; Partner code; Salesroom code


At least one of above mentioned field of combination fields has to be entered.
If any validation fails, system informs the user about the issue.
Parameter [N] is set to 14 days.

## 🔗 Connections (4)

- ← Dependency: [[REQ#2 - Add _Ready for disbursement_ date into outgoing payments search criteria]]
- → Dependency: [[Validation and Adjustment of Interval in Days]]
- → Generalization: [[Rules for Entering Outgoing Payment Search criteria]]
- ← Dependency: [[Search criteria - STANDARD]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment
- Custom: Search criteria - STANDARD
