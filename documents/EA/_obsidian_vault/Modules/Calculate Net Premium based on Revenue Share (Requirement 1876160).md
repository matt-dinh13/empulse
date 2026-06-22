---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1876160
diagrams: 5
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Calculate Net Premium based on Revenue Share

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

The rule describes calculation Net Premium amount based on revenue share for insurance company

Input Parameters:
 

	
- insurance premium - insurance premium (full - paid by client)
	
- sum insured - sum insured
	
- insurance program - insurance program which the insurance contract for which the net premium is being calculated is based on


Output parameters:
 

	
- Net Premium


Processing:
 

	
- System determines base amount from insurance program.Revenue_Share_Base
- If "INSURANCE PREMIUM" then the insurance premium parameter is taken as a base amount
- If "SUM INSURED" then the sum insured parameter is taken as a base amount
	
- System calculates Net Premium as (1 - insurance program.Revenue_Share) * base amount
	
- System rounds the result according to insurance program.Revenue_Share_Rounding and insurance program.Revenue_Share_Scale

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Calculate new installment amount on service termination]]
- ← Dependency: [[11.020 Add insurance period (UseCase 1879775)]]
- ← Dependency: [[11.122 Finalize insurance period (UseCase 1879773)]]

## 📊 Appears In (5 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
- Custom: Insurance contract
- Use Case: Contract insurance termination
- Use Case: Create and Sign Insurance contract
- Use Case: Insurance based on EOM message
