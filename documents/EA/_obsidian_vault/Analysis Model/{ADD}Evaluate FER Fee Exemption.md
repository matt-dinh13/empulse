---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Full Early Repayment/Use Case"
domain: "Analysis Model"
element_id: 1879624
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋  {ADD}Evaluate FER Fee Exemption

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Full Early Repayment/Use Case

## 📝 Notes

{ADD CBL-30396 CSI-4295}
Inputs
- LoanContractCode
- FERCalculationDate (or ERRD if used as calculation moment)
- FerServiceCode (optional)
- FerServiceVersion (optional)
Output
- ferFeeSuppressed : boolean // TRUE = waive (do NOT charge) FER fee; FALSE = charge

Steps
1) PCG dependencies (FEE_EXEMPTION) System GETs relations ships for FER fee service
1.1 Resolve FER service identity: FerServiceCode[:FerServiceVersion] (if version omitted → active version).
1.2 Call: GET /openapi/v1/service-relations/{Service Code}
If API fails (timeout/4xx/5xx) → log error and return ferFeeSuppressed = TRUE (safe default; UC continues).
1.3 Extract dependent service codes with relation FEE_EXEMPTION.
If NONE returned → return ferFeeSuppressed = FALSE. // no service that can waive FER fee

2) Cross-match with Insurance Contract(s) on the loan (DB)
2.1 Find Insurance Contract(s) by:
- LoanContractCode
- Service Code {PCG FEE_EXEMPTION codes}
- Status {A (Active), S (Signed), T (Terminated)}
If NONE found → return ferFeeSuppressed = FALSE.

3) Coverage evaluation on matched Insurance Contract(s)
3.1 Status shortcut:
If there exists Insurance Contract with Status {A, S} → return ferFeeSuppressed = TRUE.
3.2 Terminated status (T) — check coverage by End Date:
For any matched Insurance Contract with Status = T:
- If Insurance Contract.End Date is NULL OR End Date ≥ FERCalculationDate (T0) → return TRUE
{DEL CBL-30396}- Else if Insurance Contract.End Date ≥ (FERCalculationDate − 1 day) → return TRUE{/DEL}
- Else continue evaluating next matched T
If no T fulfills the above → return ferFeeSuppressed = FALSE.
3.3 (Other statuses are not evaluated; only A/S/T re considered in 2.1 filter.)
{ADD/}

## 🔗 Connections (2)

- ← Usage: [[{MOD}ALG_Early repayment calculation A1]]
- ← Usage: [[{MOD}ALG_Early repayment calculation A2 - Unpaid principal only]]

## 📊 Appears In (2 diagrams)

- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
