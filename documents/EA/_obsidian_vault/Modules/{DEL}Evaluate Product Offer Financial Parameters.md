---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1762318
diagrams: 2
connections: 10
tags:
  - requirement
  - modules
---

# 📋 {DEL}Evaluate Product Offer Financial Parameters

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

{DEL PCG-707/}
// Evaluation of Offer Financial Parameters 

Inputs:

	
- Product
	
- LoanPreferences


	
- OfferParameters evaluated and calculated in previous steps
	
- FeesPaidInAdvance
	
- MinCashPaymentLimit
	
- MaxCashPaymentLimit
	
- MinDownPaymentLimit
	
- MaxDownPaymentLimit


	
- MinCreditAmountLimit
	
- MaxCreditAmountLimit


Outputs:

	
- ProductOfferFinancialParameters


DownPayment = 0
// DownPayment for InitialTransationType = POS
If Product.InitialTransationType = POS then:
Execute algorithm Evaluate Down Payment with parameters:
- LoanPreferences
- FeesPaidInAdvance
- MinCashPaymentLimit
- MinDownPaymentLimit
- MaxDownPaymentLimit
which returns
- DownPayment
- Checked
If Checked = False then return no ProductOfferFinancialParameters and algorithm ends.

// End of DownPayment for InitialTransationType = POS

Execute algorithm Evaluate Cash Payment with parameters:
- DownPayment
- FeesPaidInAdvance
- MinCashPaymentLimit
- MaxCashPaymentLimit
which returns
- CashPayment
- Checked
If Checked = False then return no ProductOfferFinancialParameters and algorithm ends.

Calculate and check offer parameters using corresponding algorithms: // original rules used in description 

	
- NetCreditLimit (NCL) according to Net credit limit definition.


	
- NetCreditAmount (NCA), according to Net credit amount definition.
Check if 
-- MaxCreditAmountLimit <= NetCreditLimit <= MaxCreditAmountLimit
-- NetCreditAmount <= NetCreditLimit 
If not then return no ProductOfferFinancialParameters and algorithm ends.
{ADD TPH-5091}
For Product.ProductType = REL check if 
Product.FinancingScheme.MinimalTransactionAmount <= NetCreditLimit
Product.FinancingScheme.MaximalTransactionAmount >= NetCreditLimit
Limits Maximal/MinimalTransactionAmount are checked only if defined on FinancingScheme.
If check fails then return no ProductOfferFinancialParameters and algorithm ends.
{/ADD}
	
- Fees from SetOfFees (which have not been calculated yet) according to Fees calculation.
	
- ProvidedCreditAmount (PCA), according to Provided Credit Amount definition.
	
- ProvidedCreditLimit (PCL), according to Provided Credit Limit definition.

{DEL TPH-5091}
{ADD PCG-1457}

	
- // Checking of Provided Credit Limit
For Product.ProductType = REL check if 
Product.FinancingScheme.MinimalTransactionAmount <= ProvidedCreditLimit
Product.FinancingScheme.MaximalTransactionAmount >= ProvidedCreditLimit
Limits Maximal/MinimalTransactionAmount are checked only if defined on FinancingScheme.
If check fails then return no ProductOfferFinancialParameters and algorithm ends.

{/ADD}
{/DEL}

	
- MinimalMonthlyInstallment according to Presented Minimal Monthly Installment.
If LoanPreferences.MaximalMonthlyPayment(MaxMonthlyPaymentLimit) is defined then checks if the calculated MinimalMonthlyInstallment  <= MaxMonthlyPaymentLimit. 
If not then return no ProductOfferFinancialParameters and algorithm ends.


	
- // Campaign Offer checking
If a campaign (CO) is defined in LoanPreferences then check if:
- NetCreditLimit <= CO.MaximalCreditAmount
- MinimalMonthlyInstallment <= CO.MaximalMonthlyPayment
- CashPayment >= CO.MinimalCashPayment
If not then return no ProductOfferFinancialParameters and algorithm ends.
	
- // Marking of Products with Marketing action
If LoanPreferences.MarketingAction is defined on input and the same marketing action is assigned to Product then set MarketingActionIndicator to True else set to False


Return set of ProductOfferFinancialParameters calculated above.

## 🔗 Connections (9)

- → Dependency: [[Net Credit Limit definition]]
- → Dependency: [[Provided Credit Amount definition]]
- → Dependency: [[{MOD}Net Credit Amount definition]]
- → Dependency: [[{MOD}Evaluate Cash Payment]]
- → Dependency: [[{MOD}Presented Minimal Monthly Installment]]
- → Dependency: [[{MOD}Fees calculation]]
- → Dependency: [[Evaluate Down Payment]]
- → Dependency: [[Provided Credit Limit definition]]
- ← Dependency: [[{DEL}Evaluation of Product Offers]]

## 📊 Appears In (2 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Evaluation of Products based on Financing Scheme
