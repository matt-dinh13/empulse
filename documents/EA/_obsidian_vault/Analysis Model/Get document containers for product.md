---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822822
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Get document containers for product

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

This object describes the steps, how system gets the document containers applicable for the specific product.

Input:

	
- ProductCode = code of the product
	
- ProductVersion = version of the product


Output:

	
- Array of following information-sets [0..n]:
   - DocumentContainer = object of the respective document container
      - MinCountOfDocuments = minimum number of documents from the respective document container, which must be provided
      - WhenRequiredIn2SP = specification of the block of data, for which the respective document container is applicable for in 2SP
      - ClientScoringSegmentCode [0..n] = code of the client scoring segment, for which the respective document container is applicable for
	
- ErrorCode (optional) = code of the error, when some technical issues occur during the performed steps


Steps:

	
- System performs the following sub-steps:
1.1. System takes the ProductCode and ProductVersion from the input and gets the data of the corresponding product by calling the respective REST API provided by the Product Catalog module (i.e. GET Products) with following input parameters:
   - codeversions = ProductCode + ":" + ProductVersion //e.g. 'PROD:2'
   - deps = 'CONTAINER_RULES'

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.

1.2. System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested product, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.

1.3. System takes each received Product.containerRules.documentContainerCode from the response and gets the data of the corresponding document containers by calling the respective REST API provided by the Document Management System module (i.e. GetDocumentContainerRequest) with following input parameters:
   - documentContainerCodes = Product.containerRules.documentContainerCode
   - activeOnly = TRUE

If calling the service fails due to any reason, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends.

1.4. System receives an applicable REST API response and proceeds based on the returned data accordingly - in case no data are returned for the requested document containers, system returns the respective ErrorCode ('MSG_ModuleCommunicationFailure') to the calling object and algorithm ends..
	
- System takes each found document container, pairs them with the previously retrieved Product.containerRules.* / Product_To_Document_Container.* data (using the GetDocumentContainerResponse.documentContainers.code / Document_Container.Code) and returns them to the calling object in an array constructed as follows:
   - DocumentContainer = GetDocumentContainerResponse.documentContainers.* / Document_Container and the related instances of Document_Container_To_Document_Type
      - MinCountOfDocuments = Product.containerRules.minCountOfDocuments / Product_To_Document_Container.Min_Count_Of_Documents
      - WhenRequiredIn2SP = Product.containerRules.whenRequiredIn2SP / Product_To_Document_Container.When_Required_In_2SP
      - ClientScoringSegmentCode = Product.containerRules.clientScoringSegmentCodes / Product_To_Document_Container.Required_For_Client_Scoring_Segment
	
- Algorithm ends.

## 🔗 Connections (3)

- ← Dependency: [[Necessary documents]]
- ← Dependency: [[Get document containers for applicable client scoring segment]]
- ← Dependency: [[Algorithm_ Decision of 1SP or 2SP]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
