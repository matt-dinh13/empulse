---
type: Change
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/IS/IS-888 (CBL-10216) Provide support required for 'actual / actual' day count convention for JL tie-up with DBS"
domain: "Requirements Model"
element_id: 1554996
diagrams: 1
connections: 1
tags:
  - change
  - requirements-model
---

# 📄 REQ2 (IS-954) - ACT/ACT - joint lending - DBS - get lender settings from BSL_LENDER, keep global param as backup default value

> **Type**: Change · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/IS/IS-888 (CBL-10216) Provide support required for 'actual / actual' day count convention for JL tie-up with DBS

## 📝 Notes

When {MOD}Generate installment schedule algorithm is called, system checks if contract InstScheduleMethod = EQUAL ANNUITY and IsCoFinanced:
//note: getting JFS settings for particular JFS partner is supported in case the loan has ONLY one JFS partner, otherwise the default value from InstallmentPlanSchemeForJFS is taken instead to allow IS generating. This can cause the discrepancy in JFS partners´ installment schedules and HC installment schedules and financial params
 

	
- System gets InstallmentScheduleMethod as Financial Parameters.Installment Schedule Method.
	
- System gets Financial Parameters->Financing Scheme as FinScheme.
	
- If FinScheme is not null then system gets FinScheme->Installment Plan Scheme as InstallmentPlanScheme {ADD PAYM-2421} and store it to FinancialParameters.DayCountMethod {ADD/}
       TODO If FinScheme is not null then take subventions from financial package
	
- If InstallmentPlanScheme is null and InstallmentScheduleMethod = 'IS_ALG_EQUAL_ANNUITY' then system calls Check if contract is co-financed with Financial Parameters as a parameter and sets the result to IsCofinanced.
	
- {ADD 10216} if isCofinanced, system finds the financing scheme by getting the lender settings or global settings by following steps:
a) system gets financing partners for particular contract in Contract Party Role (parties having the party type JFS_PARTNER) and respective partners´ settings
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
	
- If InstallmentPlanScheme is not null then system sets InstallmentScheduleMethod = InstallmentPlanScheme.Generation Method and DayCountMethod =  InstallmentPlanScheme.Day Count Method
{/ADD 10216}

## 🔗 Connections (1)

- ← Aggregation: [[Update Installment schedule algorithm]]

## 📊 Appears In (1 diagrams)

- Logical: IS-888 (CBL-10216) Provide support required for 'actual / actual' day count convention for JL tie-up with DBS
