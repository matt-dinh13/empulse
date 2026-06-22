---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules"
domain: "Analysis Model"
element_id: 1878901
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Contract Status Transition Request Check

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules

## 📝 Notes

This rule performs validation for existing active request for contract status transition. It checks any type of request (cancellation/termination/pay-off/...), i.e. no other request cannot be created (this is in fact defined by the use cases calling this rule) if there is an existing request of any type. The check returns 'TRUE' or 'FALSE' for an input contract as described below. Note that type of the request is defined by polymorphism of the ContractStatusTransitionRequest entity.

Steps:

	
- If exists Contract->ContractStatusTransitionRequest with Status = 'SENT' this rule returns 'TRUE' else it returns 'FALSE'.

## 🔗 Connections (4)

- ← Dependency: [[01.670 Cancel contract automatically (UseCase 1850513)]]
- ← Dependency: [[01.445 Cancel undisbursed contract (UseCase 1850500)]]
- ← Dependency: [[01.171 Create REL contract termination request (UseCase 1852809)]]
- ← Dependency: [[{MOD}Validate Transaction Supplement request]]

## 📊 Appears In (3 diagrams)

- Custom: Common Business Rules for Contract Management
- Use Case: REL contract termination request
- Use Case: Transaction Supplement request creation - Use case model
