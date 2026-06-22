---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-8057 Application detail - client documents in client tab"
domain: "Requirements Model"
element_id: 1814746
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Identification documents

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-6766 DMS - Integrate Document management component in HoSel system/LOR-8057 Application detail - client documents in client tab

## 📝 Notes

Grid containing the list of client's identification documents, that were collected in relation with respective application.

LDM source:
{ADD LOR-8057}When parameter useDmsForClientIdentificationDocuments = true, system takes document data from:

	
- DMS using Client_document.UUID
Note: if there is any issue in communication with PIF system displays error message MSG_COMMFAILEDDATAMISSING

else:{/ADD}

	
- client documents of Document_Type->Document_Type_Flag.Type = 'ID_DOC'


Note: The ordering of individual records within the grid cannot be changed by user.

Localization code:
CLI_IdentDocuments

## 🔗 Connections (1)

- → Dependency: [[{MOD}01.210 Show client data (show documents)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8057 Application detail - client documents in client tab
- Custom: Tab - Client

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document type name | Document Type Name |  |
| Document number | text |  |
