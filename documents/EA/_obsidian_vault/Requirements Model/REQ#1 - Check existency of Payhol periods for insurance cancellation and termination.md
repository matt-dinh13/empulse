---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10733 (CSI-171) Insurance cancellation and termination - check existing Payhol requests"
domain: "Requirements Model"
element_id: 1608390
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Check existency of Payhol periods for insurance cancellation and termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10733 (CSI-171) Insurance cancellation and termination - check existing Payhol requests

## 📝 Notes

Generation of new installment schedule after Insurance cancellation and termination does not support keeping already created Payhol periods which causes wrong results.
Following additional checks are needed:

	
- Insurance cancellation - system checks if any created or executed PAYHOL LSR exists, if so, cancellation is not possible 
	
- Insurance termination - system checks if any created or executed PAYHOL LSR with first_deferred_due_date > insurance end date exists, if so, termination is not possible

## 📊 Appears In (1 diagrams)

- Custom: CBL-10733 (CSI-171) Insurance cancellation and termination - check existing Payhol requests
