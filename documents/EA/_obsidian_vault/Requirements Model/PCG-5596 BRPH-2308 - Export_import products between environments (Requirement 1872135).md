---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5596 BRPH-2308 - Export/import products between environments"
domain: "Requirements Model"
element_id: 1872135
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 PCG-5596 BRPH-2308 - Export/import products between environments

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5596 BRPH-2308 - Export/import products between environments

## 📝 Notes

We will implement an export/import feature that allows to transfers a product's configuration from the test environment to the production environment. The export function will generate a structured data file (e.g. JSON) that the import function will use to automatically create/update the product. The feature will be integrated directly into the product catalogue UI. Users will simply click "Export" in the test environment and "Import" in the production environment. During import, the system will display the proposed changes.

 
 

	
- Enable user to export product setting via option in UI and then import this setting on different environment.
	
- Before the processing of the import the user should see all the changes that will be made and confirm it. The changes should be compared to the currently active entity settings.
	
- Export/import should be in json format

## 📊 Appears In (1 diagrams)

- Custom: PCG-5596 BRPH-2308 - Export/import products between environments
