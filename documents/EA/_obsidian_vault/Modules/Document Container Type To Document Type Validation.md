---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Business Rules"
domain: "Modules"
element_id: 1671541
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Document Container Type To Document Type Validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Analytical Model/Document Container/Business Rules

## 📝 Notes

There is described set of validations for Document Types for specified Document Container Type (used by CreateDocumentContainer and UpdateDocumentContainer).

Inputs:

	
- Document Container Type
	
- Document Type + photoAcquiringCode array


Steps:

	
- System gets list of active document types by DMS API for list of codes from Document Type array input:
- GET /document-types/ with documentTypeCodes = Document Type array, activeOnly = true, projection = FLAG
	
- System checks existence of each Document Type from input array in the data provided by DMS. If some Document Type is not found then system returns FALSE with DOCUMENT_TYPE_NOT_FOUND (message e.g. "%DocumentTypeCode% not found").
	
- System check duplicity of Document Type in the input array. If one document type is used more times, then system returns FALSE with DOCUMENT_DUPLICITY. 
	
- System checks flag setting for each Document Type from input array in the data provided by DMS. 
According to Document Container Type each document type has to have following flags (other additional flags are allowed), in other case system returns FALSE with DOCUMENT_TYPE_FLAG_MISSING (message e.g. "The %Flag% flag is missing for %DocumentTypeCode%"):
if Document Container Type = PRIM_IDENT then flags PERSON and ID_DOC and PRIM_IDENT is required
if Document Container Type = IDENT then  flags PERSON and ID_DOC and PHOTO is required
if Document Container Type = RELATED_PERSON_IDENT then  flag RELATED_PERSON is required
if Document Container Type = SA_IDENT then  flag SALES_AGENT is required
if Document Container Type = ADDR_PROOF or OTHER then flag PERSON is required
	
- System checks for each Document item that photoAcquiringCode value is one of the specified Photo Acquiring Type. In other case system returns FALSE with UNKNOWN_PHOTO_ACQUIRING_TYPE (message e.g. "Unknown photo acquiring type %photoAcquiringCode%.").
	
- System returns TRUE.

## 🔗 Connections (2)

- ← Dependency: [[Update Document Container Validation]]
- ← Dependency: [[Create Document Container Validation]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-13070 (CSI-915) Document Container API
- Use Case: Use Case Model
