---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools management/User Interface Model"
domain: "Analysis Model"
element_id: 1761713
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Collection tool requests

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Collection tools management/User Interface Model

## 📝 Notes

It displays list of Loan Service Requests related to client's contracts
Default ordering of records: Request date descended

## 🔗 Connections (3)

- → Dependency: [[08.400 Show parameters for loan restructuring (UseCase 1862191)]]
- → Dependency: [[08.351 Rollback loan service request (UseCase 1879698)]]
- → Dependency: [[08.357 Cancel request for loan service (UseCase 1879719)]]

## 📊 Appears In (1 diagrams)

- Custom: Tab - Collection tools requests management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Process request approval result | action |  |
| Cancel request | action |  |
| Contract |  |  |
| Created by |  |  |
| Print | action |  |
| Register documents | action |  |
| Request date |  |  |
| Request status |  |  |
| Service type |  |  |
| Rollback request | action |  |
| {ADD}Service |  |  |
