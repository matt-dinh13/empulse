---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process"
domain: "Requirements Model"
element_id: 1834350
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1580 Create API method for Transaction Supplement update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16689 (CSI-1531) BNPL Cancellation - API/Process

## 📝 Notes

This requirement contains description of processing requests for a refund already processed (accepted) transaction supplements.
Goal is to cancel the original transaction in AM and then, based on type of the refund, either create a new transaction on a new amount (in AM), or the Transaction Supplement is completely canceled.
The cancel transaction request in AM is asynchronous, so a messages via RabbitMQ exchange is used e.g.

	
- https://harabbit01-hosel.cz.infra:15672/#/exchanges/vn00a1/am.direct.incoming.transaction


The message structures can be found in:
https://git.homecredit.net/product/hss-integration/-/blob/develop/hss-services/hss-account/hss-account-oxm/src/main/resources/net/homecredit/hss/integration/account/xsd/account/v8/AccountTransactionWS.xsd

## 🔗 Connections (1)

- → Generalization: [[CBL-16689 BNPL Cancellation - API_Process]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16689 (CSI-1531) BNPL Cancellation - API/Process
