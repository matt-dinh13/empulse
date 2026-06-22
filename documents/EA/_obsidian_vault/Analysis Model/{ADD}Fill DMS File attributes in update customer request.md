---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client update/Business Rules"
domain: "Analysis Model"
element_id: 1647322
diagrams: 5
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Fill DMS File attributes in update customer request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client update/Business Rules

## 📝 Notes

{ADD CLM-3051/}
This procedure fills update request attributes UpdateCustomerDataRequest.requestBody.Customer.Document.dmsId and .dmsIdBack (alias Document.dmsId and Document.dmsIdBack) according  Document Type Page Specification. 

Input:

	
- Client document


Steps:

	
- If Client document -> Document DMS File[where File Type = File].count = 1 then Document.dmsId = Document -> Document DMS File -> DMS  File.External Id
	
- If Client document -> Document DMS File[where File Type = File].count > 1 and Document Type -> Document Type Page Specification.exists and Document Type -> Document Type Page Specification[where Sort Order is not Null).count = 0 then:
- Document.dmsId = Client document -> Document DMS File[ where File Type = File and Document Type Page Specification.Sort Order is min] -> DMS  File.External
- Document.IddmsIdBack = Client document -> Document DMS File[ where File Type = File and Document Type Page Specification.Sort Order is second min] -> DMS  File.External Id
else:
- Document.dmsId = Document -> Document DMS File[where File Type = File and Id is min] -> DMS  File.External
- Document.IddmsIdBack = Client document -> Document DMS File[where File Type = File and Id is second min] -> DMS  File.External Id
	
- System returns Document.dmsId and Document.dmsIdBack

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Update client document in PIF for selected customer]]
- ← Dependency: [[06.021 Update client data from contract]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Custom: REQ #2 - Send document.dmsId on KYC document update
- Custom: REQ #3 - Send document.dmsId on full person update
- Use Case: Client update
- Use Case: Edit client documents
