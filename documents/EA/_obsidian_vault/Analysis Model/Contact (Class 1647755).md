---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1647755
diagrams: 9
connections: 17
tags:
  - class
  - analysis-model
---

# 🔷 Contact

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/COMMON for Client Management/Logical Data Model

## 📝 Notes

Contains all information about contact

## 🔗 Connections (15)

- ← Dependency: [[Contact Type]]
- ← Dependency: [[Contact Type]]
- ← Association: [[Salesroom Contact]]
- ← Association: [[Partner Contact]]
- ← Association: [[Communication Record]]
- → Dependency: [[Contact (Boundary 1647759)]]
- → Dependency: [[Contact (Boundary 1647759)]]
- → Dependency «use»: [[Contact Ownership Type]]
- → Dependency: [[Contact (Boundary 1647759)]]
- → Association: [[PersonContact]]
- → Dependency: [[Contact Type Role]]
- → Association: [[Contact Type (Class 1647754)]]
- → Aggregation: [[Employer (Class 1750943)]]
- ← Association: [[Bank Branch Contact]]
- ← Association: [[Client Snapshot Contact]]

## 📊 Appears In (9 diagrams)

- Logical: Client management
- Logical: Common - Contact
- Logical: Common - Person
- Logical: Communication
- Logical: Contract Management
- Logical: Partner
- Logical: Salesroom
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contact type priority | Number |  |
| Role type | Contact Type Role |  |
| Contact value | Text (255) |  |
| Contact value extension | Text (255) |  |
| Note | Text (255) |  |
| Contact is verified | Boolean |  |
| Verification result | Verification result |  |
| Creation Date | DateTime |  |
| Update Date | DateTime |  |
| External ID | string |  |
| Ownership Type | Contact Ownership Type |  |
