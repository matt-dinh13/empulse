---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755750
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 PhoneNumber

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

new? not found in PartyWS

## 🔗 Connections (3)

- ← Usage: [[RelatedPersonInfo]]
- ← Usage: [[EmploymentInfo]]
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
| verificationLevel | int |  |
| audit | Audit |  |
| classification | string |  |
| customValues | customEntryWrapper |  |
| number | string |  |
| countryCode | string |  |
| extension | string |  |
