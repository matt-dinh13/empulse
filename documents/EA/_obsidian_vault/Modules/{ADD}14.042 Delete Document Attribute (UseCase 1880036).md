---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Access Rights"
domain: "Modules"
element_id: 1880036
diagrams: 3
connections: 3
tags:
  - usecase
  - modules
---

# 🎯 {ADD}14.042 Delete Document Attribute

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Access Rights

## 📝 Notes

{ADD TFT-10580 /}
The use case presents a method for deleting of Document Attribute for specific Document in the Document management module (DMS). Document has to exist.

Endpoint example:
DEL /documents/<document_uuid>/document-attributes/<attributeCode>/<attributeValue>

no JSON body

## 🔗 Connections (3)

- ← Dependency: [[DocumentAttributes (Interface 1753321)]]
- → UseCase: [[External system]]
- → Realisation: [[{ADD}14.042 Delete Document Attribute]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: SetDocumentAttribute
- Use Case: Document services - Use Case Model
