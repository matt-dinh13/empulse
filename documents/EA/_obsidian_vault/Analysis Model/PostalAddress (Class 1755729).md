---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755729
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 PostalAddress

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 🔗 Connections (3)

- ← Usage: [[RelatedPersonInfo]]
- ← Usage: [[EmploymentInfo]]
- ← Usage: [[Person (Class 1755741)]]

## 📊 Appears In (1 diagrams)

- Logical: CustomerPerson - Person

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| country | string |  |
| region | stringCodeOrValue |  |
| district | stringCodeOrValue |  |
| subDistrict | stringCodeOrValue |  |
| locality | stringCodeOrValue |  |
| town | stringCodeOrValue |  |
| street | stringCodeOrValue |  |
| postCode | stringCodeOrValue |  |
| residenceFrom | string <date> |  |
| addressCompliance | stringCodeOrValue |  |
| customValues | customEntryWrapper |  |
| officialYn | boolean |  |
| flat | string |  |
| classification | string |  |
| block | string |  |
| floor | string |  |
| house | string |  |
| landmark | string |  |
| latitude | string |  |
| longitude | string |  |
| verificationLevel | integer |  |
| version | int |  |
| activeYn | boolean |  |
| audit | Audit |  |
| originationDate | string <date-time> |  |
| reasonOfChange | string |  |
