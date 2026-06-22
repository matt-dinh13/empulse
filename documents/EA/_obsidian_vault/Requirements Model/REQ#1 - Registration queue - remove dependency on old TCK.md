---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3935 (CLM-1600) Registration queue - remove dependency on old TCK"
domain: "Requirements Model"
element_id: 1331918
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Registration queue - remove dependency on old TCK

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3935 (CLM-1600) Registration queue - remove dependency on old TCK

## 📝 Notes

Following updates are needed:
- new fields in the LDM Registration queue domain to keep Mistake Ticket existence
- new rule which updates expired Mistake Ticket existence values  by TCK REST API 
- use this rule in use cases 01.283 + 01.285
- update conditions for assigning and calculating of contract from the queue in use cases 01.283 + 01.285

## 📊 Appears In (1 diagrams)

- Custom: CBL-3935 (CLM-1600) Registration queue - remove dependency on old TCK
