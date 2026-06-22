---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17686 (CSI-2071) Add feature for re-activation of insurance contract"
domain: "Requirements Model"
element_id: 1719537
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - New API for insurance reactivation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17686 (CSI-2071) Add feature for re-activation of insurance contract

## 📝 Notes

New API for reactivation of previously cancelled or terminated insurance on CEL contract.

Steps:

	
- initial check in CSI (contract service + insurance + contract status)
	
- call IS API to rollback Installment schedule and fin.parameters
	
- reactivation of contract service + insurance + period
	
- generation of new SE to generate CITR message


Changes:

	
- new API - https://bsl.in00a1.cz.infra/bsl/openapi/v3/contractservices/insurance/reactivate
	
- new UC08.455 + Access Right 
	
- new Status Reason=SERVICE_REACTIVATED  for Contract Service (table check update)
	
- new Status Reason=REACT  for Insurance Contract Status Trans (table check update)
	
- new Business event type = INSURANCE_REACTIVATED (db HO.BSL_BUSINESS_EVENT_TYPE + enum + translation update)
	
- new system event InsuranceContractReactivationSE which generate CITR with Type=CREATE

## 📊 Appears In (1 diagrams)

- Custom: CBL-17686 (CSI-2071) Add feature for re-activation of insurance contract
