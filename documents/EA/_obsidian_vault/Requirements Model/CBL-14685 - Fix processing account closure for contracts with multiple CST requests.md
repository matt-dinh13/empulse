---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/BL-14685 - Fix processing account closure for contracts with multiple CST requests"
domain: "Requirements Model"
element_id: 1852685
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-14685 - Fix processing account closure for contracts with multiple CST requests

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/BL-14685 - Fix processing account closure for contracts with multiple CST requests

## 📝 Notes

Goal of this task is to improve handling multiple CST requests in status SENT when Account Closure notification is received from AM.

For account closure TERMINATION_SUCCESSFUL, TERMINATION_EXPIRED, CANCEL_SUCCESSFUL and ALREADY_CANCELLED system fetches and updates to FINISHED only last CST in SENT status. After updating to FINISHED status system checks if there are some other CST requests in SENT status and then system updates all these CST requests to CANCELED status

## 📊 Appears In (1 diagrams)

- Custom: BL-14685 - Fix processing account closure for contracts with multiple CST requests
