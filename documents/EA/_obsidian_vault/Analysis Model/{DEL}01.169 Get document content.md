---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Document Management/Access Rights"
domain: "Analysis Model"
element_id: 1818352
diagrams: 5
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}01.169 Get document content

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Document Management/Access Rights

## 📝 Notes

{DEL LOR-9211/}
This use case allows to a user to get content of any particular document related to a contract.

## 🔗 Connections (7)

- → Realisation: [[01.169 Get document content]]
- → Realisation: [[01.169 Get document content - all applications]]
- → Dependency: [[01.008 Download file from document archive (UseCase 1851467)]]
- → Dependency: [[Check that user is assigned to the same salesroom]]
- → Dependency: [[Find document based on UUID]]
- ← Realisation: [[{DEL}ApplicationDocumentManagementWS_v4 (Interface 1820633)]]
- ← UseCase: [[External system (Actor 1880866)]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Custom: Business Rules
- Custom: LOR-9211 Remove ApplicationDocumentManagementWS
- Logical: {DEL}ApplicationDocumentManagementWS_v4 - GetDocumentContent
- Use Case: Use Case
