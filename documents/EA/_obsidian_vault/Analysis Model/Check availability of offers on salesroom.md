---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules"
domain: "Analysis Model"
element_id: 1817936
diagrams: 2
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Check availability of offers on salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Marketing Offers/Business Rules

## 📝 Notes

This object describes the steps, how system checks whether the offers are available on a selected salesroom or not.

Input:
- Offer [1..n] = object(s) of respective Offer(s) to be checked for their availability on a salesroom
- SalesroomCode = code of the salesroom to be used for the availability check

Output:
- AvailableOnSalesroom [1..n] = flag (boolean) indicating, whether the respective offer is available on a specified salesroom or not


Steps:

	
- System takes each Offer from the input and sets its availability flag to a default positive value (i.e. AvailableOnSalesroom = TRUE).
	
- System takes the SalesroomCode from the input and checks each Offer for its availability on a corresponding salesroom by calling the Sales Features REST API POST marketing-offer-availability with the input parameters :
   - requestId = number (offer index) from a dedicated sequence for particular request
   - salesroomCode = SalesroomCode
   - productCodes = Offer.productCodes //Separate product element is created for each value from such array
   - productType = Offer.productType //Defined only if Offer.productCodes is null
   - maximalCreditAmount = Offer.maxCreditAmount
   - initialTransactionType = Offer.initTransactionType //Defined only if Offer.productCodes is null
If calling the service fails due to any reason, algorithm continues with the last step.
	
- System receives the IsMarketingOfferAvailableForSalesroomResponse and sets the availability flag for each of the offers based on the returned value of corresponding .checkAvailability.isAvailable attribute (offer is paired with the .checkAvailability element based on the *.serialNumber used in the request). In case some error (*.validationCode) is returned for the offer, system ignores it and continues with the very next offer from the queue.
	
- System returns the final value of AvailableOnSalesroom flag(s) to the calling object. Algorithm ends.

## 🔗 Connections (4)

- ← Dependency: [[marketing-offer-availability]]
- ← Dependency: [[Get active offers of the party (Requirement 1817943)]]
- ← Dependency: [[Product Marketing Offers (Class 1848540)]]
- ← Dependency: [[Marketing Offer Limits]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules - Marketing Offers
- Custom: CBL-12321 (CLM-4648) Migrate to SalesFeatures REST API
