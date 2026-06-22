---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1773404
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Card service validity

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

This algorithm checks validity of card services.

Inputs:

	
- Unification of stored application data and data from input(APP)


Output: list of

	
- service
	
- validity (true/false)
	
- error message - optional


All validations are done for a list of assigned services defined in Offer Financial Parameters-> Offer Service.
 

	
- Check that card service assigned to offer was sent in request. (MSG_MissingCardService - "Card service with code ${cardServiceCode} is missing")
	
- Check that attributes deliveryType, issueMethod or statement channel for Offer_Card_Service are not empty. (MSG_MissingCardServiceAttribute - "${missingAttribute} is missing on card service with code ${cardServiceCode}.
	
- If Statement channel=EMAIL then record contactTypeCode='PRIMARY_EMAIL' and contactTypeRole=CL is mandatory. (MSG_Required)


If the check fails, the service validity is set to FALSE in the output with error message.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.098 Update and evaluate application v9]]
- ← Dependency: [[01.313 Evaluate application (UseCase 1879292)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: Validation Rules
