---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts"
domain: "Requirements Model"
element_id: 1880073
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-5622 Contract Business Event definitions for Account renewal

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts

## 📝 Notes

- CSI will read a new ACCOUNT_EXPIRED event from AM -> new binding to csi.am.eventinfo.notification.queue for ACCOUNT_EXPIRED event
On this event, CSI creates Business Event with code=QWARTA_EXPIRED/ACCOUNT_EXPIRED + translation like "Qwarta expired"

Existing UC 13.300 Process AM EventInfo notification will be extended to use ACCOUNT_EXPIRATION notification event and create new ACCOUNT_EXPIRED business event.


	
- After the Account Renewal document confirmation (sign), CSI creates Business Event with code=QWARTA_RENEWED/ACCOUNT_RENEWED + translation like "Qwarta renewed"

Business event type ACCOUNT_RENEWED prepared by this task and will be used in different task.

## 📊 Appears In (1 diagrams)

- Custom: CBL-20608 (CLM-5431) Expiration of Virtual Limit Contracts
