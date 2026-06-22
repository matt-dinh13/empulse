---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure"
domain: "Analysis Model"
element_id: 1482209
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ClientNameType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Outgoing  payment files management/Logical Data Model/Outgoing Payment File Structure

## 📝 Notes

Name client.


LDM:

	
- For payments which are not related to a revolving transaction supplement is taken from relation Contract->Deal.ClientSnapshot.
	
- For payments which are related to a revolving transaction supplement is taken from relation RevolvingTransactionSupplement.ClientSnapshot.

## 🔗 Connections (1)

- ← Dependency «use»: [[ContractInfo]]

## 📊 Appears In (1 diagrams)

- Logical: Outgoing Payment File Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| firstName | string |  |
| middleName | string |  |
| lastName | string |  |
