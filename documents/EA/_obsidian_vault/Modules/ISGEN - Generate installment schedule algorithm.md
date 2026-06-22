---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1878913
diagrams: 1
connections: 6
tags:
  - requirement
  - modules
---

# 📋 ISGEN - Generate installment schedule algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Analytical Model/Use Case Model

## 📝 Notes

Selection and activation of algorithm for generation of payment schedule.

Inputs:
* Contract
* Financial Parameters - structure of financial parameters of offer/contract (including fees)
* Recalculation reason
* Installment Version (optional)
* Installment Number (optional)
* {ADD IS-1844} Service Parameters (optional) {/ADD}

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
7. If InstallmentScheduleMethod is null then system gets InstallmentScheduleMethod from Financial Parameters->ProductVariant->Product->Product Profile->Product Profile Installment Schedule where Product Profile Installment Schedule.IsDefault = true.
8. System sets InstallmentScheduleMethod into Financial Parameters.Instalment Schedule Method.
9.{ADD IS-1844} If Service Parameters.Apply Top Up = true, than FP.First Due Date = FP.First Due date + number of months set in ServiceParameters.Overlap Period and FP.Loan Providing Date = FP.First Due Date - 1 month{/ADD}
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

## 🔗 Connections (6)

- ← Dependency: [[ISGEN - Generate installment schedule]]
- ← Generalization: [[ISGEN - Generate installment schedule - Equal principal]]
- ← Generalization: [[ISGEN - Generate installment schedule - Annuity principal]]
- ← Generalization: [[ISGEN - Generate installment schedule - Basic]]
- ← Generalization: [[ISGEN - Generate installment schedule - Equal annuity]]
- ← Generalization: [[ISGEN - Generate installment schedule - Extended]]

## 📊 Appears In (1 diagrams)

- Use Case: ISGEN Generate installment schedule
