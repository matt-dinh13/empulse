---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment"
domain: "Requirements Model"
element_id: 1310798
diagrams: 2
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Rules for Entering Outgoing Payment Search criteria - CUSTOM

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment

## 📝 Notes

- CreatedFrom - optional
	
- CreatedTo - optional
	
- MinimalAmount - optional
	
- MaximalAmount - optional
	
- Currency - see below
	
- PaymentType - optional
	
- OBSOrderNumber - optional
	
- TransactionDateFrom - optional
	
- TransactionDateTo - optional


	
- {ADD CBL-3001 PAYM-1012}
ReadyForDisbursementFrom - optional


	
- ReadyForDisbursementTo - optional
{/ADD} 


If none of the values (CreatedFrom/To, TransactionDateFrom/To)  is entered then RestrictCreated = true else RestrictCreated = false.

Values CreatedFrom, CreatedTo{ADD CBL-3001 PAYM-1012}, ReadyForDisbursementFrom,ReadyForDisbursementTo{/ADD} are checked and adjusted according to the rule Validation and Adjustment of Interval in Days with parameters

	
- MaxDays = 14,
	
- RestrictIfNonLimit = RestrictCreated

Values TransactionDateFrom, TransactionDateTo are checked and adjusted according to the rule Validation and Adjustment of Interval in Days with parameters

	
- MaxDays = 14,
	
- RestrictIfNonLimit = false

Adjusted values are refreshed in the form for search criteria. 

If the both values MinimalAmount/MaximalAmount are entered then MaximalAmount must be greater or equal to MinimalAmount (MSG_COMPARE_GREATER_THAN_EQUAL).
If MinimalAmount  or MinimalAmount is filled, currency becomes mandatory and if currency is empty, system sets currency according to global parameter Currency.Is_Default = TRUE

## 🔗 Connections (4)

- → Dependency: [[Validation and Adjustment of Interval in Days]]
- → Dependency: [[REQ#2 - Add _Ready for disbursement_ date into outgoing payments search criteria]]
- → Generalization: [[Rules for Entering Outgoing Payment Search criteria]]
- ← Dependency: [[Search criteria - CUSTOM]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment
- Custom: Search criteria - CUSTOM
