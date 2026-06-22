---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 "
domain: "Analysis Model"
element_id: 1589812
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ClientIdentDocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure V2 

## 📝 Notes

- For payments which are related to the refund order (i.e. exists RefundOrder where RefundOrder->OutgoingPayment = processed OutgoingPayment) is taken directly from RefundOrder For payments which are not related to a revolving transaction supplement is taken from relation Contract.ClientSnapshot.
	
- For payments which are related to a revolving transaction supplement is taken from relation RevolvingTransactionSupplement.ClientSnapshot.



RefundOrder.IdentificationDocumentType and RefundOrder.IdentificationDocumentNumber

## 🔗 Connections (2)

- ← Dependency: [[ContractInfo (Class 1589813)]]
- ← Dependency: [[RefundOrderType (Class 1589805)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure V2 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| document type name | string |  |
| document number | string |  |
