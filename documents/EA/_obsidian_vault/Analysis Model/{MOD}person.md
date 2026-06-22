---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person"
domain: "Analysis Model"
element_id: 1813611
diagrams: 5
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}person

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PartyWS/Person

## 🔗 Connections (2)

- ← Dependency: [[personRole]]
- → Generalization «XSDextension»: [[party]]

## 📊 Appears In (5 diagrams)

- Logical: customerPersonCreate
- Logical: customerPersonCreateOrUpdate
- Logical: customerPersonGetResponse
- Logical: customerPersonUpdate
- Logical: Party

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {MOD}honourAfterName | stringCodeOrValue |  |
| honourBeforeName | stringCodeOrValue |  |
| {MOD}birthDate | string |  |
| deathDate | string |  |
| {MOD}gender | stringCodeOrValue |  |
| {MOD}citizenship | stringCodeOrValue |  |
| {MOD}birthPlace | string |  |
| verificationLevel | integer |  |
| {MOD}firstName | string |  |
| {MOD}identificationCode | string |  |
| {MOD}lastName | string |  |
| {MOD}middleName | string |  |
| {MOD}mothersMaidenName | string |  |
| {MOD}nickname | string |  |
| salutation | string |  |
