---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1750951
diagrams: 8
connections: 40
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Client Snapshot

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model

## 📝 Notes

This entity keeps personal data of clients entered via application form. Name of other persons are kept in the Person entity.
Keep in mind that these data stay unchanged within entire contract lifecycle - current data of the client are maintained in the CIF

## 🔗 Connections (39)

- → Dependency: [[CustomerPersonalData]]
- → Dependency: [[PersonName]]
- → Dependency: [[CustomerPersonalData]]
- → Dependency: [[CustomerPersonalData]]
- → Dependency: [[PersonName]]
- → Dependency: [[CustomerPersonalData]]
- → Dependency: [[{DEL}CustomerAdditionalData]]
- → Dependency: [[{DEL}CustomerAdditionalData]]
- → Dependency: [[PersonName]]
- → Dependency: [[CustomerBirth]]
- → Dependency: [[PersonName]]
- ← Aggregation: [[Client Address]]
- → Dependency: [[PersonName]]
- → Dependency: [[{MOD}Customer]]
- → Dependency: [[Gender (Enumeration 1686141)]]
- → Dependency: [[House Type]]
- ← Aggregation: [[Additional Person]]
- → Dependency: [[Marital Status Type]]
- → Dependency: [[Country (Class 1461195)]]
- → Dependency: [[{DEL}CustomerAdditionalData]]
- → Dependency: [[{DEL}CustomerAdditionalData]]
- → Dependency: [[Education (Class 1758703)]]
- ← Aggregation: [[Person Custom Attribute]]
- → Dependency: [[Client Scoring Segment]]
- → Dependency: [[CustomerBirth]]
- → Dependency: [[CustomerPersonalData]]
- ← Aggregation: [[Client Snapshot Contact]]
- → Dependency: [[PersonName]]
- → Dependency: [[PersonName]]
- → Dependency: [[CustomerPersonalData]]
- → Association: [[Client (Class 1750952)]]
- ← Aggregation: [[Financial Data]]
- ← Aggregation: [[{MOD}Employment]]
- ← Aggregation: [[Undesirability]]
- ← Aggregation: [[Client Preferred language]]
- ← Aggregation: [[Client Document]]
- ← Aggregation: [[Consent (Class 1750942)]]
- ← Association: [[{MOD}Contract (Class 1879596)]]
- → Aggregation: [[Deal (Class 1879557)]]

## 📊 Appears In (8 diagrams)

- Logical: Client management
- Logical: Common - Person
- Logical: Contract
- Logical: Contract - Document
- Logical: Contract Management
- Logical: Contract Supplements
- Logical: Enumerations
- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Nickname | Text |  |
| Birth date | Date |  |
| Client Birth Place | KeyOrValue Type |  |
| Education | Education |  |
| Full Name | Text |  |
| Gender | Gender |  |
| House type | House Type |  |
| Is new | Boolean |  |
| Joint family | Boolean |  |
| Marital status | Marital Status |  |
| Name 1 | Text (50) |  |
| Name 2 | Text (30) |  |
| Name 3 | Text (30) |  |
| Name 4 | Text (30) |  |
| Name 5 | Text (30) |  |
| Name 6 | Text (30) |  |
| Number of dependent persons | Number (2,0) |  |
| Number of children | Number (2,0) |  |
| National Identification Number | Text (20) |  |
| Religion | Religion |  |
| Citizenship | Country |  |
| Honor After | string |  |
| Data Protection | Boolean |  |
| Document Additional Information | text (255) |  |
| Mothers Name | Text |  |
| Number of other credit cards | Number (2,0) |  |
| Scoring Segment | Client Scoring Segment |  |
