---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1762320
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Evaluate Down Payment

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

// Down payment calculation

Input:

	
- LoanPreferences


	
- FeesPaidInAdvance


	
- MinCashPaymentLimit
	
- MinDownPaymentLimit
	
- MaxDownPaymentLimit

Output:

	
- DownPayment


	
- Checked - returns false if calculated DownPayment is out of limits


PrefMinCP = LoanPreferences.MinimalCashPayment
PrefMaxCP = LoanPreferences.MaximalCashPayment

// CashPayment estimation
If PrefMinCP is defined then 
-- InitCashPayment = maximum (PrefMinCP, MinCashPaymentLimit)
-- roundingMode = UP
else
-- If PrefMaxCP is defined then
---- InitCashPayment = PrefMaxCP
---- roundingMode = DOWN

// DownPayment calculation
DownPaymentOriginal = 0
If InitCashPayment is defined then DownPaymentOriginal = InitCashPayment - sum(FeesPaidInAdvance)
DownPayment = rounded DownPaymentOriginal with rounding parameters  
- GlobalParameter.AnnuityRoundingScale
- roundingMode (see above)
If DownPayment < 0 then DownPayment = 0

// DownPayment validation
DownPaymentChecked = rounded DownPaymentOriginal with rounding parameters  
- GlobalParameter.AnnuityRoundingScale
- roundingMode = DOWN
If DownPaymentChecked < 0 then DownPaymentChecked = 0
Checked = True
If MinDownPaymentLimit is defined and DownPaymentChecked < MinDownPaymentLimit then Checked   = False
If MaxDownPaymentLimit is defined and DownPaymentChecked > MaxDownPaymentLimit then Checked   = False

Return DownPayment, Checked  .

## 🔗 Connections (2)

- ← Dependency: [[{DEL}Evaluate Product Offer Financial Parameters]]
- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]

## 📊 Appears In (2 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Evaluation of Products based on Financing Scheme
