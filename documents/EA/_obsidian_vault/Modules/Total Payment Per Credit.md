---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1878842
diagrams: 5
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Total Payment Per Credit

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

Total Payment per Credit defines total sum of money which client has to pay for financing his need.
It is calculated only for ProductType = CEL or ProductType = SAI (for product type = REL the Total Payment Per Credit = 0).

If Installment Schedule Method in (IS_ALG_EQ_PRINC, IS_ALG_AN_PRINC) then:
If already exists installment schedule for the contract (i.e. at least one active installment), it will be used for calculation.
Else system generates preliminary Installment schedule according to rule Generation of Preliminary Installment Schedule.
TotalPaymentPerCredit is defined as sum of all installment parts of type Principal (S) + Interest (I) + Fee (F) 

If Installment Schedule Method NOT in (IS_ALG_EQ_PRINC, IS_ALG_AN_PRINC) then:
TotalPaymentPerCredit = CashPayment + (Terms * TotalMonthlyPayment)
If FirstInstallmentAmount > TotalMonthlyPayment then 
-- TotalPaymentPerCredit = TotalPaymentPerCredit  + (FirstInstallmentAmount - TotalMonthlyPayment).
If AnnualInterestRate (OFP/FP.InterestRate) = 0 then
-- Difference = Annuity * Term - ProvidedCreditAmount //All retrieved from Offer_Financial_Parameters / Financial_Parameters).
-- TotalPaymentPerCredit = TotalPaymentPerCredit  - Difference 
CashPayment, TotatlMonthlyPayment and FirstInstallmentAmount are already calculated financial parameters ( see Cash Payment, Total Monthly Payment, First Installment Amount).

## 🔗 Connections (6)

- ← Dependency: [[{ADD}Generation of CEL Installment Plan]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- → Dependency: [[{MOD}Generation of Preliminary Installment Schedule]]
- → Dependency: [[Cash payment definition]]
- → Dependency: [[Total Monthly Payment definition]]

## 📊 Appears In (5 diagrams)

- Custom: Calculation of financial parameters of offer
- Custom: Evaluation of IP for Product Offer with Financing Scheme
- Custom: Financial calculations
- Use Case: Determine installment schedule processing
- Use Case: Determine installment schedule processing
