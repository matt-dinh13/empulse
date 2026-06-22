---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1/applicant"
domain: "Analysis Model"
element_id: 1570690
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CommunicationChannel

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1/applicant

## 🔗 Connections (2)

- ← Usage: [[Applicant]]
- → Usage: [[Audit]]

## 📊 Appears In (1 diagrams)

- Logical: Applicant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| version | int |  |
| activeYn | boolean |  |
| originationDate | string <date-time> |  |
| reasonOfChange | string |  |
| id | int |  |
| channelType | string |  |
| priority | int |  |
| audit | Audit |  |
