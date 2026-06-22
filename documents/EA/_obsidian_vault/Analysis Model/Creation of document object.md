---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822843
diagrams: 3
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Creation of document object

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

System creates object of following documents (and related attributes):

	
- documents selected in product offer selection are created


	
- documents for each assigned document container filtered from the document containers got according to the rule Get document containers for applicable client scoring segment (i.e. defined by DocumentContainer.documentTypes.code) are created, if they don't already exist and if total count of documents in the document container is equal to minimum number of documents required by such document container (i.e. Count(DocumentContainer.documentTypes.code) = MinCountOfDocuments related to the DocumentContainer).


Based on parameter applicationForm.createDocumentsInDMS documents are created:

	
- parameter set to TRUE then via DMS module with attributes value When_Created = 'Check_Moment_Type flag'
	
- parameter set to FALSE then as TempAppl_Document with attributes value When_Created = 'Check_Moment_Type flag' and Removable = 'No' for created document objects.


Note: To determine required Check_Moment_Type flag,see rule Determine Check moment type flag

## 🔗 Connections (5)

- ← Dependency: [[{MOD}01.081 Fill in application - 1SP]]
- ← Dependency: [[{MOD}01.082 Fill in application - 1BoD]]
- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- → Dependency: [[Get document containers for applicable client scoring segment]]
- → Dependency: [[Determine Check moment type flag]]

## 📊 Appears In (3 diagrams)

- Custom: Product business rules
- Use Case: Fill in application - 1SP
- Use Case: Fill in application - 2SP
