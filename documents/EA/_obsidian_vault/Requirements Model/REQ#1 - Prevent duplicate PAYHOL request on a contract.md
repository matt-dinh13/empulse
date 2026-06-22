---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-3085) Prevent duplicate PAYHOL application on a contract"
domain: "Requirements Model"
element_id: 1688652
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Prevent duplicate PAYHOL request on a contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6153 (CLM-3085) Prevent duplicate PAYHOL application on a contract

## 📝 Notes

Currently it is possible to create 2 identical PAYHOL requests on one contract - if the first one is still in status CREATED (waiting for processing or being processed) and the second one is created with the same parameters. This leads to undesired installment schedule after both requests are processed.

We need to add check to PAYHOL request creation - it will not be possible to create a request if there is another PAYHOL request in status CREATED. The change is needed in both GUI and REST API part.

Solved as a new rule  {ADD}Check existency of active PAYHOL request  which is called from GUI and API UCs.

## 📊 Appears In (1 diagrams)

- Custom: CBL-6153 (CLM-3085) Prevent duplicate PAYHOL application on a contract
