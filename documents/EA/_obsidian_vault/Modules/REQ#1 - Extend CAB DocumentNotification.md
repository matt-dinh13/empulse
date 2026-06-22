---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-30572 (CSI-4306) Receive file expiration from CAB"
domain: "Modules"
element_id: 1881156
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ#1 - Extend CAB DocumentNotification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-30572 (CSI-4306) Receive file expiration from CAB

## 📝 Notes

If notification attribute trigger = expiration then also whole related document is deleted if no other file is related to the document. In this case new event type DocumentExpired is used for DMS Document notification (it is consumed by COMA).

## 📊 Appears In (1 diagrams)

- Custom: CBL-30572 (CSI-4306) Receive file expiration from CAB
