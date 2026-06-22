---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process/LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA"
domain: "Requirements Model"
element_id: 1821415
diagrams: 3
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 ProductDetailsType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process/LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA

## 🔗 Connections (4)

- → Dependency «use»: [[Marketing action (Class 1821434)]]
- → Dependency «use»: [[ContractDocumentsType]]
- → Dependency: [[Get all application DDM]]
- ← Dependency «use»: [[{MOD}DocumentData (Class 1821417)]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA
- Custom: LOR-9422 - Propagate DDM documents into HO_CONTRACT_DATA and ApplicationManagementWS
- Logical: HO_CONTRACT_DATA - contract data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| productCode | string |  |
| productName | string |  |
| productPurpose | string |  |
| profileCode | string |  |
| profileName | string |  |
| earlyRepaymentMoratorium | int |  |
| documents | ContractDocumentsType |  |
| marketingAction | Marketing action |  |
| productDescriptionInternal | string |  |
| productDescriptionSale | string |  |
