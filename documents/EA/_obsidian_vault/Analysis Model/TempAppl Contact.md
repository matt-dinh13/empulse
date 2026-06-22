---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model"
domain: "Analysis Model"
element_id: 1771488
diagrams: 2
connections: 7
tags:
  - class
  - analysis-model
---

# 🔷 TempAppl Contact

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model

## 📝 Notes

Contact information as entered on application form.

## 🔗 Connections (6)

- → Dependency: [[Contact Type (Class 1647754)]]
- → Aggregation: [[{MOD}TempAppl Employment]]
- → Dependency: [[Contact Ownership Type]]
- ← Aggregation: [[TempAppl Contact Verification]]
- → Aggregation: [[{MOD}Temporary Application]]
- → Aggregation: [[TempAppl Person]]

## 📊 Appears In (2 diagrams)

- Logical: Temporary Application - overview
- Logical: Temporary Application - Person and Employment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| BlackBerry | Text |  |
| Facebook | Text |  |
| Friendster | Text |  |
| Google Talk | Text |  |
| LinkedIn | Text |  |
| MSN Messenger | Text |  |
| Ownership Type | Contact Ownership Type |  |
| Skype | Text |  |
| Twitter | Text |  |
| WhatsApp | text |  |
| Yahoo Messenger | Text |  |
| Contact is verified | Boolean |  |
| Contact type priority | Number |  |
| Email |  |  |
| Extension |  |  |
| Fax Number |  |  |
| Note | Text (255) |  |
| Phone Number |  |  |
| Type | Contact Type |  |
| External ID | string |  |
| Read only | Boolean |  |
