---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/Business Rules"
domain: "Modules"
element_id: 1799958
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {ADD}Check Customer offers availability on Salesroom

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/Business Rules

## 📝 Notes

{ADD CLM-3701/} -- taken from the original LOR function Check availability of offers on salesroom, created for CLM usage only!
This rule describes the steps for checking availability of provided offers on the provided Salesroom

Input:
- Offer [1..n] = object(s) of respective Offer(s) to be checked for their availability on a salesroom
- SalesroomCode = code of the salesroom to be used for the availability check

Output:
- AvailableOnSalesroom [1..n] = flag (boolean) indicating existence of the offer on the salesroom specified by SalesroomCode


Steps:

	
- System takes each Offer from the input and sets its availability flag to a default positive value (i.e. AvailableOnSalesroom = TRUE).
	
- System takes the SalesroomCode from the input and checks each Offer for its availability on a corresponding salesroom by calling the IsMarketingOfferAvailableForSalesroomRequest (method of SalesFeaturesWS) with following input parameters (.checkAvailability.*):
   - serialNumber = number (offer index) from a dedicated sequence for particular request
   - salesroomCode = SalesroomCode
   - product.productCode = Offer.productCodes //Separate product element is created for each value from such array
   - productType = Offer.productType //Defined only if Offer.productCodes is null
   - maximalCreditAmount = Offer.maxCreditAmount
   - initialTransactionType = Offer.initTransactionType //Defined only if Offer.productCodes is null
	
- If calling the service fails due to any reason, algorithm continues with the last step.
	
- System receives the IsMarketingOfferAvailableForSalesroomResponse and sets the availability flag for each of the offers based on the returned value of corresponding .checkAvailability.isAvailable attribute (offer is paired with the .checkAvailability element based on the *.serialNumber used in the request). In case some error (*.validationCode) is returned for the offer, system ignores it and continues with the very next offer from the queue.
	
- System returns the final value of AvailableOnSalesroom flag(s) to the calling object. Algorithm ends.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}Get active Customer offers]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Client Management
