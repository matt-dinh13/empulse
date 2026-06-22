---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Use Case"
domain: "Modules"
element_id: 1281331
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 ImportOfferLimitRequest - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Data Source/Product Offer Limits (internal DB)/Use Case

## 📝 Notes

Validation of offerLimit, offerLimitClient, offerLimitSegment (parts of ImportOfferLimitRequest):
When the first error is found validations is ended and corresponding ResultCode [in brackets] is returned.

	
- Following data items of offerLimits are mandatory and not null:
- BatchCode
- CampaignID
- Offer name
- CUID in list of assigned clients
- Segment in list of assigned segments
	
- Another batch with the same Batch Code has been already received [WRONG_BATCHCODE].
	
- Exactly one record of offerLimit has been sent in batch.
	
- Number of records in offerLimitClient plus offerLimitSegment assigned to offerLimits does not exceed GlobalParameter.MaximalNumberOfOffers.
	
- Number of records in offerLimitClient plus offerLimitSegment assigned to offerLimits > 0.
	
- If filled in then Product type is from corresponding code list [WRONG_PRODTYPE].
	
- If Product type is filled in then Initial Transaction Type is mandatory and must be from corresponding code list [WRONG_INITTRANSTYPE].
	
- If Initial Transaction Type is filled in then Product Type is mandatory [WRONG_INITTRANSTYPE].
	
- If filled in then active Marketing action exists in corresponding code list [WRONG_MARKACTION].


	
- If Pricing Category is defined and the value is less than 0 then set result = [WRONG_PRICINGCATEGORY].


	
- Currency must correspond with enumeration of enabled currencies in BSL [WRONG_CURRENCY].
	
- Products assigned to offerLimit or offerLimitClient or offerLimitSegment must exist in BSL and must be active (Product.VersionStatus = 'Active' and Product.ValidTo >= current date or is null) [WRONG_PRODCODE]
	
- Products assigned to offerLimitClient or offerLimitSegment has to be subset of products assigned on campaign level (offerLimit) - empty set is allowed for offerLimitClient and offerLimitSegment. [PRODUCTS_NOT_SUBSET]
	
- If productType is not defined in offerLimit then at least one Product must be assigned to offerLimit.

## 🔗 Connections (1)

- ← Dependency: [[02.900 Import product offer limits]]

## 📊 Appears In (1 diagrams)

- Use Case: Management of Product Offer Limits
