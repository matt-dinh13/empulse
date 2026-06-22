---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters"
domain: "Modules"
element_id: 1762319
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {MOD}Evaluate Cash Payment

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Product with Financing Scheme/Offer Financial Parameters

## 📝 Notes

// Down payment calculation

Input:

	
- {ADD PCG-707}LoanPreferences{/ADD}


	
- DownPayment


	
- FeesPaidInAdvance


	
- MinCashPaymentLimit
	
- MaxCashPaymentLimit


Output:

	
- CashPayment


	
- Checked - returns false if calculated CashPayment is out of limits


// CashPayment calculation
CashPayment = DownPayment + FeesPaidInAdvance

// CashPayment validation
Checked = True
If MinCashPaymentLimit is defined and CashPayment < MinCashPaymentLimit then Checked = False
If MaxCashPaymentLimit is defined and CashPayment > MaxCashPaymentLimit then Checked = False

{ADD PCG-707}
// Campaign Offer checking
If a campaign (CO) is defined in LoanPreferences then check if:
- CashPayment >= CO.MinimalCashPayment
If not then Checked = False
{/ADD}

Return CashPayment, Checked.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}Evaluate Product Offer Financial Parameters]]
- ← Dependency: [[{MOD}NEW_Evaluation of Product Offers]]

## 📊 Appears In (2 diagrams)

- Custom: {DEL}Evaluation of Product Offer Financial Parameters
- Custom: Evaluation of Products based on Financing Scheme
