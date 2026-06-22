---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics"
domain: "Requirements Model"
element_id: 1688743
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3b - Using PageSpecification in APIs

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8156 (CLM-2783) Integration with Inovatrics

## 📝 Notes

CLM part to update:
Update all API which get, set, download or upload DMS file 
- add optional FileType and PageSpecification attribute to requests
- add files attribute with list of all DmsFile to responses

WS:

	
- ContractDocumentWS - GetDocumentList
	
- ContractDocumentWS - GetDocumentsForRegistration
	
- ContractDocumentWS - UploadDocumentFile


REST:

	
- Document (01.763 Get Contract Documents for self-care) - also moved to Client document package with separated types
	
- Get Contract Documents detail (01.790 Get Contract Documents detail service)
	
- Set Document File (01.791 Set Document File service)
	
- SettingDocumentProofCheck (01.792 Set Document ProofCheck service)

## 📊 Appears In (1 diagrams)

- Custom: CBL-8156 (CSI-172) Integration with Inovatrics - using PageSpecification in API (step3b)
