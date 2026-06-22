---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1856 (CLM-928) Insurance Termination: Update Business Logic"
domain: "Requirements Model"
element_id: 1826224
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Change insurance termination with regards to CPO service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1856 (CLM-928) Insurance Termination: Update Business Logic

## 📝 Notes

Goal of this task is to change logic of insurance termination when the Cooling off period service is available on the contract. This change will be available only for insurances having a special setting on the Insurance Service -> Early Termination Term Type. 
Expected behaviour:

	
- If contract with insurance will have Cooling Off service and client wants to terminate the insurance within Cooling Off period, operator will have the Cancel insurance action enabled (i.e. Termination insurance action will be hidden/disabled). In this case, the first installment and following won’t contain insurance fee.
	
- If contract with insurance will have Cooling Off service and client wants to terminate the insurance after Cooling Off period, operator will only have the Termination insurance action enabled. In this case, if Termination insurance action is used, the first installment will contain insurance fee, next installments won’t.
	
- For contract without Cooling Off service, operator will have the Cancel insurance and Termination insurance actions enabled. If Termination insurance action is used, the first installment will contain insurance fee, next installments won’t.

## 📊 Appears In (1 diagrams)

- Custom: CBL-1856 (CLM-928) Insurance Termination: Update Business Logic
