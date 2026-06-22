---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Access Rights"
domain: "Analysis Model"
element_id: 1876312
diagrams: 17
connections: 21
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}03.070 Calculate early repayment amount

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Access Rights

## 📝 Notes

Use case describes rules and structures of amounts required to full early repayment.
Early repayment amount is calculated by algorithms defined on service level:

	
- ALG_Early repayment calculation A1
	
- {MOD}ALG_Early repayment calculation A2 - Unpaid principal only

Structure and calculated amounts for ER are described in Early Repayment Result domain which is returned as result of this use case.

## 🔗 Connections (19)

- ← Dependency: [[REQ#2 - Evaluate FER]]
- ← Dependency: [[External Reference (Boundary 1290977)]]
- ← UseCase «include»: [[{MOD}08.273 Create CET request common]]
- ← UseCase «include»: [[{MOD}08.272 Get CET data preview]]
- ← UseCase «include»: [[{MOD}08.280 Check and process CET request]]
- ← UseCase «include»: [[08.065 Calculate Cooling-off period repayment preview]]
- ← UseCase «include»: [[{MOD}08.257 Create Cooling-off period request]]
- ← UseCase «include»: [[{MOD}08.252 Process cooling-off period]]
- ← UseCase «include»: [[{MOD}08.220 Check and process Grace period]]
- ← UseCase «include»: [[01.759 Get contract services for self-care (UseCase 1869812)]]
- → Dependency: [[{MOD}ALG_Early repayment calculation A2 - Unpaid principal only]]
- → Dependency: [[ALG_Get involved Installment part]]
- → Realisation: [[03.070 Calculate early repayment amount]]
- → Dependency: [[{MOD}ALG_Early repayment calculation A1]]
- → Dependency: [[{ADD}Get Fees charged to principal]]
- ← UseCase «include»: [[08.066 Calculate Full Early repayment preview (UseCase 1879648)]]
- ← UseCase «include»: [[03.052 Create Full Early repayment request (UseCase 1879643)]]
- ← UseCase «include»: [[{NotImplemented}08.100 Process Full early repayment]]
- ← UseCase «include»: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (17 diagrams)

- Custom: Access Rights
- Custom: Access Rights
- Custom: CBL-10543 (CSI-170) Cancel Insurance possibility when loan contract is Early terminated
- Custom: IS-7 (CBL-29) Consolidation (Top up) for cash loans
- Custom: IS-998 (CBL-10543) CET via MobApp and Terminals
- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Use Case: Common for Early repayment Request and Processing 
- Use Case: Contract Early Termination processing
- Use Case: Contract Early Termination request creation
- Use Case: Cooling-off period processing
- Use Case: Cooling-off period request
- Use Case: Customer Self-Care API - Use Case Model
- Use Case: Full early repayment - printouts
- Use Case: Full early repayment processing
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
- Use Case: Grace period processing
