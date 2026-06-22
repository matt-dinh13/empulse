---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29217 (CSI-4601) Extend maximum length for QR_RAW_DATA and QR_ADDRESS of document type ID_CARD"
domain: "Requirements Model"
element_id: 1880218
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Extend max length for QR_RAW_DATA and QR_ADDRESS of doc type ID_CARD

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29217 (CSI-4601) Extend maximum length for QR_RAW_DATA and QR_ADDRESS of document type ID_CARD

## 📝 Notes

The existing DMS document attribute storage is limited to 200 characters for the VALUE column in BSL_DOCUMENT_ATTR. Vietnamese national ID QR codes can exceed this limit, causing the attribute update to fail silently or return an error.
The following attributes of document type ID_CARD are affected:
The solution introduces a new storage column for long text values in the document attribute table, with transparent routing logic in the API layer. Consumers of the DMS API are not required to make any changes.
 

	
- A new column LONG_TEXT_VALUE (VARCHAR2048) is added to BSL_DOCUMENT_ATTR.
	
- The routing decision (which column to use) is determined by the API based on the length of the incoming value.
	
- All GET responses return the value from a single field regardless of which column it is stored in – the source column is transparent to the consumer.
	
- No new document type attributes are introduced. QR_RAW_DATA and QR_ADDRESS remain as-is.
	
- No data migration of existing records is required.
	
- No new document type attributes are added (from user pov). The following configuration values are updated for document type ID_CARD:
QR_RAW_DATA - max length 500
QR_ADDRESS - max length 500

## 🔗 Connections (1)

- → Usage: [[{MOD CSI-4601}Document Attribute]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-29217 (CSI-4601) Extend maximum length for QR_RAW_DATA and QR_ADDRESS of document type ID_CARD
