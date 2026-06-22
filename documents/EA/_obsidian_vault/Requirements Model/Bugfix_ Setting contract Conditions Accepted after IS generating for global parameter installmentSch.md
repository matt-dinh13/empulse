---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-345 (CBL-1586) Interest calculation from Disbursement date"
domain: "Requirements Model"
element_id: 1290858
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Bugfix: Setting contract Conditions Accepted after IS generating for global parameter installmentScheduleGenerationTrigger = ON_DISBURSEMENT

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-345 (CBL-1586) Interest calculation from Disbursement date

## 📝 Notes

Business rule Sign contract finalization (called from UC 01.187 Sign contract) has to be modified as follows:
as-is: If contract type is other than Financial_Parameters.Initial Transaction Type = 'CASH' - system sets loan condition acceptation by Set contract Condition Accepted rule with processed contract as parameter
to-be: If contract type is other than Financial_Parameters.Initial Transaction Type = 'CASH' and system property installmentScheduleGenerationTrigger = ON_SIGN - system sets loan condition acceptation by Set contract Condition Accepted rule with processed contract as parameter

Use case {ADD}01.191 Process installment schedule generation has to be modified - after generating IS, calculation of expected end date, loan sevice parameters and CEL debt info, the following has to be added:
If contract type is other than Financial_Parameters.Initial Transaction Type = 'CASH' and system property installmentScheduleGenerationTrigger = ON_DISBURSEMENT then system sets loan condition acceptation by Set contract Condition Accepted rule with processed contract as parameter

## 📊 Appears In (1 diagrams)

- Custom: IS-345 (CBL-1586) Interest calculation from Disbursement date
