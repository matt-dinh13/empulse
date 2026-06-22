---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-9214 Remove getDocumentFromDMS switch"
domain: "Requirements Model"
element_id: 1822824
diagrams: 2
connections: 6
tags:
  - requirement
  - requirements-model
---

# 📋 Document distribution in AF

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-9214 Remove getDocumentFromDMS switch

## 📝 Notes

Created documents (TempAppl Document , TempAppl 2 Document) are distributed in AF according to document container assignment  - applicable document containers are got according to the rule Get document containers for applicable client scoring segment. System checks:
- first if document is assigned to the DocumentContainer[.typeCode in ('PRIM_IDENT', 'IDENT')]. If yes, then it appears in Primary identification documents section.
- then if document is assigned to the document container of different type (i.e. DocumentContainer[.typeCode not in ('PRIM_IDENT', 'IDENT')]) or is not assigned to any document container at all. If yes, then it appears in Other documents section.
When document is assigned for example to the document container of type IDENT and also to the document container of type OTHER for the selected product, it will appear only in Primary identification documents section. Note: This situation might also happen when the user adds document in Other documents section and the document is also assigned to the DocumentContainer[.typeCode in ('PRIM_IDENT', 'IDENT')]. When refreshing/reloading the page, document will appear in Primary identification documents section only.

If no product was selected, created client's documents (i.e. Document_Type_Flag_Type = PERSON) with tag CUST_IDENT_AUTO_CREATE are displayed in Primary identification documents section.

For each Document_Type, fields for its attributes (defined by relation Document_Type->Document_Type_Attribute) are displayed.
Order of already created documents (TADocuments) in AF and their attributes is defined by Algorithm: Order of documents and attributes on them. Manually added document in AF are inserted as last in section where user adds the document.
Note: that some document entities can be empty when their attributes were not filled in before last save.

## 🔗 Connections (6)

- ← Dependency: [[Documents - product AF]]
- ← Dependency: [[Primary identification documents - product AF (GUIElement 1736191)]]
- ← Dependency: [[{MOD}01.081 Fill in application - 1SP]]
- ← Dependency: [[{MOD}01.082 Fill in application - 1BoD]]
- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- → Dependency: [[Get document containers for applicable client scoring segment]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9214 Remove getDocumentFromDMS switch
- Custom: Product business rules
