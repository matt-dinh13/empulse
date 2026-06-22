---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Insurance/Business Rules"
domain: "Analysis Model"
element_id: 1878855
diagrams: 3
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Simple principal calculation

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Business Rules

## 📝 Notes

Calculation of simple principal (SP).

The prefixes 'x' and 'xx' are defined as follows:

	
- for offers:
- x = Contract->OfferFinancialParameters
- xx = Contract->OfferFinancialParameters->OfferFinancialParameterItem


	
- for contracts:
- x = Contract->FinancialPrameters
- xx = Contract->FinancialParameters->FinancialParameterItem


For loans with initialTransactionType = POS:
Simple principal is the part of the goods price that is the subject of the loan. 

Simple principal = x.Price - Discount - DownPayment
DownPayment = x.CashPayment - (x.AdvancePaymentsNumber * x.Annuity) - Sum(xx.ItemAmount) where xx.ItemAmount is taken for all fee types (origination, service/insurance) paid in advance not included into principal (TariffItemType.ChargingPeriodicity = 'One_Time' and TariffItemType.ToPrincipal = false).
Discount is calculated according to rule Subvention Discount definition .
{ADD PCG-5669}
PH only: Discount = SubventionDiscount + Discount amount
{/ADD}


For evaluation of Eligibility of Insurance Service estimates Product Calculator the base for calculation of Sum insured as follows:
simple principle = price - preferredCashPayment

For loans with initialTransactionType = CASH:
Simple principal defines the real amount of money asked by the client to borrow (because there are no own means, i.e. no down payments, in the case of cash loans).

For Product Calculator the value is defined as preferredLoanAmount.

For contracts the value is taken from:

	
- Contract->FinancialParameters->NetCreditAmount


For offers the value is taken from:

	
- Contract->OfferFinancialParameters->NetCreditAmount


Note that there could be special rules for calculation in product calculator - see use case 01.010 Choose product offer.

## 🔗 Connections (5)

- ← Dependency: [[{MOD}Eligible Insurance Service]]
- ← Dependency: [[Sum Insured calculation]]
- ← Dependency: [[Proportional Simple Principal]]
- → Dependency: [[Subvention Discount definition]]
- → Association: [[REQ#2 A new output attribute remaining cash payment from product calculator]]

## 📊 Appears In (3 diagrams)

- Custom: Eligible Insurance Service
- Custom: Financial calculations
- Custom: PCG-5669 BRPH-2800 - Discount Voucher: Apply Discounts in POS Loan Application
