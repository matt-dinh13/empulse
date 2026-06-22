---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/UseCase Model"
domain: "Analysis Model"
element_id: 1835146
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Check for unprocessed Pay-off request existence

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/UseCase Model

## 📝 Notes

If exists a Contract Status Transition Request (CSTR) for the contract where

	
- CSRT.Status = SENT
	
- CSRT.Type <> "TERMINATION"

then return TRUE else return FALSE.

## 🔗 Connections (1)

- ← Dependency: [[Check pay-off possibility algorithm (GUI_RMQ)]]

## 📊 Appears In (2 diagrams)

- Use Case: Pay-off contract manually
- Use Case: Pay-off contracts from external system
