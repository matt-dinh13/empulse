---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation"
domain: "Requirements Model"
element_id: 1783072
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 New rules for service Termination and Cancelation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20860 (CSI-2911) New rules for service Termination and Cancelation

## 📝 Notes

Data model:
1/ LIMIT_CANCEL_TO_COP - move from ho.bsl_insurance_service to ho.bsl_service
copy current values
new attr in API

2/ LIMIT_TERMINATION_OUT_OF_COP - new field in ho.bsl_service
by default 0, set to 1 for ho.bsl_insurance_service with EARLY_TERMINATION_TERM = COP_EXC_CUTT_OFF_INST
new attr in API

Data migration will be done by PCG as PCG UI update including:
hide EARLY_TERMINATION_TERM in UI, set always to CUT_OFF_INSTALLMENT in DB

CSI update:

Insurance:
EARLY_TERMINATION_TERM - should not be used at all (COP_EXC_CUTT_OFF_INST replaced by LIMIT_TERMINATION_OUT_OF_COP)

Updated rules:

	
- Check conditions to insurance cancellation
	
- Check conditions to insurance termination (Check_COP parameter added)
	
- Get termination date for CEL insurance


Services:

	
- New rule Check conditions to contract service cancellation
	
- New rule Check conditions to contract service termination
	
- Use rules for BSL UI + API use cases


New rule for contract status check - result based on Feature flags, used by all rules

## 📊 Appears In (1 diagrams)

- Custom: CBL-20860 (CSI-2911) New rules for service Termination and Cancelation
