---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-3156) Improvement of Supplement configuration"
domain: "Requirements Model"
element_id: 1688694
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Add Archive flag to supplement configurations to allow easy deactivation of the current setting

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-3156) Improvement of Supplement configuration

## 📝 Notes

Following structure has to be extended by Archived field:

	
- Supplement To Required Document Container (BSL_SUPPLEMENT2REQ_DOC_CONT )
	
- Supplement Document Type (BSL_SUPPLEMENT_DOCUMENT_TYPE )


Following rules has to be updated to use a new Archived value:

	
- Get client documents needed to service request 
	
- Get supplement documents required for service request

## 📊 Appears In (1 diagrams)

- Custom: CBL-6153 (CLM-3156) Improvement of Supplement configuration
