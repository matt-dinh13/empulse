---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-2968 Terminate Deal method"
domain: "Modules"
element_id: 1827552
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Update Deal Period for Deal termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/CSI-2968 Terminate Deal method

## 📝 Notes

{ADD CSI-2968 /}
This rule describes updating the Deal Period on the Deal termination.
 

	
- System performs set of validations by UpdateDealPeriod validation rule. If a validation fails, system returns specific error and use case ends.
	
- System gets the Insurance Period by provided externalId
	
- System gets InsuranceProgram setting data by Get Insurance Program data from INSR with parameters externalId (insuranceProgram.code-insuranceProgram.version)
	
- System updates Period using the request parameters and calculated values
- End Date = endDate
- End Date Original = endDateOriginal
- Premium Terminated = premiumTerminated (if provided)
- Net Premium Terminated = if premiumTerminated is provided, get value by rule Calculate Net Premium based on Revenue Share with InsuranceProgram, premiumTerminated, sumInsured
	
- End

## 🔗 Connections (2)

- → Dependency: [[Get Insurance Program data from INSR]]
- ← UseCase «include»: [[{ADD}11.060 Terminate Deal (VAS) (UseCase 1829626)]]

## 📊 Appears In (2 diagrams)

- Use Case: CSI-2968 Terminate Deal method - use cases
- Use Case: Deal management - Use Case Model
