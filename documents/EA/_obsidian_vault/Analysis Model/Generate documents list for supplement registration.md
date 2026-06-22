---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Business rules"
domain: "Analysis Model"
element_id: 1862935
diagrams: 5
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Generate documents list for supplement registration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement management/Business rules

## 📝 Notes

This algorithm created list of documents which have to be checked/registered within a Contract Supplement processing

Input:

	
- Contract Supplement which is being processed


Output:

	
- Ordered list of Documents and related Document Type settings



	
- {ADD CSI-1122}If CLM Feature Flag.useDmsForSupplementRegistration = 1, it is continued with UseDmsForSupplementRegistration scenario, else it is continued with next steps{/ADD}
	
- System selects all Documents marked for registration of the given Contract Supplement (Contract Supplement ->Contract Supplement Document->Document AND Client Supplement Document -> Document having Document_Type_Flag = CREDIT_DOC).
	
- System orders document list according to attribute Document Type.Sort Order and Document Type.Name.
	
- For each Document, system selects all its attributes (names and values) and orders them according to Document_Type_Attribute.Sort_Order, Document_Type_Attribute.Name.
	
- System returns ordered list of Documents with their attributes.


{ADD CSI-1122}
UseDmsForSupplementRegistration scenario

	
- System gets all Document UUID(s) from Contract Supplement Document and Client Supplement Document related to the Contract Supplement
	
- If no Contract Supplement Document exists,  MSG_NO_DOCUMENT_FOR_REGISTRATION ("No document for registration was found.") and empty Document list is returned and then scenario ends
	
- System gets only Documents intended for the registration from the Document UUID(s) obtained by calling DMS ../documents/ with parameters (filterApiDto):
- documentUuids = Document UUID(s)
- documentFlag = 'CREDIT_DOC'
	
- If no Document is returned (404 not found), MSG_NO_DOCUMENT_FOR_REGISTRATION ("No document for registration was found.") and empty Document list is returned and the scenario ends
	
- If an error happens in the call, system logs the error,  the error MSG_DMS_ERROR (e.g., "Document archive not available, please try again later.") and the scenario ends
	
- System gets Document Types by calling https://dms.id00a1.cz.infra/rest/v2/document-types?[documentTypeCodes={Document.typeCode}] array from previous call, projections=FULL, activeOnly=true -- needed for control od the document attributes behaviour on the UI
	
- System removes invisible attributes from the returned Documents (i.e.
	
- System returns ordered list of the Documents and their attributes.

{/ADD}

## 🔗 Connections (3)

- ← Dependency: [[13.271 Register supplement automatically]]
- ← Dependency: [[13.270 Register Contract supplement]]
- ← Dependency: [[13.275 Show supplement registration]]

## 📊 Appears In (5 diagrams)

- Custom: Business rules
- Custom: CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions
- Use Case: Contract supplement registration
- Use Case: Contract tracking
- Use Case: CSI-1122 Use DMS in Contract Supplement registration functions
