---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service"
domain: "Requirements Model"
element_id: 1845843
diagrams: 2
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Sales Description Assignment

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5137 (PH) Unique identifier for product service

## 📝 Notes

Assignment of Sales description to different entities of product catalog.
Primary key consist of (Entity, Entity code {ADD PCG-4839}{ADD PCG-5137}, Entity Version{/ADD})

## 🔗 Connections (3)

- → Realisation: [[REQ#1 Create a tab in Service detail for managing sales description]]
- → Dependency: [[{MOD}Entity type]]
- → Dependency: [[Sales Description (Class 1845842)]]

## 📊 Appears In (2 diagrams)

- Custom: One Level Requirement Hierarchy
- Logical: Sales Description Structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Entity type | {MOD}Entity type |  |
| Entity code | string |  |
| Sales description code | string |  |
| {ADD}Entity version | int |  |
