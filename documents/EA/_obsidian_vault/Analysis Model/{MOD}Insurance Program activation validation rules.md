---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Validation Rules"
domain: "Analysis Model"
element_id: 1441253
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Insurance Program activation validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Validation Rules

## 📝 Notes

Validations processed before activation of insurance program version. 
 

	
- If no other version of the same insurance program in status Active exists and Version.ValidFrom < TODAY+1 then error is displayed (MSG_NO_OTHER_INSPROG_VERSION).
	
- If InsuranceProgram.ValidTo < TODAY+1 then warning is displayed (MSG_VALID_TO_LTHAN_TMRW).
	
- {ADD PCG-1456}If exists service on this insurance program with Service.MandatoryOnContract = true and Service.ServiceType.Category = INSURANCE and Service.InsuranceService.InsuranceProgram has filled any of following attributes (InsuranceCustomDataDef, InsuranceEligibilityCriteria) then error is displayed (MSG_ EligibilityWithMandatoryOnContract).{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[Insurance Program Automatic Version activation processing]]
- ← Dependency: [[08.580 Activate Insurance Program version manually (UseCase 1517629)]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Manage Insurance Program
