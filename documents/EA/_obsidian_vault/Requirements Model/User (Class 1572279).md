---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API"
domain: "Requirements Model"
element_id: 1572279
diagrams: 9
connections: 15
tags:
  - class
  - requirements-model
---

# 🔷 User

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-8752 (CLM-2700) Separate document management and expose it via REST API

## 📝 Notes

When selecting from users anywhere in system, then it's needed to get the most current data from UMC. 

Entity User is used for storage of known users in BSL (e.g. for relations for different attributes in other tables such as Created by attributes)

## 🔗 Connections (14)

- ← Association: [[User Inbox]]
- ← Dependency: [[User Type]]
- ← Association: [[Salesroom (Class 1556394)]]
- ← Association: [[Salesroom Agent]]
- ← Dependency: [[District Sales Manager (GUIElement 1572106)]]
- ← Dependency: [[District sales Manager]]
- ← Dependency: [[District sales manager]]
- → Association: [[User (Class 1572279)]]
- ← Association: [[User (Class 1572279)]]
- → Association: [[User Setting]]
- ← Aggregation: [[User Supervisor]]
- ← Association: [[DMS File]]
- ← Association: [[{MOD}Partner]]
- ← Association: [[Business Event]]

## 📊 Appears In (9 diagrams)

- Custom: CBL-8752 (CLM-2700) Separate document management and expose it via REST API
- Logical: Common - Uploaded document
- Logical: Common - User
- Logical: Contract
- Logical: Partner
- Logical: Salesroom
- Logical: SNM General User Synchronization
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Email | Email |  |
| Employee number | Text |  |
| First Name | Text (50) |  |
| Full name | Text |  |
| Surname | Text (50) |  |
| Mobile phone | Text (20) |  |
| Phone number | Text (20) |  |
| Login | Text |  |
