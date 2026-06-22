---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents"
domain: "Requirements Model"
element_id: 1508702
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3 - Update access rights and document types configuration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents

## 📝 Notes

IN
Update Document_Type:

	
- Set Document Type(.Code='DELIVERY_ADVICE').Security_level = 0
	
- Set Document Type(.Code in ('APPLICATION_FORM','SANCTIONAL_LETTER').Security_level = 2
	
- Set Document Type(.Code not in ('DELIVERY_ADVICE','APPLICATION_FORM','SANCTIONAL_LETTER').Security_level = 1


Update privileges:
To roles with UC01_210_DSL1 add:

	
- UC01_210_DSL2


To roles with UC01_128_FilePreviewClient ad:

	
- UC01_128_FilePreviewClientSL2


To roles with UC01_128_FileDownloadClient add:

	
- UC01_128_FileDownloadClientSL2


To roles with UC01_128_FileDownloadContract add:

	
- UC01_128_FileDownloadContractSL2


To roles with UC01_128_FileDownload add:

	
- UC01_128_FileDownloadPrintoutSL2



ID
To roles with UC01_128_FilePreviewClient ad:

	
- UC01_128_FilePreviewClientSL2


To roles with UC01_128_FileDownloadClient add:

	
- UC01_128_FileDownloadClientSL2


To roles with UC01_128_FileDownloadContract add:

	
- UC01_128_FileDownloadContractSL2


To roles with UC01_128_FileDownload add:

	
- UC01_128_FileDownloadPrintoutSL2


KZ
To roles with UC01_128_FilePreviewClient ad:

	
- UC01_128_FilePreviewClientSL2


To roles with UC01_128_FileDownloadClient add:

	
- UC01_128_FileDownloadClientSL2


To roles with UC01_128_FileDownloadContract add:

	
- UC01_128_FileDownloadContractSL2


To roles with UC01_128_FileDownload add:

	
- UC01_128_FileDownloadPrintoutSL2


VN
To roles with UC01_128_FileDownload add:

	
- UC01_128_FileDownloadPrintoutSL2


PH
To roles with UC01_128_FileDownload add:

	
- UC01_128_FileDownloadPrintoutSL2

## 📊 Appears In (1 diagrams)

- Custom: CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents
