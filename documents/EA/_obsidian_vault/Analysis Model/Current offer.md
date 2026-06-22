---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Contract Detail"
domain: "Analysis Model"
element_id: 1755517
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Current offer

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Contract Detail

## 📝 Notes

Grid showing the currently-chosen offer (Offer_Financial_Parameters.Chosen = 'yes').
Order of columns:

	
- Product preference (Bestseller)
	
- Number of installments
	
- Monthly installment
	
- Cash payment
	
- Presented interest rate
	
- Product code
	
- Feature indication
	
- Icons/Buttons


Because at most one offer can be shown, sorting is not needed.

Localization code: CON_CurrentApprovedOffer or CON_CurrentPreApprovedOffer or CON_CurrentRejectedOffer (depends on the status)

## 🔗 Connections (4)

- → Realisation: [[REQ2_ Contract detail modification]]
- → Dependency: [[01.071 Show product offer info (overview) (UseCase 1827714)]]
- → Dependency: [[01.158 Accept offer (UseCase 1827719)]]
- → Dependency: [[Presented interest rate in Grids]]

## 📊 Appears In (1 diagrams)

- Custom: Product Offers in Contract detail

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Product preference | icon |  |
| Number of MI | number |  |
| Credit limit | number |  |
| Financed amount | number |  |
| Monthly Installment | number |  |
| Cash payment | number |  |
| Presented Interest Rate | number |  |
| Features indication | Icons |  |
| Product name | text |  |
| Functional Icons | Icons |  |
