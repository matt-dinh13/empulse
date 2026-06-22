---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Installment Schedule"
domain: "Modules"
element_id: 1878744
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 {DEL}Interest ACT365 coefficient algorithm

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Installment Schedule

## 📝 Notes

{DEL PCG-691/}
This algorithm describes way of calculation relative coefficient based on ACT/365 method to determine interest period length. The algorithm is used for calculation of interests per the defined period in installment schedule.

Input parameters:

	
- SIP - start of interest period (the first interest period starts with the virtual signature day)
	
- EIP - end of interest period (the first interest period ends with the first due date)
	
- AIR - annual interest rate (%)


Output:

	
- Interest_Coefficient


If YEAR(SIP)<>YEAR(EIP) then -- check if interest period takes the next year
- IF(MODULO(YEAR(SIP);4)<>0 then Year_Length_SIP = 365 ELSE Year_Length_SIP = 366 –determine SIP length of year
- Year_End_SIP = DATE(YEAR(SIP);12;31) --date of end year
- Interest_Coefficient = 1 + (Year_End_SIP - SIP) * AIR/Year_Length_SIP --interests per SIP year part
- IF(MODULO(YEAR(EIP);4)<>0 then Year_Length_EIP = 365 ELSE Year_Length_EIP = 366 --determine EIP length of year
- Interest_Coefficient = Interest_Coefficient + (EIP - Year_End_SIP) * AIR/Year_Length_EIP) -- add interest per EIP year part
ELSE
-If EIP - SIP > 0 then -- interest period exists
--If MODULO(YEAR(SIP);4)<>0 then Year_Length = 365 ELSE Year_Length = 366
-- Interest_Coefficient = 1+(EIP-SIP)*AIR/Year_Length
-Else
-- Interest_Coefficient = 0

## 📊 Appears In (1 diagrams)

- Use Case: OVERVIEW - Installment Schedule
