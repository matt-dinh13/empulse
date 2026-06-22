---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-14503 (CSI-1407) Insurance termination API - add TerminationDate input parameter"
domain: "Requirements Model"
element_id: 1661199
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Update of UC08.454 Terminate contract insurance service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-14503 (CSI-1407) Insurance termination API - add TerminationDate input parameter

## 📝 Notes

Currently termination date is defined automatically by rule "Get termination date for CEL insurance". To be able to terminate insurance also for specific date in the past new optional input attribute "terminationDate" will be added. Attribute usage will be possible only for user with specific access right.

It will be used for fixing of possible issues when termination reprocessing is needed.

## 📊 Appears In (1 diagrams)

- Custom: CBL-14503 (CSI-1407) Insurance termination API - add TerminationDate input parameter
