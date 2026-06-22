---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Logical Domain Model"
domain: "Analysis Model"
element_id: 919212
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 SNM Notification Queue

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Logical Domain Model

## 📝 Notes

This class is designed for keeping of notifications about changes of sales network objects in external system. Based on notification BSL requires data from external system to be synchronized into BSL database. 
Notification remains in database after its successful/unsuccessful processing.

## 🔗 Connections (2)

- → Dependency: [[SNM Synchronization Entity Type]]
- → Dependency: [[SNM Synchronization Status Type]]

## 📊 Appears In (1 diagrams)

- Logical: SNM Notification Queue

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ID | int |  |
| Entity type | SNM Synchronization Entity Type |  |
| Entity code | string |  |
| External system | string |  |
| Status | SNM Synchronization Status Type |  |
| Message | string |  |
| Insertion time | datetime |  |
