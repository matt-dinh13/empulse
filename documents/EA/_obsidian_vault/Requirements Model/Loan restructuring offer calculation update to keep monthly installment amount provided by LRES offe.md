---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9759 (CLM-3059) Create API for Loan restructuring"
domain: "Requirements Model"
element_id: 1688667
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Loan restructuring offer calculation update to keep monthly installment amount provided by LRES offer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9759 (CLM-3059) Create API for Loan restructuring

## 📝 Notes

New functionality will be driven by new LRES service setting (new setting KEEP_INSTALLMENT_AMOUNT).

Following updates is needed:

	
- copy a new service setting to Loan Restructuring Request (new field).
	
- update offer calculation (UC 13.450 Process supplement approval result + rule Restructuring offer recalculation) to use and keep provided Monthly Installment from the LAP response and recalculate TERM (new rule provided by IS team should be used  if new setting is set)
	
- check IS generation (UC 08.405 Confirm offer for loan restructuring common + rule Calculate financial parameters for loan restructuring) to generate a new installment schedule according new service setting;
it should work without any update on CLM side

## 📊 Appears In (1 diagrams)

- Custom: CBL-9759 (CLM-3088) Loan restructuring offer calculation update
