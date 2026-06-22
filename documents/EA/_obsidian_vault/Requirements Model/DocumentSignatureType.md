---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9359 - Completely remove sign pad feature"
domain: "Requirements Model"
element_id: 1878222
diagrams: 4
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 DocumentSignatureType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9359 - Completely remove sign pad feature

## 📝 Notes

Object containing data about the signature of some particular document.

## 🔗 Connections (2)

- ← Generalization «XSDextension»: [[ContractDocumentType]]
- → Dependency «use»: [[VerificationType]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9359 - Completely remove sign pad feature
- Custom: LOR-9433 - Use Agreement_Verification instead of Document_Verification in HO_CONTRACT_DATA data source
- Logical: HO_CONTRACT_DATA - contract data
- Logical: HO_GENERAL_TYPES

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| verification | VerificationType |  |
