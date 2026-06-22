---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1816564
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 {DEL}ClientDocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

{DEL LOR-8678/}
This data type defines active document types (see code list Document Type) where DocumentType.DocumentTypeFlag = PCALC_DISPLAYED.

## 🔗 Connections (2)

- ← Dependency: [[{DEL}GetCodeListResponse (Class 1816566)]]
- → Dependency: [[Document Type (Class 1877882)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: CustomerOfferWS - GetCodeList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | LocalizedString |  |
| sortOrder | Number |  |
