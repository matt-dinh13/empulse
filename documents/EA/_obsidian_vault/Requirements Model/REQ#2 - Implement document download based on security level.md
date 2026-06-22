---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents"
domain: "Requirements Model"
element_id: 1508704
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - Implement document download based on security level

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents

## 📝 Notes

Goal of this requirements is to implement following access rights:

	
- {ADD}01.128 Preview document (status Signed) - UC01_128_Signed
	
- {ADD}01.128 Preview document (status Active) - UC01_128_Active


	
- 01.128 Preview client document with security level 1 - UC01_128_FilePreviewClientSL1


	
- 01.128 Preview client document with security level 2 - UC01_128_FilePreviewClientSL2


	
- 01.128 Preview client document with security level 1 (file download) - UC01_128_FileDownloadClientSL1
	
- 01.128 Preview client document with security level 2 (file download) - UC01_128_FileDownloadClientSL2
	
- 01.128 Preview contract document with security level 1 (file download) - UC01_128_FileDownloadContractSL1
	
- 01.128 Preview contract document with security level 2 (file download) - UC01_128_FileDownloadContractSL2


	
- 01.128 Preview document printouts (file download) - UC01_128_FileDownloadPrintout - documents download on Document printouts tab is currently control by UC01_128_FileDownload. This should be switch to UC01_128_FileDownloadPrintout


	
- 01.128 Preview document printout with security level 1 (file download) - UC01_128_FileDownloadPrintoutSL1
	
- 01.128 Preview document printout with security level 2 (file download) - UC01_128_FileDownloadPrintoutSL2


Goal of this requirements is to implement following functionality:

	
- Download documents based on security level

## 📊 Appears In (1 diagrams)

- Custom: CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents
