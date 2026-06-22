---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions"
domain: "Requirements Model"
element_id: 1728811
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1124 Extension DMS API for document file metadata acceptation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions

## 📝 Notes

Goal of the requirement is about possibility to add custom data which can be used as additional metadata related to a document file when uploaded to the Cabinet.
Two current REST methods of DMS will be affected:

	
- Create document file (POST /document-files/)
	
- Create document (POST  /documents/)


custom data format structure: key-value, string data type

Additional requirement is unification returned Document object structure for operations:

	
- Create document
	
- Get document
	
- Find document

It means, only one structure will be used in responses of the mentioned operations

## 🔗 Connections (2)

- ← Dependency: [[CSI-1121 Use DMS in 13.205 Create contract supplement documents]]
- ← Dependency: [[CSI-1119 Use DMS in UC 08.356 Generate service request document (Requirement 1728813)]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions
