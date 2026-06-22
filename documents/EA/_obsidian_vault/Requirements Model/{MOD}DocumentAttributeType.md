---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process/LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA"
domain: "Requirements Model"
element_id: 1878229
diagrams: 4
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}DocumentAttributeType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9023 Secure Cash Loan - Allow CFA regeneration with the updated data after the signing process/LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA

## 📝 Notes

DocumentAttributeType represent structure for attributes of documents.

## 🔗 Connections (2)

- ← Dependency «use»: [[DocumentAttributesType]]
- → Generalization «XSDextension»: [[DocumentAttributeBaseType]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9045 DSM: Use HO_CONTRACT_DATA datasource for CFA
- Custom: LOR-9328 - Remove unused HO_CONSENT_DATA elements
- Logical: HO_CONTRACT_DATA - client data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| name | string |  |
