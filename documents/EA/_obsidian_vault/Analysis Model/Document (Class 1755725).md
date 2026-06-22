---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755725
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Document

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 🔗 Connections (4)

- ← Usage: [[CustomerPerson]]
- ← Usage: [[RelatedPersonInfo]]
- ← Usage: [[Person (Class 1755741)]]
- → Usage: [[Audit (Class 1755745)]]

## 📊 Appears In (2 diagrams)

- Logical: CustomerPerson
- Logical: CustomerPerson - Person

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| version | int |  |
| activeYn | boolean |  |
| audit | Audit |  |
| originationDate | string <date-time> |  |
| reasonOfChange | string |  |
| verificationLevel | int |  |
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
