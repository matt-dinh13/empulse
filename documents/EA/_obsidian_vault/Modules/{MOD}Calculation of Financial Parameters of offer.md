---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1877717
diagrams: 4
connections: 16
tags:
  - requirement
  - modules
---

# 📋 {MOD}Calculation of Financial Parameters of offer

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

// Calculates financial parameters for offer (common branch for Offer Calculation/Recalculation)
 

	
- System calculates:
- Subvention Discount according to rule Subvention Discount definition.
- For loans with initial transaction type = POS and SAI:
Base = TotalPrice for POS
Base = fees going to principal (Origination fees amount definition with chargedToPrincipal = true) for SAI
--- MinimalCashPaymentOnProduct according to the rule Cash Payment on Product with parameters of product variant (CashPaymentCalculationMethod, MinCashPaymentAmount, MinCashPaymentRate, Base)
--- MaximalCashPaymentOnProduct according to the rule Cash Payment on Product with parameters of product variant (CashPaymentCalculationMethod, MaxCashPaymentAmount, MaxCashPaymentRate, Base)
System calls Offer Calculation Algorithm.If an invalid product offer is generated, system continues with the next available sub-variant.
	
- System calculates Net credit limit (NCL, according to Net credit limit definition)
	
- Fees calculation
System calculates values of required fees (which have not been calculated yet, i.e. in the previous step). This is done by invoking algorithm Fees calculation(with product and services selected for the product sub-variant as inputs). System adds all involved fees to the offer.
	
- If initial transaction type = POS:
If ProductCatalogueGlobalParameter.CALC_USE_DOWNPAYMENT_CHECK = True then system uses 
Down payment check:
Calculated down payment is rounded UP (instead of rounding DOWN in other cases) and system checks if rounded down payment is in interval <MinimalCashPaymentOnProduct, MaximalCashPaymentOnProduct> (upper limit is checked only if defined). If not, the offer is ignored and system continues with the next available sub-variant.
Else system uses 
Cash payment check:
System checks 
- If calculated cash payment is in interval <MinimalCashPaymentOnProduct, MaximalCashPaymentOnProduct> (upper limit is checked only if defined).
- If calculated cash payment is not greater than MaximalCashPayment from input of calculator 
If not satisfied, the offer is ignored and system continues with the next available sub-variant.
	
- System calculates remaining offer parameters: 
- Net cash payment (according to Net cash payment amount definition)
- Net credit amount (NCA, according to Net credit amount definition)
- Provided credit amount (PCA, according to Provided Credit Amount definition)
- Provided credit limit (PCL, according to Provided Credit Limit definition)
- Credit amount (according to Credit amount)
If ProductType = CEL then
- First Installment Amount (according to the rule First Installment Amount)
- Total Payment per Credit (according to Total payment per credit)
	
- Minimal monthly installment check
If ProductType = REL and ProductProfile.IsDebit = FALSE then
- system calculates Minimal Monthly Installment according to the rule Presented Minimal Monthly Installment.
- system checks if the calculated minimal monthly installment <= MaximalMonthlyPayment (if inputted); if not, then the offer is ignored and system continues with the next available sub-variant. MaximalMonthlyPayment is value entered in Product Calculator form or value Annuity_Max from LAP vector.
	
- Credit amount check (only for other than debit products, i.e. NOT(ProductType = REL and ProductProfile.IsDebit = TRUE) and ProductType <> SAI)
If ProductType = CEL then checked amount = NCA else checked amount = NCL.
System checks if ProductVariant.CreditAmountMin <= checked amount <= ProductVariant.CreditAmountMax. If not, then the offer is ignored and system continues with the next available sub-variant.
	
- Annuity check
If ProductType = CEL or SAI then
If checks according to rule Annuity Check with parameters
- Annuity
- ProvidedCreditAmount calculated in previous steps
- Term
- GiftPaymentService - parameters of assigned GIFTP service if such service is assigned to the offer
is not satisfied then the generated offer is skipped and system continues with the next available sub-variant.
	
- {ADD PCG-5669}PH only: Discount
System calculates DiscountedGoodsPrice as TotalPrice - Discount amount/ADD}
	
- Translate ProductVariant.Preference to Preference (integer) according to mapping in Product Preference.

## 🔗 Connections (16)

- → Dependency: [[Net Credit Limit definition]]
- → Dependency: [[{MOD}Fees calculation]]
- → Dependency: [[Total Payment Per Credit]]
- → Dependency: [[{ADD}Annuity check]]
- → Dependency: [[Credit amount definition]]
- → Dependency: [[Provided Credit Amount definition]]
- → Dependency: [[First Installment Amount]]
- → Dependency: [[{MOD}Presented Minimal Monthly Installment]]
- → Dependency: [[Net Cash Payment amount definition]]
- ← Dependency: [[Evaluation of product sub-variant]]
- → Dependency: [[Subvention Discount definition]]
- → Dependency: [[{MOD}Net Credit Amount definition]]
- → Dependency: [[Provided Credit Limit definition]]
- → Dependency: [[Cash Payment on Product]]
- → Dependency: [[{MOD}Offer Calculation Algorithm]]
- ← Dependency: [[{MOD}Offer recalculation]]

## 📊 Appears In (4 diagrams)

- Custom: Calculation of financial parameters of offer
- Custom: Evaluation of product sub-variant
- Custom: Offer recalculation
- Custom: PCG-5669 BRPH-2800 - Discount Voucher: Apply Discounts in POS Loan Application
