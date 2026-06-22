---
type: Requirement
stereotype: "BusinessRule"
package: ""
domain: "_Uncategorized"
element_id: 1741393
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Highest DPD historically priority pairing method for particular T&C

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: N/A

## 📝 Notes

Note: This algorithm is a copy of Highest DPD historically priority pairing method alg. The only one change is that Terms and conditions are passed on the input, so pairing priority is performed according to passed T&C, not to current T&C. 

Input:

	
- InstallmentPartsToPairing collection


	
- PaymentDepositDate – deposit date of the incoming payment for which is sorting performed


	
- Pairing Settings


Output:

	
- sorted collection of InstallmentPartsToPairing


This method sorts the Installment Parts by two levels: by Installment.Due Date and next by Installment Part Priority setting with relation to the installment DPD number. Installment Priorities are selected based on input Pairing Settings. Order of these levels is determined by {ADD IS-1892} Suppress due date method {/ADD}  {DEL IS-1892}Installment Priority.Suppress Due Date Priority as follow:

	
- If an Installment Part having Suppress Due Date Priority = 1 and Installment.Due Date <= PaymentDepositDate for defined Installment Part Type exists then the first level uses Installment Part Priority and second Due Date Priority
	
- If an Installment Parts having Suppress Due Date Priority = 0 (or NULL) or Installment.Due Date > PaymentDepositDate exists then Due Date Priority is used for the first level and Installment Part Priority for the second level.  {/DEL}


Due Date Priority

	
- Sort by Installment Due date. In case child installment is related to a parent Installment, Due date of the parent Installment is taken, else the child Installment Due date is used. E.g. If an extraordinary installment has reference to a standard installment, the standard installment due date is taken into account for this installment to sort them by due date.


Installment Part Priority
Sort by Priority of Installment Part Type including Tariff Item Type which is chosen according to  {DEL CBL-15541 IS-1558}Condition Change Flag{/DEL} {ADD CBL-15541 IS-1558} Condition Flag {/ADD} parameter whose decision limit is defined by Pairing Settings.DPD Limit and compared with maximal DPD value on respective contract:

System gets ContractMaxDPD as maximal DPD from

	
- currently valid contract debt catalogue
	
- contract debt catalogue history records).


System compares the ContractMaxDPD with Installment Pairing settings thresholds:
 

	
- If ContractMaxDPD  <= Installment Pairing Setting.DPD Limit and ContractMaxDPD <= Installment Pairing Setting.Write off threshold , then is taken the Installment Priority.Priority where  {DEL CBL-15541 IS-1558}Condition Change Flag = 0{/DEL} {ADD CBL-15541 IS-1558} Condition Flag= 'OK' {/ADD} for Installment Parts ordering
	
- If ContractMaxDPD  > Installment Pairing Setting.DPD Limit {DEL CBL-15541 IS-1558}or ContractMaxDPD > Installment Pairing Setting.Write off threshold,{/DEL} then is taken the Installment Priority.Priority where {DEL CBL-15541 IS-1558}Condition Change Flag = 1{/DEL} {ADD CBL-15541 IS-1558} Condition Flag= 'BROKEN' {/ADD} for Installment Parts ordering


	
- {ADD CBL-15541 IS-1558} If ContractMaxDPD > Installment Pairing Setting.Write off threshold, then is taken the Installment Priority.Priority where Condition Flag= 'WO_THRESHOLD'{/ADD}



Note: when handling the historical pairing (e.g. payment incorrectly paired to another loan, repaired to correct loan later), the historical debt catalog DPD remains valid in history - this could have the impact on pairing in case of HIGHEST_DPD_HIST priority pairing method).
