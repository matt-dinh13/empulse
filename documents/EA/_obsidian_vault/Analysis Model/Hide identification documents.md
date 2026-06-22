---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822828
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Hide identification documents

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

System makes attributes of identification documents and photo documents which were previously transferred to the contract 
(i.e. TADocument.Document_Type(.Flag=ID_DOC or PHOTO) that already have corresponding objects TemporaryApplication->Contract->Contract_Document->Document->Document_Type) hidden in the application form. 

If these documents already have photo taking result (Document->Photo_Taking_Result <> NULL), button Take photo/Upload photo and field Photo taking result are hidden too.

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
