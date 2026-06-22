---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL"
domain: "Requirements Model"
element_id: 1756380
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8824 - Remove functionality related to global parameter DOCUMENT_QUALITY_CHECK

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL

## 📝 Notes

As Loan Origination module, I need to get rid of the unused functionality related to the global parameter DOCUMENT_QUALITY_CHECK, so the system's code can be enlightened slightly.

Solution proposal:

	
- Delete all the functionality related to the global parameter documentQualityCheck (DOCUMENT_QUALITY_CHECK).
	
- Delete temporary switch sendPhotoForFaceRecognition.
	
- Turn on the temporary switch faceRecognition.controlBySalesroomFeatureFlag in IN. //To be deleted completely in a next phase.

## 🔗 Connections (1)

- → Realisation: [[LOR-8421 LOR - remove KZ custom behavior of BSL (Requirement 1756369)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8421 LOR - remove KZ custom behavior of BSL
- Custom: LOR-8824 - Remove functionality related to global parameter DOCUMENT_QUALITY_CHECK
