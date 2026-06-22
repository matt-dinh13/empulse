---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1303852
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Sorting of generated Optional product offers

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

The found offers are sorted as Blaze specifies (see below) and up to numOfferDisplayed offers are returned. If Blaze did not provide any sort options, the offer with the highest profitability is returned.

Blaze returns following parameters:


	
- sortAttribute 1/2 - defines attribute for sorting on the first/second level (code of attribute corresponds with the name of variable in program code):
- creditAmount -> applied on Offer.CreditAmount
- cashPayment-> applied on Offer.CashPayment
- annuity -> applied on Offer.Annuity
- totalMonthlyPayment -> applied on Offer.TotalMonthlyPayment
- totalPaymentPerCredit -> applied on Offer.TotalPaymentPerCredit 
- terms -> applied on Offer.Terms
- interestRate -> applied on Offer.InterestRate



	
- sortOrder 1/2 - defines order of sorting on the first/second level:
- ascending ('A') - the offer with the minimal value in sortBy attribute will be the first in the sorted list
- descending ('D') - the offer with the maximal value in sortBy attribute will be the first in the sorted list


Offers are at first sorted according to attributes sortAttribute1 and sortOrder1. If there are some offers on the same level after the sorting, they are sorted within the level according to attributes sortAttribute2 and sortOrder2.


	
- numOfferDisplayed - defines number of offers to be returned, in other word the first numOfferDisplayed offers will be returned

If numOfferDisplayed > 1 and offers of both types (CEL, REL) were calculated then the participation of both the types is defined as follows:
- numOfferTotalREL = total number of calculated offers of productType = REL
- numOfferTotalCEL = total number of calculated offers of productType = CEL  
- numOfferREL = trunc(numOfferDisplayed/2)  
- numOfferCEL = numOfferDisplayed  - numOfferREL 
- if numOfferTotalREL < numOfferREL then 
--- numOfferREL = numOfferTotalREL
--- numOfferCEL = minimum (numOfferTotalCEL, numOfferDisplayed - numOfferREL)
- if numOfferTotalCEL < numOfferCEL then 
--- numOfferCEL = numOfferTotalCEL
--- numOfferREL = minimum (numOfferTotalREL, numOfferDisplayed - numOfferCEL)
- the first numOfferCEL sorted offers are returned where productType = CEL
- the first numOfferREL sorted offers are returned where productType = REL

## 🔗 Connections (1)

- → Generalization: [[Sorting of generated offers]]

## 📊 Appears In (1 diagrams)

- Custom: Calculate product offer
