---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755741
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Person

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 📝 Notes

LDM:  from Document and Document_Attribute entities

## 🔗 Connections (3)

- ← Usage: [[CustomerPerson]]
- → Usage: [[PostalAddress (Class 1755729)]]
- → Usage: [[Document (Class 1755725)]]

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
| postalAddresses | PostalAddress |  |
| documents | Document |  |
| identificationCode | string |  |
| lastName | string |  |
| firstName | string |  |
| middleName | string |  |
| honourAfterName | stringCodeOrValue |  |
| honourBeforeName | stringCodeOrValue |  |
| nickname | string |  |
| salutation | string |  |
| birthDate | string <date> |  |
| deathDate | string <date> |  |
| gender | stringCodeOrValue |  |
| mothersMaidenName | string |  |
| birthPlace | string |  |
| citizenship | string |  |
| verificationLevel | int |  |
| customValues | customEntryWrapper |  |
| audit | Audit |  |
