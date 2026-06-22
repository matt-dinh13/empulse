---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1771466
diagrams: 11
connections: 46
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}Temporary Application

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

This class is intended to keep data collected on application form.

## 🔗 Connections (45)

- ← Aggregation: [[External Identifier]]
- → Dependency: [[Country (Class 1461195)]]
- → Dependency: [[Gender (Enumeration 1686141)]]
- → Dependency: [[House Type]]
- ← Aggregation: [[Application to Payment Channel]]
- → Dependency: [[Loan Purpose (Class 1822528)]]
- → Dependency: [[Preferred Contact Mode Type]]
- ← Aggregation: [[TempAppl Security Question]]
- → Dependency: [[Accompaniment Type]]
- → Dependency: [[Additional Information Type]]
- ← Aggregation: [[TempAppl Card]]
- → Dependency: [[Religion (Class 1758721)]]
- ← Aggregation: [[Application to DDM]]
- → Dependency: [[Marital Status Type]]
- ← Aggregation: [[{MOD}TempAppl Employment]]
- → Dependency: [[Internal Code Type]]
- → Dependency: [[Salesman (Class 1556402)]]
- → Dependency: [[Product Type (Enumeration 1879104)]]
- → Dependency: [[Children School Type]]
- → Dependency: [[Education (Class 1758703)]]
- ← Aggregation: [[Person Custom Attribute]]
- → Dependency: [[Application creation]]
- ← Aggregation: [[TempAppl User Statistics]]
- ← Aggregation: [[TempAppl Contact]]
- → Dependency: [[Estimated Net Worth Type]]
- ← Aggregation: [[Scoring (Class 1879590)]]
- ← Aggregation: [[TempAppl Contract Bank Account]]
- → Dependency: [[Source Of Income]]
- ← Aggregation: [[TempAppl Preferred Language]]
- → Dependency: [[Contract Negotiation Process Type]]
- → Dependency: [[Internal Code Type]]
- → Dependency: [[Financial Services]]
- ← Aggregation: [[Application2Offer]]
- ← Aggregation: [[TempAppl 2 Document]]
- ← Aggregation: [[TempAppl Client Possession]]
- ← Aggregation: [[TempAppl Document]]
- ← Aggregation: [[TempAppl Client Address]]
- ← Aggregation: [[Application 2 Commodity]]
- ← Aggregation: [[TempAppl Payment Channel]]
- ← Aggregation: [[TempAppl Person]]
- ← Aggregation: [[TempAppl Refinanced Contract]]
- ← Association: [[Offer Financial Parameter]]
- ← Association: [[{MOD}Contract (Class 1879596)]]
- ← Association: [[{MOD}Product]]
- ← Association: [[Product Variant (Class 1879099)]]

## 📊 Appears In (11 diagrams)

- Logical: Contract Management
- Logical: Offer Financial Parameters
- Logical: Offer Service
- Logical: Scoring
- Logical: Temporary Application - Attributes, Types and Enumerations
- Logical: Temporary Application - detail
- Logical: Temporary Application - document
- Logical: Temporary Application - Financial Parameters
- Logical: Temporary Application - overview
- Logical: Temporary Application - Payment Information
- Logical: Temporary Application - Person and Employment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Accompaniment | Accompaniment Type |  |
| Additional Information Type | Additional Information Type |  |
| Archived | Boolean |  |
| Client Birth Date | Date |  |
| Client Birth Place | KeyOrValue Type |  |
| Client Education | Education |  |
| Client Citizenship | Country |  |
| Client Gender | Gender |  |
| Client honor after | Text |  |
| Client House Type | House Type |  |
| Client Children School | Children School |  |
| Client Joint Family | Boolean |  |
| Client Marital Status | Marital Status |  |
| Client Name 1 | Text (90) |  |
| Client Name 2 | Text (30) |  |
| Client Name 3 | Text (30) |  |
| Client Name 4 | Text (30) |  |
| Client Name 5 | Text (30) |  |
| Client Name 6 | Text (30) |  |
| Client National Identification Number | Text (20) |  |
| Client Nickname | Text |  |
| Client Number of Dependent Persons | Number (3,0) |  |
| Client Number of Children | Number (2,0) |  |
| Client Religion | Religion |  |
| Code | string (30) |  |
| Comment | text(256) |  |
| Contract Negotiation Process | Enumeration |  |
| Contract Type | Product Type |  |
| Created by | User |  |
| Created Externally | boolean | false |
| Created remotely | boolean |  |
| Creation Date | DateTime |  |
| Document additional information | text (255) | False |
| Finance Amount of Other Debts | Financial Amount |  |
| Finance Bank account ownership | Boolean |  |
| Finance Bank Name | Text |  |
| Finance By-work Income | Financial Amount |  |
| Finance Financial Situation | Text |  |
| Finance Household Expenses | Financial Amount |  |
| Finance Household Income | Financial Amount |  |
| Finance Main source of income | Source Of Income |  |
| Finance Occupation Income | Financial Amount |  |
| Initial CUID | string |  |
| Internal Code | Internal Code Type |  |
| Internal Code2 | Internal Code Type |  |
| Loan Purpose | Loan Purpose |  |
| Preferred contact date and time | DateTime |  |
| Preferred contact mode | Preferred contact mode Type |  |
| Preferred Payment Day | Day of Month |  |
| Prefilled | boolean | false |
| Sales Agent Phone Number | Phone number |  |
| Saved | Boolean | false |
| Sent To Evaluation | DateTime |  |
| Use DDM account for disbursement | Boolean |  |
| X-sell offer code | Text |  |
| Modified double check field | String |  |
| Mothers Name | Text |  |
| Number of other credit cards | Number (2,0) |  |
| Estimated Net Worth | Estimated Net Worth Type |  |
| Anonymized | Boolean |  |
| Salesman Code | string |  |
| Salesroom Code | string |  |
| X-sell offer requested | Boolean |  |
| Statement channel | Statement channel |  |
