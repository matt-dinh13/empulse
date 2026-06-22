---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule"
domain: "Analysis Model"
element_id: 1507679
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Search for transactions rule - countries specification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule

## 📝 Notes

All defined criteria are forwarded to the Account management via GetAccountItemRequest method of interface AccountUIWS

1. User can fill 0..* search criterions from first group (Debits, Interest, Fees, Penalties, Payments, GORUA)
Entered search criteria:

	
- If "Debits" = true then system fills AccountItemSearch.tariffItemTypeCategory = PRINCIPAL and INSURANCE
	
- If "Interest" = true  then  system fills AccountItemSearch.tariffItemTypeCategory = INTEREST and INTEREST_CREDIT
	
- If "Fee" = true then  system fills AccountItemSearch.tariffItemTypeCategory = FEE
	
- If "Penalties" = true then  system fills AccountItemSearch.tariffItemTypeCategory = PENALTY
	
- If "Payment" = true then  system fills AccountItemSearch.tariffItemTypeCategory = PAYMENT
	
- If "GORUA" = true then system fills AccountItemSearch.tariffItemTypeCategory = OTHER

{ADD CLM-1135} 
1.1 User can fill search criteria RTL

	
- If "RTL" = true then system fills AccountItemSearch.tariffItemTypeCode = RTL

{/ADD}

2. User can use from second group search criterion ACC_BillingPeriods_combo.item OR {"transaction from" and "transaction to"}
Entered search criteria:
If ACC_BillingPeriods_combo.item is selected then system takes item from combobox ACC_BillingPeriods_combo in Transaction history screen and sets Current period = ACC_BillingPeriods_combo.item(startDate, endDate).
If Transaction from is filled then AccountItemSearch.transactiondateRange (FROM) = filled value.
      If  Transaction to is filled then AccountItemSearch.transactiondateRange (TO)  = filled value. 
      Else filled AccountItemSearch.transactiondateRange (TO) = CURREN DAY.

## 🔗 Connections (2)

- ← Dependency: [[Billing period]]
- → Generalization: [[Search for transactions rule]]

## 📊 Appears In (3 diagrams)

- Custom: Business rule
- Custom: CBL-2410 (CLM-1135) Genesys Operation Part - BSL change_DHS499
- Custom: Tab - Transaction History
