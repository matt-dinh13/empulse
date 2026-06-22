---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755734
diagrams: 2
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 EmailAddress

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

new? not found in PartyWS

## 🔗 Connections (4)

- ← Usage: [[RelatedPersonInfo]]
- ← Usage: [[EmploymentInfo]]
- → Usage: [[Audit (Class 1755745)]]
- ← Usage: [[CustomerPerson]]

## 📊 Appears In (2 diagrams)

- Logical: CustomerPerson
- Logical: CustomerPerson - Person

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| version | int |  |
| activeYn | boolean |  |
| originationDate | string <date-time> |  |
| reasonOfChange | string |  |
| officialYn | boolean |  |
| audit | Audit |  |
| verificationLevel | int |  |
| classification | string |  |
| customValues | customEntryWrapper |  |
| email | string |  |
