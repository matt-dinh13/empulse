---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API"
domain: "Modules"
element_id: 1876161
diagrams: 3
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Determine register inclusion date

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-548 INSR - integrate BSL to module API

## 📝 Notes

Determines the reference date for including an insurance period in the insurance register

Input parameters:


	
- insurance period start date - the starting date of insurance period whose register inclusion date is being calculated


	
- insurance program - insurance program which the insurance contract for which the register inclusion date is being determined is based on


Output parameters:


	
- register inclusion date


Processing:

1. System calculates register inclusion date:
- If insurance program.Register Inclusion Date Calculation = "FIRST DAY OF INSURANCE" then register inclusion date = insurance period start date
- If insurance program.Register Inclusion Date Calculation = "LAST DAY OF FIRST MONTH" then register inclusion date = last day of month in which insurance period start date occurred.
-If insurance program.Register Inclusion Date Calculation = "DAY OF INSURANCE DISBURSEMENT" then register inclusion date is determined as follow:
-- if GlobalParameter.IsOBS = True then register inclusion date is not set. Setting of the date is ensured by UC 05.350 Process disbursement confirmation message after payment delivering is confirmed by OBS
-- if GlobalParameter.IsOBS = False (or NULL) then register inclusion date is not set. Setting of the date is ensured by 05.230 Process outgoing payments after the payment is included into a Payment Order

2. System adds defined number of days (Insurance_Program.Register_Inclusion_Date_Offset, use 0 if not set) to the register inclusion date

## 🔗 Connections (1)

- ← Dependency: [[11.020 Add insurance period (UseCase 1879775)]]

## 📊 Appears In (3 diagrams)

- Custom: CSI-548 INSR - integrate BSL to module API
- Custom: Insurance contract
- Use Case: Create and Sign Insurance contract
