---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Access Rights"
domain: "Modules"
element_id: 1880044
diagrams: 4
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {MOD}14.010 Create Document

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Instances/Access Rights

## 📝 Notes

The use case presents a method for creation of a document in the Document management module (DMS). Document has to be a type which is defined in the system.

Endpoint example:
POST  /documents/

+ JSON body

Developer note:
fileContent should be used as multipart and forwarded directly to file storage API (cabinet)

## 🔗 Connections (6)

- ← UseCase: [[External system]]
- ← Dependency: [[Documents (Interface 1880026)]]
- → Dependency: [[CreateDocument validation]]
- → UseCase «include»: [[14.090 Upload file to file storage (UseCase 1700708)]]
- → Realisation: [[14.010 Create Document]]
- → Dependency: [[{ADD}Find default page specification]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CBL-14943 (CSI-1040) Support for merged files
- Logical: CreateDocument
- Use Case: Document services - Use Case Model
