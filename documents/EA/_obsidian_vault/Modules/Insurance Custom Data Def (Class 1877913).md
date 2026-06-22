---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Logical Data Model"
domain: "Modules"
element_id: 1877913
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Insurance Custom Data Def

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Analytical Model/Insurance Program/Insurance Program management/Logical Data Model

## 📝 Notes

Definition of special custom data field to be collected for given insurance program.

## 🔗 Connections (3)

- → Aggregation: [[Insurance Program (Class 1877910)]]
- → Usage: [[CustomDataTypeDefinition]]
- → Dependency: [[Custom Data Definition (Class 1877920)]]

## 📊 Appears In (1 diagrams)

- Logical: Logical Data Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| {ADD}Code | Text |  |
| {Custom Data Definition Code | Custom Data Definition |  |
| Label | Text |  |
| {ADD}Custom Data Type | CustomDataTypeDefinition |  |
| {ADD}Required | Boolean |  |
| {ADD}Length Min | int |  |
| {ADD}Length Max | int |  |
| {ADD}Value Min | decimal |  |
| {ADD}Value Max | decimal |  |
| {ADD}Invalid Message | Text |  |
