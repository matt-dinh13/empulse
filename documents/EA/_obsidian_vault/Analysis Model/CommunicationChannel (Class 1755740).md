---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755740
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationChannel

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

new? not found in PartyWS

## 🔗 Connections (2)

- → Usage: [[Audit (Class 1755745)]]
- ← Usage: [[CustomerPerson]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerPerson

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| version | int |  |
| activeYn | boolean |  |
| originationDate | string <date-time> |  |
| reasonOfChange | string |  |
| channelType | string |  |
| priority | int |  |
| audit | Audit |  |
