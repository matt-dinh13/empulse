---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9759 (CLM-3059) Create API for Loan restructuring"
domain: "Requirements Model"
element_id: 1878739
diagrams: 10
connections: 19
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Generate installment schedule algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9759 (CLM-3059) Create API for Loan restructuring

## 📝 Notes

Selection and activation of algorithm for generation of payment schedule.

Inputs:
* Contract
* Financial Parameters - structure of financial parameters of offer/contract (including fees)
* Recalculation reason
* Installment Version (optional)
* Installment Number (optional)
*{ADD IS-1844} Service Parameters (optional) {/ADD}

Outputs:
* Installment Schedule - structure of Installments and corresponding Installment Parts (not persistent)
* IS Interest Rate (optional)

Steps:

1. System gets InstallmentScheduleMethod as Financial Parameters.Installment Schedule Method.

{ADD PAYM-1787 CBL-4815}
2. System gets Financial Parameters->Financing Scheme as FinScheme.
3. If FinScheme is not null then system gets FinScheme->Installment Plan Scheme as InstallmentPlanScheme {ADD PAYM-2421} and store it to FinancialParameters.DayCountMethod {ADD/}
TODO If FinScheme is not null then take subventions from financial package
5. If InstallmentPlanScheme is null and InstallmentScheduleMethod = 'IS_ALG_EQUAL_ANNUITY' then system calls Check if contract is co-financed with Financial Parameters as a parameter and sets the result to IsCofinanced.
6. If IsCofinanced = true then system gets InstallmentPlanScheme by calling FinancingSchemeWS.getInstallmentPlanScheme() with parameter code = value of global parameter InstallmentPlanSchemeForJFS.
7. {ADD CBL-10216} if isCofinanced, system finds the financing scheme by getting the lender settings or global settings by following steps:
a) system gets financing partners for particular contract in Contract Party Role (parties having the party type JFS_PARTNER) and respective partners&#180; settings
b) if more than one party is found
         - if no party has set the INSTALL_PLAN_SCHEME:
                - system gets InstallmentPlanScheme by calling FinancingSchemeWS.getInstallmentPlanScheme() with parameter code = global parameter InstallmentPlanSchemeForJFS.value
         - if each party has set different INSTALL_PLAN_SCHEME:
                - system logs error "Multiple lenders: [lenders list] with different settings, system cannot generate the installment schedule" and ends
    else if exactly one party is found:
         - if INSTALL_PLAN_SCHEME is filled:
                - system gets InstallmentPlanScheme by calling FinancingSchemeWS.getInstallmentPlanScheme() with parameter code = value of INSTALL_PLAN_SCHEME
                  if no scheme is found by the InstallmentPlanScheme code, system logs error "Financing scheme set for lender [lender] not found" and ends
           else if no INSTALL_PLAN_SCHEME is filled system gets InstallmentPlanScheme by calling FinancingSchemeWS.getInstallmentPlanScheme() with parameter code = value of global parameter InstallmentPlanSchemeForJFS.
8. If InstallmentPlanScheme is not null then system sets InstallmentScheduleMethod = InstallmentPlanScheme.Generation Method and DayCountMethod =  InstallmentPlanScheme.Day Count Method
{/ADD CBL-10216}
7. {ADD IS-1844} If Installment version = 1 and Service Parameters.Service Type = Top Up and Service Parameters.Overlap Period > 0 , than FP.First Due Date = FP.First Due date + number of months set in Service Parameters.Overlap Period and FP.Loan Providing Date = FP.First Due Date - 1 month{/ADD}
8. If InstallmentScheduleMethod is null then system gets InstallmentScheduleMethod from Financial Parameters->ProductVariant->Product->Product Profile->Product Profile Installment Schedule where Product Profile Installment Schedule.IsDefault = true.
9. System sets InstallmentScheduleMethod into Financial Parameters.Instalment Schedule Method.
10. According the InstallmentScheduleMethod type, it is continued with calling a specific algorithm:
- IS_ALG_BASIC: Generate installment schedule - Basic algorithm with parameters from input
- IS_ALG_EXTEND1: Generate installment schedule - Extended1 algorithm with parameters from input
- IS_ALG_EQ_PRINC: Generate installment schedule - Equal principal with parameters from input
- IS_ALG_AN_PRINC: Generate installment schedule - Annuity principal with parameters from input
{ADD PAYM-1787 CBL-4815}- IS_ALG_EQUAL_ANNUITY: Generate installment schedule - Equal Annuity algorithm with parameters from input + FinScheme if not null and InstallmentPlanScheme if not null{/ADD}

{ADD PAYM-2189}
11. If (Recalculation reason from input is in the list saved in global parameter RecalculationReasonsForEEDChange or RecalculationReasonsForEEDChange is empty) and Financial Parameters (not OFP) exists for the Contract then system calculates Expected end date by using Calculation of ExpectedEndDate and saves the result to Financial Parameters.Expected End Date.
{/ADD}

{ADD CBL-4595 PAYM-1728}
12. If global parameter shiftLastDueDate = true then:
-- Set LI = last standard active installment of generated Installment Schedule
-- If LI.Due Date is a non-working day (is present in table Non-working Day) then:
---- Find closest working day (CWD) in the future (that is not present in table Non-working Day)
---- Set LI.Due Date = CWD
---- Set LI.Customer Due Date = CWD - DaysBeforeDueDate (global parameter)
{/ADD}

13. System returns
* Installments Schedule
* optionally IS Interest Rate

## 🔗 Connections (18)

- ← Dependency: [[Update Installment schedule algorithm]]
- ← Dependency: [[{MOD}08.060 Change Due Date]]
- ← Dependency: [[Calculate Payment holiday financial parameters]]
- ← Dependency: [[Calculate financial parameters for loan restructuring]]
- ← Dependency: [[Prepare virtual IS to change due date]]
- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]
- ← Dependency: [[{MOD}08.222 Calculate Grace period amount]]
- ← Generalization: [[Generate installment schedule - Basic algorithm]]
- ← Generalization: [[Generate installment schedule - Annuity principal]]
- ← Generalization: [[{MOD}Generate installment schedule - Equal principal]]
- → Dependency: [[Non-working Day]]
- ← Generalization: [[{ADD}Generate installment schedule - Equal Annuity algorithm]]
- → Dependency: [[{MOD}Check if contract is co-financed]]
- ← Generalization: [[Generate installment schedule - Extended1 algorithm]]
- ← Dependency: [[{MOD}01.191 Process installment schedule generation after disbursement]]
- ← Dependency: [[03.031 Regenerate installment schedule after fee activation]]
- ← Dependency: [[03.010 Generate installment schedule (UseCase 1879445)]]
- ← Dependency: [[03.030 Regenerate installment schedule (UseCase 1879435)]]

## 📊 Appears In (10 diagrams)

- Custom: CBL-9759 (CLM-3088) Loan restructuring offer calculation update
- Custom: PAYM-1728 (CBL-4595) Change of the last due date
- Logical: IS-888 (CBL-10216) Provide support required for 'actual / actual' day count convention for JL tie-up with DBS
- Use Case: Calculation of early repayment amount under Grace period
- Use Case: Change Due Date processing
- Use Case: Fees-back service evaluation and processing
- Use Case: Generate installment schedule
- Use Case: ISG - Generate installment schedule
- Use Case: OVERVIEW - Installment Schedule
- Use Case: PER request processing
