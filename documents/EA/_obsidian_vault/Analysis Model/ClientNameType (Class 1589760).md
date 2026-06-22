---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure"
domain: "Analysis Model"
element_id: 1589760
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ClientNameType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing payment JMS structure/Logical Data Model/Outgoing Payment JMS structure

## 📝 Notes

Name client.


LDM:

	
- For payments which are not related to a revolving transaction supplement is taken from relation Contract->Deal.ClientSnapshot.
	
- For payments which are related to a revolving transaction supplement is taken from relation RevolvingTransactionSupplement.ClientSnapshot.

## 🔗 Connections (1)

- ← Dependency: [[ContractInfo (Class 1589761)]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment JMS structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| firstName | string |  |
| middleName | string |  |
| lastName | string |  |
