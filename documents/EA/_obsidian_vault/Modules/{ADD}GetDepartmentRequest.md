---
type: Class
stereotype: "REST Definition"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19215 (CLM-5330) REST API getDepartmentUsers"
domain: "Modules"
element_id: 1865242
diagrams: 3
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}GetDepartmentRequest

> **Type**: Class · **Stereotype**: «REST Definition»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-19215 (CLM-5330) REST API getDepartmentUsers

## 📝 Notes

Request parameters for department search  (GET /departments)

## 🔗 Connections (1)

- ← Dependency: [[_departments]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-19215 (CLM-5330) REST API getDepartmentUsers
- Logical: listDepartments
- Logical: Request Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| typeCode | string |  |
| myOnly | boolean | FALSE |
| activeOnly | boolean | TRUE |
| initialStatusOnly | boolean |  |
