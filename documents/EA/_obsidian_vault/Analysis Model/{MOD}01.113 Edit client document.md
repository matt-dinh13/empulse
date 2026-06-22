---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/User Interface Model"
domain: "Analysis Model"
element_id: 1880250
diagrams: 14
connections: 21
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.113 Edit client document

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/User Interface Model

## 📝 Notes

This use case enables editing of existing client document.

## 🔗 Connections (21)

- ← Realisation: [[Add_Edit document (Screen 1547883)]]
- ← Dependency: [[Add_Edit document (Screen 1645649)]]
- ← Dependency: [[Edit document (GUIElement 1744185)]]
- ← Dependency: [[Edit document (GUIElement 1819652)]]
- ← UseCase «include»: [[01.282 Edit client or contract document]]
- → Realisation: [[01.113 Edit client document (all salesrooms)]]
- → Dependency: [[Access control to Document by Salesroom]]
- → Realisation: [[{ADD}01.113 Edit client document (flag READ_ONLY)]]
- → Dependency: [[Access control to Document by Contract status]]
- → Realisation: [[01.113 Edit client document]]
- → Dependency: [[{MOD}Initial state of document attribute]]
- → Dependency: [[{MOD}Update state of document attribute]]
- → Dependency: [[{MOD}Access control to Document by Document type flag]]
- → Dependency: [[{MOD}Update client document in PIF for selected customer]]
- → Realisation: [[01.113 Edit client document (statuses before signing)]]
- → Realisation: [[01.113 Edit client document (flag PHOTO)]]
- → Dependency: [[Order of documents and attributes on them]]
- → Dependency: [[Add_Edit document validations]]
- → Realisation: [[01.113 Edit client document (status Signed)]]
- → Realisation: [[01.113 Edit client document(all statuses)]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (14 diagrams)

- Custom: Add/Edit document
- Custom: Add/Edit document
- Custom: CBL-14919 NATIONAL ID as new primary ID in PH
- Custom: CBL-16401 (CLM-4620) Post activation docs review - BSL - Registration tab adjustements
- Custom: CBL-31177 (CLM-7629) Migrated contract support
- Custom: CBL-6367 (CLM-2082) Document data historization
- Custom: CBL-8016 (CLM-2483) Replication of ID documents to PIF
- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: Client documents - Access Rights
- Custom: REQ #2 - Send document.dmsId on KYC document update
- Custom: REQ #3 - Update Contract Detail GUI to use UUID instead of DOCUMENT_REF
- Custom: Tab - Client documents
- Custom: Tab-Client documents
- Use Case: Edit client documents
