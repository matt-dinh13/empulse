---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Document Management/Access Rights"
domain: "Analysis Model"
element_id: 1818353
diagrams: 4
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}01.176 Create document

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Document Management/Access Rights

## 📝 Notes

{DEL LOR-9211/}
This use case allows user to create document for application.

## 🔗 Connections (10)

- → Dependency: [[Add_Edit document validations]]
- → Realisation: [[01.176 Create document - all applications]]
- → Dependency: [[Create validation error message]]
- → Dependency: [[Parameters for document file upload]]
- → Dependency: [[Set parameters for file upload]]
- → Dependency: [[File validation rule]]
- → Realisation: [[01.176 Create document]]
- → Dependency: [[Check that user is assigned to the same salesroom]]
- ← Dependency: [[{DEL}ApplicationDocumentManagementWS_v4 (Interface 1820633)]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: LOR-9211 Remove ApplicationDocumentManagementWS
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - CreateDocument
- Use Case: Use Case
