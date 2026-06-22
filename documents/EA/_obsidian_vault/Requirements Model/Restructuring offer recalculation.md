---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9759 (CLM-3059) Create API for Loan restructuring"
domain: "Requirements Model"
element_id: 1762063
diagrams: 3
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Restructuring offer recalculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9759 (CLM-3059) Create API for Loan restructuring

## 📝 Notes

This rule describes recalculation of annuity for loan restructuring offer returned by BLAZE

Input parameters

	
- Contract
	
- totalAmountRestructured
	
- interestRateOffered
	
- annuityOffered
	
- paymentNumOffered
	
- firstDueDateRestructured
	
- keepInstallmentAmount


Output parameters
Result object with attributes:
- interestRate
- annuity
- paymentNum

Steps:

	
- Get InstallmentScheduleMethod from Contract.Financial Parameters
	
- Get DayCountMethod from Contract.Financial Parameters.ProductVariant.Product.ProductProfile.DayCountMethod
	
- {ADD CLM-3088}
If keepInstallmentAmount = TRUE then calculate NewTerm by New term calculation  with parameters
- AIR (interest rate) = interestRateOffered
- Annuity = annuityOffered
- Annuity Base Amount = totalAmountRestructured
- Installment Schedule Method = InstallmentScheduleMethod
- Day Count Method = DayCountMethod
- StartDate = firstDueDateRestructured - 1 month
- FirstDueDate = firstDueDateRestructured

If term is calculated (no error occurred) then set Result as:
- interestRate = interestRateOffered
- annuity = annuityOffered
- paymentNum = newTerm
	
- else (keepInstallmentAmount = FALSE or null){/ADD} calculate NewAnnuity by Annuity calculation with parameters
- AIR (interest rate) = interestRateOffered
- TERM (number of terms) = paymentNumOffered
- Annuity Base Amount = totalAmountRestructured
- Installment Schedule Method = InstallmentScheduleMethod
- Day Count Method = DayCountMethod
- StartDate = firstDueDateRestructured - 1 month
- FirstDueDate = firstDueDateRestructured

If annuity is calculated (no error occurred) then set Result as:
- interestRate = interestRateOffered
- annuity = NewAnnuity
- paymentNum = paymentNumOffered
	
- If an error happen in calculation, set Result as empty

## 🔗 Connections (3)

- → Dependency: [[Annuity calculation]]
- → Dependency: [[New term calculation]]
- ← Dependency: [[13.450 Process supplement approval result (UseCase 1865654)]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-9759 (CLM-3088) Loan restructuring offer calculation update
- Use Case: Contract supplement approval
- Use Case: Loan restructuring request creation - via GUI
