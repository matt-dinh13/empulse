---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions"
domain: "Requirements Model"
element_id: 1728813
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1119 Use DMS in UC 08.356 Generate service request document

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions

## 📝 Notes

This requirement proposes usage of DMS module for a document management needed for UC 08.356 Generate service request document.
Expected changes:

	
- Create Document object based on Document Type
	
- Getting DocumentType.name (needed for printout name)
	
- Upload Document file (printout) to Document


For storage of some additional (custom) metadata to the Document File, it will be needed to have CSI-1124 Extension DMS API for document file metadata acceptation task implemented

All mentioned changes and the current functions will be switchable

## 🔗 Connections (1)

- → Dependency: [[CSI-1124 Extension DMS API for document file metadata acceptation]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions
