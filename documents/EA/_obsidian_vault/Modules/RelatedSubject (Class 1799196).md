---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip"
domain: "Modules"
element_id: 1799196
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 RelatedSubject

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/LDM_Filip

## 📝 Notes

The entity contains information about business object which are related to the Ticket (i.e. Contract, Document, Package,...)

## 🔗 Connections (2)

- → Dependency: [[RelatedSubjectType]]
- → Aggregation: [[Ticket (Class 1799206)]]

## 📊 Appears In (1 diagrams)

- Logical: Part 1

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | Varchar2 (30) |  |
| {ADD_v03}CreationDate | Datetime |  |
| Code | {MOD_CLM241}Varchar2 (30){/MOD} |  |
| ArrangedBy | {MOD_CLM244}Varchar2 (30){/MOD} |  |
| CreatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| ArrangedOnSalesroom | {MOD_CLM244}Varchar2 (18){/MOD} |  |
| {ADD_v03}UpdateDate | Datetime |  |
| Id | Int (18) Unique |  |
| {ADD_v03}UpdatedBy | {MOD_CLM241}Varchar2(30){/MOD} |  |
| TicketId | Int (18) |  |
| {ADD_v03}Version | Int(18) |  |
