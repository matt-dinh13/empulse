---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode"
domain: "Requirements Model"
element_id: 1834619
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Req #1: BNPL - transaction confirmation - change integration to async mode

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode

## 📝 Notes

Transaction confirmation is currently called as REST API sync call from:
UC13.110 - as part or supplement authorization
UC13.114 - as part of partial refund (old transaction is canceled and new transaction with new amount is created and confirmed)

In both UCs sync REST API will be replaced by creation of RMQ JSON request to am.direct.incoming.transaction exchange, csi.account.response.confirm-transaction-with-ip.v1.queue.
Async response from am.topic.transaction.confirmation.reply will be evaluated and processed by new UC13.128.
New functionality will be driven by  feature flag AsyncTransConfirmAM to be able to switch it back in case of any issue.

## 📊 Appears In (1 diagrams)

- Custom: CBL-25926 (CSI-3619) BNPL - transaction confirmation - change integration to async mode
