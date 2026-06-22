---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules"
domain: "Modules"
element_id: 1824448
diagrams: 5
connections: 7
tags:
  - requirement
  - modules
---

# 📋 Calculation of Presented IR types

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules

## 📝 Notes

// Calculation of Presented Interest Rates (PIR) defined for instance of system

Input: 
- ProductType in offer/contract
- Case - optional, default STANDARD
- Financial parameters of offer (OFP) - optional, used and mandatory for REL products (for offer calculation only)
- Presented IR Parameters (Par) - optional, used and mandatory for CEL products

Output: 
- Collection of (PresentedIRValue, reference to Presented IR Setting)

If ProductType  = CEL then execute algorithm Adjustment of parameters for Presented IR.

For each Setting from Presented IR Setting where all following conditions are satisfied
- Setting.Active = true
- input.ProductType = Setting.ProductType
- input.Case = Setting.Case
ordered by Setting.Order:

	
- Calculate PresentedIRValue according to algorithm Calculation of Presented Interest Rate Type referenced by Setting.PresentedIRtype (see Presented IR Type) with parameters:
- Setting.PresentedIRType
- Par from input
- OFP from input
	
- If ABS(PresentedIRValue) < 10-8 then PresentedIRValue = 0 else round PresentedIRValue according to the rule Rounding with parameters Setting.Rounding, Setting.RoundingScale.


	
- Add (PresentedIRValue, reference to Setting) to output collection


Continue with the next Setting

## 🔗 Connections (7)

- → Dependency: [[{MOD}Calculation of Presented Interest Rate Type]]
- → Dependency: [[Rounding (Requirement 1166384)]]
- → Dependency: [[{MOD}Presented IR Setting]]
- → Dependency: [[{MOD}Adjustment of parameters for Presented IR]]
- ← Dependency: [[Calculate Presented Interest Rate for Loan Service Request]]
- ← Dependency: [[Recalculate Presented Interest rates on financial parameters change]]
- ← Dependency: [[Calculation of Presented IR for Product Offer]]

## 📊 Appears In (5 diagrams)

- Custom: Evaluation of Presented interest rates
- Use Case: Change credit limit manually
- Use Case: Change Due Date processing
- Use Case: Grace period processing
- Use Case: Payment holiday request creation - via GUI
