---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardRetirementWS"
domain: "Analysis Model"
element_id: 1187973
diagrams: 2
connections: 4
tags:
  - interface
  - analysis-model
---

# 🔶 CardRetirementWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardRetirementWS

## 📝 Notes

- system calls BlockCardRequest with parameters (supressFee=negation system calls LostCardRequest (note=value of field Note, pcid from card detail). ID of current user is transmits in SOAP header.


https://git.homecredit.net/product/hss-integration/blob/develop/hss-services/hss-card/hss-card-oxm/src/main/resources/net/homecredit/hss/integration/card/xsd/cardretirement/v1/CardRetirementWS.xsd

## 🔗 Connections (4)

- → Dependency: [[LostCardRequest (Class 1187977)]]
- → Dependency: [[LostCardResponse (Class 1187976)]]
- → Dependency: [[StolenCardRequest (Class 1187979)]]
- → Dependency: [[StolenCardResponse (Class 1187978)]]

## 📊 Appears In (2 diagrams)

- Logical: CardRetirementWS.LostCard
- Logical: CardRetirementWS.StolenCard
