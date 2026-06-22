---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer"
domain: "Analysis Model"
element_id: 1823008
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Client's documents

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Choose Product Offer

## 📝 Notes

This panel allows to specify a set of personal document types provided by the client for loan application. 

Panel is visible if the Global Parameter IncludeDocInProductCalculator is set to True, otherwise it is hidden.

Panel contains document types which are retrieved from DMS module with documentFlagTypes.code ='PCALC_DISPLAYED'. Documents are sorted based on the sort order attribute ( documents with the same sort order attibute or without sort order attribute are sorted alphabetically). Documents can be divided to two separate lists (based on splitDocumentsByIdDocFlag):

	
- identification documents (with header PRD_IdentificationDocuments)
	
- other documents (with header PRD_OtherDocuments)


Each DocumentType is displayed with a checkbox. Checkbox for each document type is ticked by default according to rule {ADD}Selection of Document Type on Product Calculator.

If there are any client's documents already assigned to the application (Temporary_Application.TempAppl_Document where TempAppl_Document.Document_Type.DocumentTypeFlag = PERSON) and the documents are in the list, such document types are marked as chosen and cannot be deselected.

## 🔗 Connections (1)

- → Dependency: [[Selection of Document Type on Product Calculator]]

## 📊 Appears In (1 diagrams)

- Custom: Product Calculator

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Selection | boolean |  |
| Document Type | string |  |
