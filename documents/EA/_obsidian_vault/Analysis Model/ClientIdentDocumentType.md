---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure"
domain: "Analysis Model"
element_id: 1482210
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ClientIdentDocumentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure

## 📝 Notes

- For payments which are related to the refund order (i.e. exists RefundOrder where RefundOrder->OutgoingPayment = processed OutgoingPayment) is taken directly from RefundOrder For payments which are not related to a revolving transaction supplement is taken from relation Contract.ClientSnapshot.
	
- For payments which are related to a revolving transaction supplement is taken from relation RevolvingTransactionSupplement.ClientSnapshot.



RefundOrder.IdentificationDocumentType and RefundOrder.IdentificationDocumentNumber

## 🔗 Connections (2)

- ← Dependency «use»: [[ContractInfo]]
- ← Dependency «use»: [[RefundOrderType]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment File Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| document type name | string |  |
| document number | string |  |
