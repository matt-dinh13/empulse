---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11645 (CSI-383) Change Eligibility Container for PayHol Service"
domain: "Requirements Model"
element_id: 1578577
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - New Service eligibility check

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11645 (CSI-383) Change Eligibility Container for PayHol Service

## 📝 Notes

Goal of the task is to create a new service eligibility criteria with following definition:

Service of the defined Code can be used N time maximally within M months period on a Contract
The current behaviour of the similar check of "Maximal number of service usage per defined period" only works for Service Type level (i.e. not for Service level) so differently defined service the same type cannot be set for various eligibility.

(For example for Payhol service, which is part of Safepay, we want to allow to execute only 2 Payhols on contract, once within let say in 3 months. This should be valid no matter how many times we execute COVID_PH service or any other Payhol service on contract)

Changes tagged by CSI-404

## 📊 Appears In (1 diagrams)

- Custom: CBL-11645 (CSI-383) Change Eligibility Container for PayHol Service
