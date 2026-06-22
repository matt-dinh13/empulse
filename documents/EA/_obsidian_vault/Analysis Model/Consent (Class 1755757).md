---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755757
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Consent

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 🔗 Connections (2)

- → Usage: [[Audit (Class 1755745)]]
- ← Usage: [[CustomerPerson]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerPerson

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| version | int |  |
| originationDate | string <date-time> |  |
| reasonOfChange | string |  |
| activeYn | boolean |  |
| audit | Audit |  |
| verificationLevel | int |  |
| dmsId | string |  |
| rejectReason | string |  |
| consentType | string |  |
| issueDate | string <date> |  |
| expirationDate | string <date> |  |
| customValues | customEntryWrapper |  |
| detailUrl | string |  |
