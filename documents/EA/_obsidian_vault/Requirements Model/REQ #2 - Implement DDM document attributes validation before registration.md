---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL"
domain: "Requirements Model"
element_id: 1514157
diagrams: 2
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Implement DDM document attributes validation before registration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL

## 📝 Notes

Goal of this task is to implement DDM document attributes validation before registration, when at least one of following attributes has to populated:

	
- SCAN_BASED_MANDATE


	
- PHYS_MANDATE_RECEIVED


Failed validation should return error message MSG_DDMDocumentAtributesNotFilled (e.g. DDM document attributes are not filled in) for BSL GUI and response code DOC_DDM_ATTRIBUTE_NOT_FILLED for web service.

Feature is controlled by CLM Feature flag validateDDM = False.

## 📊 Appears In (2 diagrams)

- Custom: CBL-4708 (CLM-2911) Scan Based Mandate Support in HOSEL
- Custom: REQ #2 - Implement DDM document attributes validation before registration
