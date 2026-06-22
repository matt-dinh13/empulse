---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms/XIREL calculation"
domain: "Modules"
element_id: 1121361
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 XIREL Calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms/XIREL calculation

## 📝 Notes

Calculation of PIR of type XIREL1 or XIREL2

Input: 
- financial parameters of offer/contract (FP)
- type of calculation (XIREL1 or XIREL2)
Only for revolving loans (calculation for debit cards not supported).

Output: 
- Presented IR value (percentage)

Steps: 

If the offer/contract on input is related to revolving loan then:

	
- If the revolving is of subtype Debit Card (i.e. FP.Contract.Product.ProductProfile,IsDebit = TRUE) or FP.NetCreditLimit = 0 then PresentedIR = 0.


	
- Else calculate PresentedIR as follows:
- Generate fictitious cash flow according to rule Generation of cash flow for XIRR calculation with FP and type of calculation from input as parameters.
- If empty cash flow is returned then set PresentedIR = null else calculate PresentedIR from the prepared fictitious cash flow according to XIRR algorithm.


Else raise exception.

## 🔗 Connections (4)

- → Dependency: [[Generation of cash flow for XIRR calculation]]
- → Dependency: [[XIRR algorithm]]
- ← Dependency: [[Calculation of IRR per Year for REL - initial transaction only (XIREL1)]]
- ← Dependency: [[Calculation of IRR per Year for REL - initial and extra transaction (XIREL2)]]

## 📊 Appears In (1 diagrams)

- Custom: XIREL calculation
