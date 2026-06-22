---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-8752 Separate document management and expose it via REST API"
domain: "Modules"
element_id: 1620606
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 General requirements on DMS component

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-8752 Separate document management and expose it via REST API

## 📝 Notes

There are mentioned basic business requirements on DMS module functionality
 

	
- Two domains are intended for the DMS: Document type definitions (Document Type) and Document instances (Document)
	
- Document Type contains definitions of all document types used in the HoSel system. Definitions will involve attributes of the documents, relations between attributes and documents, way of attribute validations
	
- Document neither Document Type don't have any dependence on services/domains outside DMS component (e.g. contracts, clients). It also mean, it doesn't orchestrate any business processes.
	
- Document services don't ensure/manage document content (e.g BLOB files related to a Document). Only reference (i.e. Cabinet uuid) to content file is possible. See also DMS and Document Content - calling variants diagram in Integration model
	
- DMS ensures localization of Document Type names, i.e. Names of objects are localized into predefined languages

## 🔗 Connections (1)

- ← Dependency: [[DMS - proposal of implementation steps]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-8752 Separate document management and expose it via REST API
