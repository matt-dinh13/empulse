---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7810 (CLM-2989) Registration Queue - Enhancement V2"
domain: "Requirements Model"
element_id: 1688611
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - send information to user inbox once contract is assigned to him by other user

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7810 (CLM-2989) Registration Queue - Enhancement V2

## 📝 Notes

{MOD}01.286 Change operator on contract for registration  extended by generating of message to user inbox.
It is driven by CLM feature flag RegQ_GenEmailOnAssign.

default:
RegQ_GenEmailOnAssign = 0

VN:
RegQ_GenEmailOnAssign = 1

## 📊 Appears In (1 diagrams)

- Custom: CBL-7810 (CLM-2989) Registration Queue - Enhancement V2
