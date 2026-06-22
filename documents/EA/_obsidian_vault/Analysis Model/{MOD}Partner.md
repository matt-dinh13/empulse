---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/Logical Data Model"
domain: "Analysis Model"
element_id: 1595597
diagrams: 10
connections: 41
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Partner

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Extended properties/Logical Data Model

## 📝 Notes

Partner stands for a company, which has made an agreement with Home Credit and which will offer Home Credit’s products to their clients. These partners can offer products in one or more salesrooms.

## 🔗 Connections (41)

- ← Association: [[PartnerChangedSE]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- ← Dependency: [[{MOD}GetPartnerDataResponse]]
- → Dependency: [[SN Entity Status]]
- ← Aggregation: [[Partner Address]]
- → Dependency: [[Business Area]]
- → Dependency: [[Partner Category Type]]
- ← Aggregation: [[Partner Person]]
- → Association: [[User (Class 1572279)]]
- ← Aggregation: [[Notice]]
- → Dependency: [[Extended Property Group]]
- ← Aggregation: [[Salesroom (Class 1556394)]]
- ← Aggregation: [[Partner Contact]]
- → Association: [[Partner Status Transitions]]
- → Dependency: [[Payment Status (Class 1260482)]]
- ← Aggregation: [[Partner Cobrand Group]]
- ← Association: [[Partner Disbursement Channel]]
- → Dependency: [[Legal Form (Enumeration 1595592)]]
- ← Aggregation: [[Partner Bank Account (Class 1595591)]]
- → Dependency: [[Partner Type]]
- → Association: [[{DEL}Commission]]
- ← Dependency: [[Extended Property Value]]
- ← Association: [[{MOD}CommunicationRecordChangedSE]]
- ← Association: [[Outgoing Payment Order]]
- ← Dependency: [[Partner (GUIElement 1873900)]]
- ← Association: [[Service (Class 1880804)]]

## 📊 Appears In (10 diagrams)

- Logical: Common - Extended Properties
- Logical: Insurance Program
- Logical: Mapping Transaction to Tariff Item Group
- Logical: Outgoing Payment Orders
- Logical: Outgoing Payments
- Logical: Partner
- Logical: Salesroom
- Logical: SN Notice
- Logical: SNM Partner Synchronization
- Logical: SNMSystemEvent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Activation Date | Date |  |
| Business area | Business Area[0..1] |  |
| Category | Partner Category Type |  |
| Code | Number (5,0) |  |
| Contract Sign Date | Date |  |
| End of activity | Date |  |
| Group Partner Number | Number (2,0) |  |
| License Number | Text |  |
| Name | Text |  |
| Type | Partner Type |  |
| PAN Number | Text |  |
| Security Check | Boolean |  |
| Status | SN Entity Status |  |
| Tax Identification Number | Text |  |
| Payment Status | Payment Status |  |
| Company Registry Number | text |  |
| Legal Form | Legal Form |  |
| Partner Settlement | Boolean |  |
| {ADD}Main Partner | text |  |
