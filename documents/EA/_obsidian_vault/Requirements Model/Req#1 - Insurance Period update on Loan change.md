---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change"
domain: "Requirements Model"
element_id: 1827353
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Req#1 - Insurance Period update on Loan change

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25261 (CSI-3472) Insurance Period update on Loan change

## 📝 Notes

The goal is to prolong insurance period (update insurance period end date) if the loan contract last due date is updated as part of PAYHOL or LRES execution.
It is driven by new enum value LAST_REPAYMENT_DATE_AND_PROLONGATION used for Insurance Service Setting.First Insurance Period Duration.
LAST_REPAYMENT_DATE_AND_PROLONGATION works in the same way as existing LAST_REPAYMENT_DATE_AND_OFFSET but ensure automatic prolongation of insurance period after execution of PAYHOL or LRES.

Updates:

	
- extend First Insurance Period Duration enum by new value LAST_REPAYMENT_DATE_AND_PROLONGATION
	
- find all checks of "First Insurance Period Duration" and if LAST_REPAYMENT_DATE_AND_OFFSET is used then add also new LAST_REPAYMENT_DATE_AND_PROLONGATION, mainly in:
-rule {MOD}Determine first insurance period 
-rule {MOD}Check conditions to insurance termination 
-rule {MOD}Determine Insurance Period End for additionally added Insurance 
- UC {MOD}11.775 Activate Standalone Insurance on Cash Loan disbursement
	
- create a new rule {ADD}Prolong insurance Period upon related Loan Contract update and call this rule from 
- UC {MOD}08.362 Process payment holiday request
- UC {MOD}08.406 Process request for loan restructuring
- UC {MOD}08.352 Process LoanServiceRequestRollbackSE event
	
- VASD module update (separate task)

## 📊 Appears In (1 diagrams)

- Custom: CBL-25261 (CSI-3472) Insurance Period update on Loan change
