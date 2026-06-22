---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/User Interface Model"
domain: "Analysis Model"
element_id: 1880253
diagrams: 12
connections: 24
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.110 Edit contract document

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/User Interface Model

## 📝 Notes

This use case enables editing of existing document.

## 🔗 Connections (23)

- ← Realisation: [[Add_Edit document (Screen 1547883)]]
- ← Dependency: [[Edit document]]
- ← Dependency: [[Add_Edit document (Screen 1645649)]]
- ← Dependency: [[Edit document (GUIElement 1750681)]]
- ← UseCase «include»: [[01.282 Edit client or contract document]]
- → Dependency: [[Add_Edit document validations]]
- → Realisation: [[01.110 Edit document (all salesrooms)]]
- → Realisation: [[01.110 Edit document (status Signed)]]
- → Realisation: [[01.110 Edit contract document (flag PHOTO)]]
- → Dependency: [[Order of documents and attributes on them]]
- → Dependency: [[{MOD}Initial state of document attribute]]
- → Realisation: [[01.110 Edit document]]
- → Realisation: [[01.110 Edit document (all statuses)]]
- → UseCase «include»: [[{MOD}01.210 Show contract detail]]
- → Realisation: [[01.110 Edit document (status Rejected)]]
- → Realisation: [[01.110 Edit document (status Canceled)]]
- → Realisation: [[{ADD}01.110 Edit contract document (flag READ_ONLY)]]
- → Dependency: [[Access control to Document by Contract status]]
- → Dependency: [[{MOD}Update state of document attribute]]
- → Dependency: [[Access control to Document by Salesroom]]
- → Dependency: [[{MOD}Access control to Document by Document type flag]]
- → Realisation: [[01.110 Edit document (statuses before signing)]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (12 diagrams)

- Custom: Add/Edit document
- Custom: Add/Edit document
- Custom: CBL-14919 NATIONAL ID as new primary ID in PH
- Custom: CBL-16401 (CLM-4620) Post activation docs review - BSL - Registration tab adjustements
- Custom: CBL-6367 (CLM-2082) Document data historization
- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: Contract documents - Access Rights
- Custom: LOR-8052 Application detail - edit document
- Custom: REQ #3 - Update Contract Detail GUI to use UUID instead of DOCUMENT_REF
- Custom: Tab - Application documents
- Custom: Tab-Contract documents
- Use Case: Edit contract documents
