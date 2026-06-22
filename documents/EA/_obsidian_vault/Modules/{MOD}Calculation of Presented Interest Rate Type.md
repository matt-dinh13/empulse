---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms"
domain: "Modules"
element_id: 1877828
diagrams: 3
connections: 15
tags:
  - requirement
  - modules
---

# 📋 {MOD}Calculation of Presented Interest Rate Type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Presented Interest Rates/Business Rules/Algorithms

## 📝 Notes

Calculation of PIR - general
Input:
- PIRType
- Financial parameters of offer (OFP) - reference (used and mandatory for REL products, used for offer calculation only)
- Presented IR Parameters (PIRP) - used and mandatory for CEL products

Output: 
- PresentedIRValue (percentage in decimal form. i.e.  1.00 = 100%)

If OFP.ProductVariant.Product.ProductProfile.ProductType = CEL
and PIRP.NominalInterestRate = 0 
and PIRP.WithDrawalAmount = PIRP.ProvidedLoanAmount 
and PIRP.TotalMonthlyPayment = PIRP.Annuity 
then return PresentedIRValue = 0.

Use following algorithm corresponding with PIRType from input:
Calculation of Presented Flat Rate per year (CFR_Y)
Calculation of Presented Flat Rate per month (CFR_M)
Calculation of Presented IRR per month (IRR_M)
Calculation of Presented IRR per month extended (IRREXT_M)
Calculation of Annual interest rate from Product definition (AIR_P) 
Calculation of XIRR (XIRR)
{ADD PCG-5753}IN only: Calculation of Nominal XIRR (XIRR_N) {/ADD}
Calculation of Effective interest rate per Month (EIR_M)
Calculation of Effective interest rate per Year (EIR_Y)
Calculation of interest rate derived from ACT/365 per year (R365_Y)
with PIRP from input as parameter.

Use following algorithm corresponding with PIRType from input:
Calculation of IRR per Year for REL - initial transaction only (XIREL1)
Calculation of IRR per Year for REL - initial and extra transaction (XIREL2)
with OFP from input as parameter.

## 🔗 Connections (15)

- ← Dependency: [[Calculation of Presented IR types]]
- ← Generalization: [[Calculation of Presented IRR per month (IRR_M)]]
- ← Generalization: [[{ADD}Calculation of Nominal XIRR (XIRR_N)]]
- ← Generalization: [[Calculation of Flat Rate per year (CFR_Y)]]
- ← Generalization: [[Calculation of IRR per Year for REL - initial transaction only (XIREL1)]]
- ← Generalization: [[Calculation of IRR per Year for REL - initial and extra transaction (XIREL2)]]
- ← Generalization: [[Calculation of XIRR (XIRR)]]
- ← Generalization: [[Calculation of interest rate derived from ACT_365 per year (R365_Y)]]
- ← Generalization: [[Calculation of Effective interest rate per Year (EIR_Y)]]
- ← Generalization: [[Calculation of Presented IRR per month extended (IRREXT_M)]]
- ← Generalization: [[Calculation of Flat Rate per month (CFR_M)]]
- ← Generalization: [[{ADD}Calculation customer effective interest rate recalculated for simple interest (APR_Y)]]
- ← Generalization: [[Calculation of Monthly interest rate from Product (AIR_M)]]
- ← Generalization: [[Calculation of Annual interest rate from Product definition (AIR_P)]]
- ← Generalization: [[Calculation of Effective interest rate per Month (EIR_M)]]

## 📊 Appears In (3 diagrams)

- Custom: Algorithms for calculation of Presented Interest Rates
- Custom: Evaluation of Presented interest rates
- Custom: PCG-5753 BRIN-1220 - APR Computation Logic change
