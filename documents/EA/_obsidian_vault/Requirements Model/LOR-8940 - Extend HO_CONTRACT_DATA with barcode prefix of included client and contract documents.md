---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL"
domain: "Requirements Model"
element_id: 1721032
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-6201 Separate DSM from BSL

## 📝 Notes

As Data Source Management module, I need to be able to provide the information about the barcode prefixes of all applicable client and contract document already present within the HO_CONTRACT_DATA data source, so they can be used on a printout template level for constructing the actual barcodes and the current barCode elements within the respective data source can be possibly removed completely.

Solution proposal:

	
- Extend the HO_CONTRACT_DATA data source with barcode prefix of all applicable client and contract document types (based on documents present on the application/contract) - i.e. introduce the following new elements:
- contractData.client.documents.document.barCodePrefix
- contractData.product.documents.contractDocument.barCodePrefix

## 🔗 Connections (1)

- → Realisation: [[LOR-6201 - Separate DSM from BSL]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-6201 - Separate DSM from BSL
- Custom: LOR-8940 - Extend HO_CONTRACT_DATA with barcode prefix of included client and contract documents
