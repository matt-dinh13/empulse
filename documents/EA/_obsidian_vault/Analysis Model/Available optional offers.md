---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Contract Detail"
domain: "Analysis Model"
element_id: 1755514
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Available optional offers

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Contract Detail

## 📝 Notes

Grid showing list of available optional offers (Offer_Financial_Parameters.Status = 'A' and Offer_Financial_Parameters.Type = 'A').
Order of columns:

	
- Product preference (Bestseller)
	
- Number of installments
	
- Credit Limit
	
- Monthly installment
	
- Cash payment
	
- Presented interest rate
	
- Feature indication
	
- Product name
	
- Insurance Premium
	
- Icons/Buttons


Values different from original offer will be marked – bold style.

Offers in grid are sorted by Product preference in order HIGH, MIDDLE LOW.

Localization code: CON_NewOptionalOffer or CON_NewOffer (depends on the substatus)

## 🔗 Connections (3)

- → Dependency: [[Presented interest rate in Grids]]
- → Dependency: [[01.071 Show product offer info (overview) (UseCase 1827714)]]
- → Dependency: [[01.158 Accept offer (UseCase 1827719)]]

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
