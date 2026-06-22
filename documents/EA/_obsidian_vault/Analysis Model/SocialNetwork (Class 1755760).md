---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755760
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 SocialNetwork

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

LDM: only contacts with Contact Type.Category Type<>EMAIL and PHONE

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
| audit | Audit |  |
| verificationLevel | int |  |
| classification | string |  |
| customValues | customEntryWrapper |  |
| profileHttpAddress | string |  |
| userName | string |  |
