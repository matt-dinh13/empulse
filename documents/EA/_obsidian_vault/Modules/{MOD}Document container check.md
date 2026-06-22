---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1835624
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 {MOD}Document container check

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

This rule defines how documents are checked for a product during product offer calculation.
Note that when:

	
- a document container is empty, or
	
- a document container of the required type is missing on the product

check for such container is evaluated as true.
See also linked document on Algorithm: Decision of 1SP or 2SP.

{ADD PCG-3404}System obtains data about document containers according rule Get list of Document Containers with list of documentContainerCodes assigned on product (Product.ProductToDocumentContainer.DocumentContainerCode).{/ADD}

In case of generating of offers from product calculator:
A particular product is selected if:

	
- If global parameter IncludeDocInProductCalculator = 'No', document check is skipped (i.e. evaluated as met), otherwise continue with the next step.
	
- If global parameter OfferProductsWithMissingDocuments = 'Yes', system performs the following check:
- If global parameter RequireAtLeastPrimaryDocuments = "Yes", conditions given only by the default primary-identification-document containers (i.e. default document containers of type 'IDENT' and 'PRIM_IDENT' related to the product) must be met.
- If global parameter RequireAtLeastPrimaryDocuments = "No", document check is skipped (i.e. evaluated as met).
	
- If global parameter OfferProductsWithMissingDocuments = 'No', all documents must meet the conditions given by all default document containers related to the product.


In case of generating of optional offers:
A particular product is selected if:

	
- For status "In pre-process": The temporary-application documents already delivered by the client must meet the conditions given by the default document containers related to the product where WhenRequiredIn2SP = '1BoD'.


	
- For status "In process": All temporary-application documents delivered by the client must meet the condition given by all default document containers related to the product.
When comparing client documents with document types in document container for selected product, each client document must also meet condition of acquiring photo, i.e. one of following conditions for Client document (Temporary_Application->TA_Document) and Document type in document container (Document_Type[.Code=DocumentContainer.documentTypes.code]) must be true:
-- DocumentContainer.documentTypes.photoAcquiringCode in ('PUM', 'PIM', 'PCM') and Client document.Photo_Taking_Result <> NULL
-- DocumentContainer.documentTypes.photoAcquiringCode in ('PCU', 'PCO', 'PD') and Client document.Photo_Taking_Result = any value or NULL

Otherwise such document cannot be used to fulfill condition of the respective document container.

## 🔗 Connections (3)

- ← Dependency: [[Product offer search result]]
- → Dependency: [[Default document container]]
- ← Dependency: [[{MOD}Product selection]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate product offer
- Custom: Product and Service selection
