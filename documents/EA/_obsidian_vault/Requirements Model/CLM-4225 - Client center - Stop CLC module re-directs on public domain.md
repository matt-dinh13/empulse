---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-4225) Client center - Stop CLC module re-directs on public domain"
domain: "Requirements Model"
element_id: 1688955
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CLM-4225 - Client center - Stop CLC module re-directs on public domain

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-11677 (CLM-4225) Client center - Stop CLC module re-directs on public domain

## 📝 Notes

CLC module is not available on shop domain (shop domain = global database parameter CLM_DOMAIN_RESOLVER), therefore user can be re-direct their from BSL on public therefore.


Change behavior of BSL so user will be not re-directed to CLC module. User will be navigated to BSL CLC instead. User setting attribute CLC_MODULE and CLM Feature flag enableCLCModule should be ignored.

## 📊 Appears In (1 diagrams)

- Custom: CBL-11677 (CLM-4225) Client center - Stop CLC module re-directs on public domain
