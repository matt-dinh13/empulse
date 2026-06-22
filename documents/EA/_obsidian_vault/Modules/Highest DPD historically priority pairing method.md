---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/GetDebtPairingConditions"
domain: "Modules"
element_id: 1741408
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Highest DPD historically priority pairing method

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/REST/GetDebtPairingConditions

## 📝 Notes

Input:

	
- InstallmentPartsToPairing collection


	
- PaymentDepositDate – deposit date of the incoming payment for which is sorting performed
	
- Pairing Settings


Output:

	
- sorted collection of InstallmentPartsToPairing


This method sorts the Installment Parts by two levels: by Installment.Due Date and next by Installment Part Priority setting with relation to the installment DPD number. Installment Priorities are selected based on input Pairing Settings. Order of these levels is determined by {ADD IS-1892} Suppress due date method {/ADD}  {DEL IS-1892}Installment Priority.Suppress Due Date Priority as follow:

	
- If an Installment Part having Suppress Due Date Priority = 1 {DEL IS-1705}and Installment.Due Date <= PaymentDepositDate{/DEL} for defined Installment Part Type exists then the first level uses Installment Part Priority and second Due Date Priority
	
- If an Installment Parts having Suppress Due Date Priority = 0 (or NULL) or Installment.Due Date > PaymentDepositDate exists then Due Date Priority is used for the first level and Installment Part Priority for the second level. {/DEL}


Due Date Priority

	
- Sort by Installment Due date. In case child installment is related to a parent Installment, Due date of the parent Installment is taken, else the child Installment Due date is used. E.g. If an extraordinary installment has reference to a standard installment, the standard installment due date is taken into account for this installment to sort them by due date.


Installment Part Priority
Sort by Priority of Installment Part Type including Tariff Item Type which is chosen according to Condition Change Flag parameter whose decision limit is defined by Pairing Settings.DPD Limit and compared with maximal DPD value on respective contract:

{DEL IS-1705}
System gets ContractMaxDPD as maximal DPD from

	
- currently valid contract debt catalogue
	
- contract debt catalogue history records).

{/DEL}

{ADD IS-1705}
System call api GetDebtPairingConditions to get value of max DPD and DPD by treshold
{/ADD}

System compares the ContractMaxDPD and dpdByTresholds with Installment Pairing settings thresholds:
 

	
- If ContractMaxDPD  <= Installment Pairing Setting.DPD Limit and ContractMaxDPD <= Installment Pairing Setting.Write off threshold , then is taken the Installment Priority.Priority where Condition Flag= 'OK' for Installment Parts ordering
	
- If ContractMaxDPD  > Installment Pairing Setting.DPD Limit   then is taken the Installment Priority.Priority where  Condition Flag= 'BROKEN'  for Installment Parts ordering
	
- {DEL S-1705}If ContractMaxDPD {/DEL}{ADD IS-1705} If  writeOffThreshold >= 0  and  dpdByThresholds != null and dpdByThresholds{/ADD} >= Installment Pairing Setting.Write off threshold, then is taken the Installment Priority.Priority where Condition Flag= 'WO_THRESHOLD'
	
- {ADD IS-1705}If terminationThreshold >= 0 and maxDPD != null and maxDPD >= InstallmentPairingSetting.terminationThreshold,  then is taken the Installment Priority.Priority where Condition Flag= 'TERMINATION'{/ADD}


Note: when handling the historical pairing (e.g. payment incorrectly paired to another loan, repaired to correct loan later), the historical debt catalog DPD remains valid in history - this could have the impact on pairing in case of HIGHEST_DPD_HIST priority pairing method).

## 🔗 Connections (2)

- ← Dependency: [[GetDebtPairingConditions (Interface 1795399)]]
- ← Dependency: [[GetMaxDPD (Interface 1795406)]]

## 📊 Appears In (2 diagrams)

- Logical: GetDebtPairingConditions
- Logical: GetMaxDPD
