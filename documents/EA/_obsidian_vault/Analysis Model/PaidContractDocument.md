---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE"
domain: "Analysis Model"
element_id: 1626468
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PaidContractDocument

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE

## 📝 Notes

List of all client's primary identification documents (where DocumentTypeFlag = "ID_DOC") related to Client Snapshot from Application Form.
'*' in description of attributes means  ClientSnapshot.ClientDocument.Document

## 🔗 Connections (1)

- ← Dependency «use»: [[PaidContractDocuments]]

## 📊 Appears In (1 diagrams)

- Logical: HO_OUTGOING_PAYMENT_ORDER_DISPATCH_NOTE data source for printout

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| documentTypeName | string |  |
| documentNumber | string |  |
