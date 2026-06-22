---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)"
domain: "Requirements Model"
element_id: 1757541
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9433 - Use Agreement_Verification instead of Document_Verification in HO_CONTRACT_DATA data source

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)

## 📝 Notes

As Loan Origination module, I need to be able to propagate the details of the agreement verification into the respective section of the HO_CONTRACT_DATA data source containing the contract documents' verification data, so I can assure the backwards compatibility of the system's behavior after the Document_Verification entity was decommissioned.

Solution proposal:

	
- If the parameter (parameters.properties) excludeDocumentVerification = TRUE, then fill the HO_CONTRACT_DATA.contractData.product.documents.contractDocument.verification* data source elements with Agreement_Verification data (instead of currently used Document_Verification data).

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9041 - Unified DDM (ADA)
- Custom: LOR-9433 - Use Agreement_Verification instead of Document_Verification in HO_CONTRACT_DATA data source
