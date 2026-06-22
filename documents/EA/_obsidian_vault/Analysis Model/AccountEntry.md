---
type: Class
stereotype: "representation"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/UMC/UMC REST"
domain: "Analysis Model"
element_id: 1545348
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 AccountEntry

> **Type**: Class · **Stereotype**: «representation»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/UMC/UMC REST

## 🔗 Connections (9)

- ← Usage: [[ApiResponse _AccountEntry_]]
- → Dependency: [[Country (Class 1545355)]]
- → Dependency: [[RoleSelectionEntry]]
- → Dependency: [[Enum (Enumeration 1545354)]]
- → Dependency: [[Department]]
- → Dependency: [[Language]]
- → Dependency: [[Enum (Enumeration 1545347)]]
- → Dependency: [[SalesArea]]
- → Dependency: [[Enum]]

## 📊 Appears In (1 diagrams)

- Logical: UMC REST accounts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| blocked | boolean |  |
| citizenIdentificationNumber | string |  |
| citizenship | Country |  |
| commonName | string |  |
| dateOfBirth | string |  |
| department | string |  |
| description | string |  |
| distinguishedName | string |  |
| employedSince | string |  |
| employeeNumber | string |  |
| employeePosition | string |  |
| employeeType | string |  |
| employeeUntil | string |  |
| gender | string |  |
| hrCode | string |  |
| languages | string |  |
| login | string |  |
| mail | string |  |
| mobile | string |  |
| name | string |  |
| origin | string |  |
| passwordExpirationDate | string |  |
| phone | string |  |
| pwdAccountLockedTime | string |  |
| roleApprover | boolean |  |
| roles | RoleSelectionEntry |  |
| salesAreas | SalesArea |  |
| status | string |  |
| surname | string |  |
| technicalUser | boolean |  |
| units | string |  |
