---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-14943 (CSI-1040) Support for merged files"
domain: "Modules"
element_id: 1635171
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#1 - Support for merged file

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-14943 (CSI-1040) Support for merged files

## 📝 Notes

1. Document Type configuration

	
- PageSpecification definiton is extended by new MergedFile flag used to define page specification used for merged files
	
- API returning DocumentType definition extended by MergedFile attribute


2. Document instance

	
- {MOD}14.010 Create Document and {MOD}14.050 Create Document File extended to support definition of PageSpecification for merged file (if PageSpecification is not specified in the API request).
	
- MergedFile attribute added to DocumentFileOut structure (used for all APIs).
	
- TypeCode and TypeName added to the response of Create document (to have same response as for Get and Find)

## 📊 Appears In (1 diagrams)

- Custom: CBL-14943 (CSI-1040) Support for merged files
