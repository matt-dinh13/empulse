---
type: Class
stereotype: "historization"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29217 (CSI-4601) Extend maximum length for QR_RAW_DATA and QR_ADDRESS of document type ID_CARD"
domain: "Requirements Model"
element_id: 1880217
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 {MOD CSI-4601}Document Attribute

> **Type**: Class · **Stereotype**: «historization»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-29217 (CSI-4601) Extend maximum length for QR_RAW_DATA and QR_ADDRESS of document type ID_CARD

## 📝 Notes

This entity contains information about attributes of all stored documents.

## 🔗 Connections (3)

- → Association: [[Document Type Attribute (Class 1877952)]]
- → Association: [[Document (Class 1880216)]]
- ← Usage: [[REQ#1 - Extend max length for QR_RAW_DATA and QR_ADDRESS of doc type ID_CARD]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-29217 (CSI-4601) Extend maximum length for QR_RAW_DATA and QR_ADDRESS of document type ID_CARD
- Logical: Document Instace - Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Document Type Attribute |  |
| Value | Text |  |
| Archived | Boolean |  |
| {MOD CSI-4601}Long Text Value | text |  |
