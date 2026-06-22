---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions"
domain: "Requirements Model"
element_id: 1728818
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1122 Use DMS in Contract Supplement registration functions

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions

## 📝 Notes

This requirement solves usage of DMS module for document management concerning Contract Supplements registration. A list of affected UCs/functions:

	
- Generate documents list for supplement registration - getting a list of Documents for registration via calling DMS Find Document API
	
- UC 13.275 Show supplement registration - setting Document.Registered_Flag via DMS set document attribute API
	
- UC 13.271 Register supplement automatically - setting Document.Registered_Flag via DMS set document attribute API
	
- UC 13.270 Register supplement - get list of Documents for registration via DMS Find Document API  (checking Document.Registered_Flag=1)
	
- UC 13.290 Download Contract Supplement Document - new function for showing list of files to download placed on the Document registration panel (UI)
	
- Document registration panel - the currently shared component will be separated for usage in the Contract Supplement registration only


The mentioned changes won't be switchable as the new registration functionality can be done via DMS only.

## 🔗 Connections (2)

- → Dependency: [[CSI-1128 DMS - Extend Find Document API features]]
- → Dependency: [[CSI-1127 DMS - Registration check as Document Attribute]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions
- Custom: CSI-1122 Use DMS in Contract Supplement registration functions
