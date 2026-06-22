---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules"
domain: "Analysis Model"
element_id: 1869774
diagrams: 5
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Calculate Minimal New PCA after PER

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Partial Early Repayment/Business Rules

## 📝 Notes

{ADD CLM-1713 /}
Rule calculates Minimal Provided Credit Amount which must remain after PER execution to avoid MSG_NO_PRINCIPAL_TO_AMORTIZATION error. It is only estimate and it is used for calculation of PER Result.Client Maximal Amount used for PER preview and request.

Inputs:
Contract
PER Due Date

Outputs:
Minimal PCA

Steps:

	
- System finds global parameter for AnnuityRounding (BL_ANNUITYROUNDING) and sets value to UsedRounding, if it is null or lower then 1 then system sets UsedRounding = 1
	
- System sets NumOfInstallments as number of standard installments after PER Due Date (Installment.Due Date>PER Due Date)
	
- System calculates and returns Minimal PCA = 10 * UsedRounding * NumOfInstallments

## 🔗 Connections (2)

- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← Dependency: [[Calculate Partial ER preview - Step1]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: CBL-4814 (CLM-1713) Create Web Service for PER Request
- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
- Use Case: PER request processing
