---
type: Class
stereotype: "Type"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Service Eligibility Evaluation/Logical Data Model"
domain: "Analysis Model"
element_id: 1868559
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Processing Status Type

> **Type**: Class · **Stereotype**: «Type»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Service Eligibility Evaluation/Logical Data Model

## 📝 Notes

Enumeration for task processing status (e.g. asynchronous jobs etc)

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Contract Notification Request]]
- ← Usage: [[{DEL}Client Service Eligibility]]

## 📊 Appears In (1 diagrams)

- Logical: Service eligibility evaluation from external system

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| W (waiting to processing) |  |  |
| F (finished) |  |  |
| E (error in processing) |  |  |
