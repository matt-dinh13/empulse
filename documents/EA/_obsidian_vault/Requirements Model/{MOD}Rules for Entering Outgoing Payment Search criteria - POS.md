---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment"
domain: "Requirements Model"
element_id: 1310789
diagrams: 2
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Rules for Entering Outgoing Payment Search criteria - POS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment

## 📝 Notes

- AddressedToSalesroom - mandatory
	
- OBSOrderNumber - optional
	
- CreatedFrom - optional
	
- CreatedTo - optional


	
- {ADD CBL-3001 PAYM-1012}
ReadyForDisbursementFrom - optional


	
- ReadyForDisbursementTo - optional
{/ADD} 


Values CreatedFrom, CreatedTo{ADD CBL-3001 PAYM-1012}, ReadyForDisbursementFrom,ReadyForDisbursementTo{/ADD} are checked and adjusted according to the rule Validation and Adjustment of Interval in Days with parameter MaxDays = 31.
Adjusted values are refreshed in the form for search criteria.

## 🔗 Connections (4)

- ← Dependency: [[REQ#2 - Add _Ready for disbursement_ date into outgoing payments search criteria]]
- → Generalization: [[Rules for Entering Outgoing Payment Search criteria]]
- → Dependency: [[Validation and Adjustment of Interval in Days]]
- ← Dependency: [[Search criteria - POS]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment
- Custom: Search criteria - POS
