---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules"
domain: "Modules"
element_id: 1827547
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Calculate Net Premium based on Revenue Share

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules

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
- If other setting, system logs exception ("Unsupported insurance revenue share base on ${insuranceProgram.code}")
	
- System calculates Net Premium as (1 - insurance program.Revenue_Share) * base amount
	
- System rounds the result according to insurance program.Revenue_Share_Rounding and insurance program.Revenue_Share_Scale

## 🔗 Connections (3)

- ← Dependency: [[11.020 Create deal period]]
- ← Dependency: [[{ADD}11.076 Finalize Deal Period]]
- ← Dependency: [[11.022 Update deal period]]

## 📊 Appears In (4 diagrams)

- Custom: Business rules
- Use Case: Deal management - Use Case Model
- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
