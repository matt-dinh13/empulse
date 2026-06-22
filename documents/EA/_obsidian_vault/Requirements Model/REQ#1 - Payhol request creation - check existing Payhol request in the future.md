---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11202 (CSI-349) Payhol request creation - check existing Payhol request in the future"
domain: "Requirements Model"
element_id: 1594549
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Payhol request creation - check existing Payhol request in the future

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-11202 (CSI-349) Payhol request creation - check existing Payhol request in the future

## 📝 Notes

If the PAYHOL is executed, then incoming payment is cancelled and some previous installment becomes unpaid, another PAYHOL request would find this installment as first unpaid and take it as deferred. It produced wrong result.
Additional check which avoid creation of the new PAYHOL request in this case is needed.

## 📊 Appears In (1 diagrams)

- Custom: CBL-11202 (CSI-349) Payhol request creation - check existing Payhol request in the future
