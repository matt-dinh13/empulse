---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Client identification/Access Rights"
domain: "Analysis Model"
element_id: 1813646
diagrams: 4
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}06.051 Process customers notification message

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client identification/Access Rights

## 📝 Notes

This UC describes processing of notification about change list of customers sent via JMS (from CIF).

## 🔗 Connections (9)

- → Dependency: [[Parameters for document file upload]]
- → Realisation: [[06.051 Process customers notification message]]
- → Realisation: [[Requirement1 (Boundary 1813657)]]
- → UseCase: [[06.020 Update Client Data]]
- → Dependency: [[Set contract status to rejected]]
- → Dependency: [[Set parameters for file upload]]
- → Dependency: [[Get customer contracts]]
- → Dependency: [[Decide about customer data verification level]]
- ← UseCase: [[CIF (Actor 1880899)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Overview
- Use Case: Client identification
- Use Case: Client update
