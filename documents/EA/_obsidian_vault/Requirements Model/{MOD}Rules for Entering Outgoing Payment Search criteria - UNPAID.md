---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment"
domain: "Requirements Model"
element_id: 1310795
diagrams: 2
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Rules for Entering Outgoing Payment Search criteria - UNPAID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment

## 📝 Notes

- PaymentType - optional


	
- CreatedFrom - optional
	
- CreatedTo - optional
	
- Amount sum limit - optional
	
- Currency - mandatory with Amount sum limit


	
- {ADD CBL-3001 PAYM-1012}
ReadyForDisbursementFrom - optional


	
- ReadyForDisbursementTo - optional
{/ADD} 

If Amount sum limit is filled, currency becomes mandatory and if currency is empty, system sets currency according to global parameter Currency.Is_Default = TRUE

Values CreatedFrom, CreatedTo{ADD CBL-3001 PAYM-1012}, ReadyForDisbursementFrom,ReadyForDisbursementTo{/ADD} are checked and adjusted according to the rule Validation and Adjustment of Interval in Days with parameter MaxDays = 14.

Adjusted values are refreshed in the form for search criteria.

## 🔗 Connections (3)

- ← Dependency: [[REQ#2 - Add _Ready for disbursement_ date into outgoing payments search criteria]]
- → Generalization: [[Rules for Entering Outgoing Payment Search criteria]]
- ← Dependency: [[Search criteria - UNPAID]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment
- Custom: Search criteria - UNPAID
