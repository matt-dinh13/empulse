---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9145 - Revamp customer loan journey"
domain: "Requirements Model"
element_id: 1822790
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Save Lender from offer to application

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9145 - Revamp customer loan journey

## 📝 Notes

Renamed from 'Save Lender party to application'.

This object describes the steps, how system retrieves the primary lender (party with major financing share to be owning the respective contract) from the selected offer and saves it including its related data for the selected application.

Input:
- ApplicationCode = unique identifier of the application
- OfferCode = unique identifier of the selected product offer

Steps:

	
- System takes the OfferCode from the input and gets the detailed data about the product related to the corresponding offer (i.e. product used for the calculation of such offer) by calling the respective REST API provided by the Product Catalog module (i.e. GET Products) with following input parameters:
   - codeversions = Offer_Financial_Parameters[.Code=OfferCode]->Product_Variant->Product.Code + ":" + .Version_Number (e.g. 'CLX_LENDER:3')

If calling the service fails due to any reason, system returns the MSG_MODULECOMMUNICATIONFAILURE message and algorithm ends without saving any lender data.
	
- System receives the ProductDto response - in case the .lender returned within such response is null, algorithm ends without saving any lender data.
	
- System takes the ApplicationCode from the input and saves the applicable lender data onto the corresponding application according to the rule Save Lender party to application with respective ApplicationCode and ProductDto.lender as LenderCode on the input.
	
- Algorithm ends.

## 🔗 Connections (4)

- → Dependency: [[Save Lender party to application]]
- ← Dependency: [[Application Processing]]
- → Dependency: [[products (Class 1850263)]]
- ← Dependency: [[01.311 Update offer to application and evaluate (UseCase 1879293)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9145 - Revamp customer loan journey
