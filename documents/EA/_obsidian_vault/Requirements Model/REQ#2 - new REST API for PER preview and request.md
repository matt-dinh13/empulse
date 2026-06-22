---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4814 (CLM-1713) Create Web Service for PER Request"
domain: "Requirements Model"
element_id: 1432568
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - new REST API for PER preview and request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4814 (CLM-1713) Create Web Service for PER Request

## 📝 Notes

GET ContractPERRequest preview returns availability, notification message and calculated results of PER preview for provided PER type and Client Amount. To get only DueDate, Client Minimal and Client Maximal amount can be called with ClientAmount=0.

PUT ContractPERRequest  creates PER requests for provided PER type and Client Amount and returns LSR Id.

## 📊 Appears In (1 diagrams)

- Custom: CBL-4814 (CLM-1713) Create Web Service for PER Request
