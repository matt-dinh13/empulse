---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1879603
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Security Question

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

Holds information about a security question and client's answer. A user can choose from variety of predefined security question types and provide a personal answer to the question during the contract origination process. This question and answer can be then used during the communication with the client to verify their identity (e.g. by the telephony operator).

## 🔗 Connections (1)

- → Aggregation: [[{MOD}Contract (Class 1879596)]]

## 📊 Appears In (2 diagrams)

- Logical: Contract
- Logical: Contract Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Question | Security Question Type |  |
| Answer | Text |  |
