---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2218 (CLM-1060) SMS informing clients about mobile applications"
domain: "Requirements Model"
element_id: 1301648
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Contract events processed for client notification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2218 (CLM-1060) SMS informing clients about mobile applications

## 📝 Notes

Goal of this task is to create notifications based on defined contract events. The notifications will be consumed by the Notifier component which ensures creation of defined type messages for the client (SMS, e-mail,...)
Regarding the business process - SMS is to be send immediately after the Contract status has changed from "Signed" to "Active". 
The notification will be set only for defined types of Products.
The notification will be generated for KZ business only.

## 📊 Appears In (1 diagrams)

- Custom: CBL-2218 (CLM-1060) SMS informing clients about mobile applications
