---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer/Validation Rules"
domain: "Analysis Model"
element_id: 1708700
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Additive validations for Product Offer Limit

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer/Validation Rules

## 📝 Notes

If bound-product or x-sell calculation method has been selected then following additive validations of 

	
- Values entered in Product Calculator form (Entered)
	
- Attributes of selected Marketing Offer (PartyOffers.Offer) saved in structure responseCMO

are performed:

	
- Entered.CreditAmount + Entered.PlusExtraLimit <= PartyOffers.Offer.maxCreditAmount 
For option Consumer loan calculate Entered.CreditAmount = Total Goods Price - Entered.MaximalCashPayment (MSG_CAMPAIGN_OFFER_MAX_CREDIT_AMOUNT_CHECK)
	
- Entered.MaximalCashPayment >= {(PartyOffers.Offer.minCashPayment) and (entered.total Goods price * PartyOffers.Offer.relativeMinCashPayment (MSG_CAMPAIGN_OFFER_MIN_CASH_PAYMENT_CHECK)
	
- Entered.MaximalMonthlyInstallment <= PartyOffers.Offer.maxMonthlyInst (MSG_CAMPAIGN_OFFER_MAX_MONTHLY_INSTALLMENT_CHECK)
	
- Entered.MaximalNumberOfInstallments  <= PartyOffers.Offer.maxTenor 
(MSG_CAMPAIGN_OFFER_MAX_NUM_OF_INSTALLMENTS_CHECK)


If any of compared values is not defined, corresponding check is evaluated as met.

## 🔗 Connections (4)

- ← Dependency: [[Plus extra limit]]
- ← Dependency: [[Credit amount (GUIElement 1823041)]]
- ← Dependency: [[Maximum monthly payment (GUIElement 1823030)]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Choose product offer
