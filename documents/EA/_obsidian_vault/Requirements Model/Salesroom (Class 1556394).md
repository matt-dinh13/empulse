---
type: Class
stereotype: "Historization"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-291 Merchant URL address in Salesroom Management (CBL-262)"
domain: "Requirements Model"
element_id: 1556394
diagrams: 22
connections: 71
tags:
  - class
  - requirements-model
---

# 🔷 Salesroom

> **Type**: Class · **Stereotype**: «Historization»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-291 Merchant URL address in Salesroom Management (CBL-262)

## 📝 Notes

Salesroom (or POS – Point of sale) is a place where are offered Home Credit’s products.

## 🔗 Connections (70)

- ← Association: [[SalesroomChangedSE]]
- ← Dependency: [[Salesroom To Sales Package]]
- ← Dependency: [[Insurance Program]]
- ← Dependency: [[{MOD}Product Offer Calculation Request]]
- → Dependency: [[Sales Area]]
- → Dependency: [[2BoD filling type]]
- ← Aggregation: [[Notice]]
- → Dependency: [[Moment of Payment]]
- → Association: [[Salesroom Status Transitions]]
- ← Aggregation: [[Salesroom Address]]
- ← Aggregation: [[Salesroom 2 Feature]]
- → Dependency: [[Business Model]]
- ← Aggregation: [[Salesroom Document Type]]
- ← Aggregation: [[{MOD}Salesroom Product]]
- → Association: [[User (Class 1572279)]]
- → Dependency: [[Business Area]]
- → Dependency: [[Administration Point]]
- ← Aggregation: [[Salesroom Bank Account (Class 1556405)]]
- → Dependency: [[Contract Negotiation Process Type]]
- → Dependency: [[Salesroom Feature Type]]
- → Dependency: [[Salesroom Category (Enumeration 1607538)]]
- → Dependency: [[SN Entity Status]]
- → Dependency: [[Payment Status (Class 1260482)]]
- ← Aggregation: [[Salesroom Cobrand Group]]
- ← Aggregation: [[Salesroom Commodity Type]]
- → Dependency: [[Extended Property Group]]
- ← Aggregation: [[Salesroom Agent]]
- ← Aggregation: [[Salesroom Contact]]
- ← Aggregation: [[Salesroom Salesman]]
- ← Association: [[Salesroom Disbursement Channel]]
- ← Aggregation: [[Salesroom Person]]
- → Aggregation: [[{MOD}Partner]]
- ← Dependency: [[Extended Property Value]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Dependency: [[{MOD}GetSalesroomDataResponse]]
- ← Association: [[Outgoing Payment Order]]
- ← Dependency: [[{DEL}Salesroom]]
- ← Association: [[Contract Supplement (Class 1862126)]]
- ← Association: [[Disbursement Channel Change Request]]
- ← Dependency: [[Partner bank branch (GUIElement 1873911)]]

## 📊 Appears In (22 diagrams)

- Custom: PCG-291 Merchant URL address in Salesroom Management (CBL-262)
- Logical: Business event - Logical data model
- Logical: Common - Extended Properties
- Logical: Common - Person
- Logical: Contract Management
- Logical: Contract Supplements
- Logical: Contract tracking
- Logical: GetSalesPackageAssignmentCodeLists
- Logical: Insurance Program
- Logical: Insurance Program LDM modification
- Logical: Mapping Transaction to Tariff Item Group
- Logical: Outgoing Payment Orders
- Logical: Outgoing Payments
- Logical: Partner
- Logical: Payment Channels
- Logical: Sales Package
- Logical: Salesroom
- Logical: SN Notice
- Logical: SNM Salesroom Synchronization
- Logical: SNMSystemEvent
- Logical: Temporary Application - overview
- Logical: Temporary Application - Payment Information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Activation Date | Date |  |
| Administration Point | Administration Point |  |
| Branch License Number | Branch License Number |  |
| Business area | Business Area[0..1] |  |
| Sales area | Sales area |  |
| Business Model | Business Model |  |
| Category | Salesroom Category |  |
| Code | String |  |
| Contract Sign Date | Date |  |
| Date of Checking | Date |  |
| End of Activity | Date |  |
| Feature | Salesroom Feature Type |  |
| Group Salesroom Number | Number |  |
| Name | Text |  |
| Manual disbursement | boolean | False |
| Moment of Payment | Moment of Payment |  |
| Motivation Program Date | Date |  |
| Online Connection | boolean | False |
| Company Registry Number | text |  |
| Opening Planned | Date |  |
| PAN number | text |  |
| Payment Status | Payment Status |  |
| Shop Size | Number |  |
| Tax Identification Number | Text |  |
| Contract Negotiation Process | Contract Negotiation Process Type |  |
| 2BoD filling type | 2BoD filling type |  |
| Web Cam | boolean | True |
| Card pickup | boolean | False |
| Status | SN Entity Status |  |
| Send notification | boolean | False |
| URL | string |  |
| Merchant URL Address | string |  |
| Fingerprint Device | string |  |
| {DEL}Paperless | boolean | False |
| {DEL}Sign consent via OTP | boolean | False |
| Partner Settlement | Boolean |  |
