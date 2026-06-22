---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process"
domain: "Requirements Model"
element_id: 1728973
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process

## 📝 Notes

As a system, I will generate HO_CONTRACT_DATA datasource for CFA with currently assigned (client and contract) documents.

Proposed solution

	
- get documents from /rest/v12/contracts/{contractCode}?projections=DOCUMENT_DEFAULT (swagger)
	
- call DMS with UUIDs to get documents data (swagger) - necessary minimum document type and document attributes

## 🔗 Connections (1)

- → Realisation: [[LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process
- Custom: LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA
