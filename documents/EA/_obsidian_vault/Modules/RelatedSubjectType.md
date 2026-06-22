---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799210
diagrams: 1
connections: 1
tags:
  - enumeration
  - modules
---

# 📝 RelatedSubjectType

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

A list of Ticket related business objects

## 🔗 Connections (1)

- ← Dependency: [[RelatedSubject (Class 1799196)]]

## 📊 Appears In (1 diagrams)

- Logical: Part 1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CreationDate | Datetime |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| UpdateDate | Datetime |  |
| UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| Code | Varchar2 (30) Unique |  |
| {ADD_v03}Version | Int (18) |  |
| {ADD_CLM241}Value | Varchar2(255) |  |
