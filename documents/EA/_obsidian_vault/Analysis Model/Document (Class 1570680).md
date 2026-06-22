---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1/applicant"
domain: "Analysis Model"
element_id: 1570680
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1/applicant

## 🔗 Connections (3)

- ← Usage: [[Applicant]]
- → Usage: [[Issuer]]
- → Usage: [[Audit]]

## 📊 Appears In (1 diagrams)

- Logical: Applicant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| version | int |  |
| activeYn | boolean |  |
| audit | Audit |  |
| originationDate | string <date-time> |  |
| reasonOfChange | string |  |
| verificationLevel | int |  |
| id | int |  |
| issueDate | string <date> |  |
| expirationDate | string <date> |  |
| dmsId | string |  |
| serialNumber | string |  |
| documentCode | string |  |
| issuer | StringCodeOrValue |  |
| customValues | customEntryWrapper |  |
| documentType | string |  |
| country | string |  |
| detailUrl | string |  |
