---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 2SP/UseCase Model"
domain: "Analysis Model"
element_id: 1822834
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Disable identification documents

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 2SP/UseCase Model

## 📝 Notes

System makes attributes of identification documents and photo documents which were previously transferred to the contract (i.e. TADocument.Document_Type(.Flag=ID_DOC or PHOTO) that already have corresponding objects TemporaryApplication->Contract->Contract_Document->Document->Document_Type) non-editable in the application form. 

If these documents already have photo taking result (Document->Photo_Taking_Result <> NULL), button Take photo/Upload photo and field Photo taking result are disabled too.

## 🔗 Connections (1)

- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]

## 📊 Appears In (1 diagrams)

- Use Case: Fill in application - 2SP
