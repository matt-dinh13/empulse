---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/User Interface Model"
domain: "Analysis Model"
element_id: 1880230
diagrams: 8
connections: 21
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.100 Add contract document

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/User Interface Model

## 📝 Notes

This use case enables to add a document to a particular contract. "Owner" of the document can be one of the following:

	
- contract

This use case does not allow to add client-related documents.

## 🔗 Connections (20)

- ← Realisation: [[Add_Edit document (Screen 1547883)]]
- ← Dependency: [[Add document]]
- ← Dependency: [[Add_Edit document (Screen 1645649)]]
- ← Dependency: [[Add document (GUIElement 1750686)]]
- → Dependency: [[{MOD}Initial state of document attribute]]
- → Realisation: [[01.100 Add document]]
- → Dependency: [[{MOD}Access control to Document by Document type flag]]
- → Realisation: [[01.100 Add document (all salesrooms)]]
- → Realisation: [[01.100 Add document (status Signed)]]
- → UseCase «extend»: [[{MOD}01.081 Fill in application - 1SP]]
- → Dependency: [[Access control to Document by Contract status]]
- → Dependency: [[Order of documents and attributes on them]]
- → Realisation: [[01.100 Add document (status Canceled)]]
- → Dependency: [[01.107 Add contract document common]]
- → Dependency: [[{MOD}Update state of document attribute]]
- → Realisation: [[01.100 Add document (all statuses)]]
- → UseCase «include»: [[{MOD}01.210 Show contract detail]]
- → Realisation: [[01.100 Add document (statuses before signing)]]
- → Dependency: [[Access control to Document by Salesroom]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (8 diagrams)

- Custom: Add/Edit document
- Custom: Add/Edit document
- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: Contract documents - Access Rights
- Custom: REQ #3 - Update Contract Detail GUI to use UUID instead of DOCUMENT_REF
- Custom: Tab - Application documents
- Custom: Tab-Contract documents
- Use Case: Edit contract documents
