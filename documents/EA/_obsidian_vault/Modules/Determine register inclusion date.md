---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules"
domain: "Modules"
element_id: 1827554
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Determine register inclusion date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/VAS Deal/Business rules

## 📝 Notes

Determines the reference date for including an insurance period in the insurance register

Input parameters:
 

	
- insurance period start date - the starting date of insurance period whose register inclusion date is being calculated


	
- insurance program - insurance program which the insurance contract for which the register inclusion date is being determined is based on


Output parameters:
 

	
- RegisterInclusionDate


Processing:

1. System calculates register inclusion date:
- If insurance program.Register Inclusion Date Calculation = "FIRST DAY OF INSURANCE" then RegisterInclusionDate = insurance period start date
- If insurance program.Register Inclusion Date Calculation = "LAST DAY OF FIRST MONTH" then RegisterInclusionDate = last day of month in which insurance period start date occurred.
- If insurance program.Register Inclusion Date Calculation = "DAY OF INSURANCE DISBURSEMENT" then register inclusion date is not set. 
2. System adds defined number of days (Insurance_Program.Register_Inclusion_Date_Offset, use 0 if not set) to the RegisterInclusionDate

## 🔗 Connections (3)

- ← Dependency: [[11.020 Create deal period]]
- ← Dependency: [[{ADD}11.076 Finalize Deal Period]]
- ← Dependency: [[11.022 Update deal period]]

## 📊 Appears In (4 diagrams)

- Custom: Business rules
- Use Case: Deal management - Use Case Model
- Use Case: Deal Period prolongation - Use Case Model
- Use Case: Deal prolongation method
