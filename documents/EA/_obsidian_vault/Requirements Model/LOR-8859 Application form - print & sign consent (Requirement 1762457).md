---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-8859 Application form - print & sign consent"
domain: "Requirements Model"
element_id: 1762457
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8859 Application form - print & sign consent

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-8859 Application form - print & sign consent

## 📝 Notes

As a system, I will store printed consent to DMS via API.

Proposed solution

	
- this applies to functionality
- button Print consent - create document with file, or create document before displaying AF and then just upload the file to it
- sign consent via OTP, when consent is regenerated (used in ID)
	
- to create document used /rest/v2/documents, to store file to document use /rest/v2/document-files

## 🔗 Connections (1)

- → Realisation: [[LOR-9181 Replace Document upload job with direct upload via DMS]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-8859 Application form - print & sign consent
