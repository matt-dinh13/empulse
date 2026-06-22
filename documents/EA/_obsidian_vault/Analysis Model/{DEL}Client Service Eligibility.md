---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Service Eligibility Evaluation/Logical Data Model"
domain: "Analysis Model"
element_id: 1824622
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}Client Service Eligibility

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Service Eligibility Evaluation/Logical Data Model

## 📝 Notes

The entity holds eligibilities of the client for particular services which are evaluated by an external system (DWH for now). It keeps reference to Data Processed Batch

## 🔗 Connections (2)

- → Association: [[Data Processed Batch]]
- → Usage: [[Processing Status Type]]

## 📊 Appears In (1 diagrams)

- Logical: Service eligibility evaluation from external system

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Active Flag | boolean |  |
| CUID | long |  |
| Is Eligible | boolean |  |
| Processing Description | string |  |
| Processing Status | Processing Status Type |  |
| Service Type | Service Type |  |
