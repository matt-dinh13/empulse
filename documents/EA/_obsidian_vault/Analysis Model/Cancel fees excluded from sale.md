---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Cancel fees for contract sale/Use case"
domain: "Analysis Model"
element_id: 1836302
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Cancel fees excluded from sale

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Cancel fees for contract sale/Use case

## 📝 Notes

{ADD CBL-13810 IS-1389}
This rule removes installment from installment schedule based on settings defined in INST_EXCLUDED_FROM_SALE before contract is sold.

 

	
- System find all active not fully paid installments and installment parts defined in INST_EXCLUDED_FROM SALE – if no installment is found, business rule ends with result success.
	
- System checks that there are not coupled payments on installments with the same due date as due date of installment which is to be removed and all later installments (INSTALLMENT.DUE_DATE) 
	
- - If there are some coupled payments, then system calls UC 05.200 Perform decoupling with list of found payments as parameter.
	
- System sets installment as archived (INSTALLMENT.ACTIVE = "False") and sets its deactivated in version attribute as incremented maximal version (INSTALLMENT.DEACTIVATED_IN_VERSION = MV + 1). 
	
- System checks installment parts of all found installments – if exist any isnstallment part which is not set in INST_EXCLUDED_FROM_SALE, new installment is created as copy of archived installment with not affected installment parts.
	
- System calls UC 05.180 Perform coupling with contract (INSTALLMENT_PART.INSTALLMENT.CONTRACT_ID) as parameter
	
- System returns information that removal was successful back to calling use-case
	
- System generates a system event RegeneratedInstallmentScheduleSE with a list of the canceled installments as a parameter
	
- System calls UC 05.184 Reflect change of balance with contract as parameter



{/ADD CBL-13810 IS-1389}

## 🔗 Connections (1)

- ← UseCase «include»: [[04.131 Cancel fees for contract sale]]

## 📊 Appears In (1 diagrams)

- Use Case: Cancel fees for contract sale
