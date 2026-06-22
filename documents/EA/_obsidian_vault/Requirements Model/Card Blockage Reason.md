---
type: Class
stereotype: "Enumeration"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3628 (CLM-1433) Add block type SUSPICIOUS"
domain: "Requirements Model"
element_id: 1589744
diagrams: 7
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 Card Blockage Reason

> **Type**: Class · **Stereotype**: «Enumeration»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3628 (CLM-1433) Add block type SUSPICIOUS

## 📝 Notes

List of blockage reasons.
Used for localization of card blocking reasons returned by CABUS AM system

Implementation note: 
It is implemented as a static code-list / enumeration.
This static code-list contains all the valid values on the BSL side from all different countries, where the system is deployed. CABUS AM is responsible for sending only valid blocking reasons for specific country.

## 🔗 Connections (4)

- ← Dependency: [[NewCardBlockDto]]
- ← Dependency: [[CardStatusHistoryDto]]
- ← Dependency: [[CardStatusHistoryDto (Class 1520975)]]
- → InformationFlow: [[12.540 Card blocking overview (UseCase 1849969)]]

## 📊 Appears In (7 diagrams)

- Custom: CBL-3628 (CLM-1433) Add block type SUSPICIOUS
- Custom: CBL-4989 (CLM-1819) Add New Block Types for Deceased Customer
- Custom: CBL-8991 (CLM-2970) Setting card replacement screen options
- Logical: Blocking reasons configuration
- Logical: Card management - Card structures - Interface diagram
- Logical: History management - Interface diagram
- Logical: History management - Interface diagram

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| COLLECTION |  |  |
| CUSTOMER |  |  |
| BANK |  |  |
| UNRECOGNIZED_REASON |  |  |
| ACCOUNT |  |  |
| STOLEN |  |  |
| LOST |  |  |
| DETAIN |  |  |
| FRAUD |  |  |
| TEMPORARY |  |  |
| MONEY_LAUNDRY |  |  |
| CARD_BROKEN |  |  |
| TEMPORARY_CARD_CLOSURE |  |  |
| DESTROY_CARD |  |  |
| SUSPICIOUS |  |  |
| {ADD}SUSPICIOUS_DECEASED |  |  |
| {ADD}DECEASED |  |  |
| {ADD}SUSPECTED_EXTERNAL_FRAUD |  |  |
| {ADD}SUSPECTED_CUSTOMER_FRAUD |  |  |
| {ADD}EXTERNAL_FRAUD |  |  |
| {ADD}CUSTOMER_FRAUD |  |  |
