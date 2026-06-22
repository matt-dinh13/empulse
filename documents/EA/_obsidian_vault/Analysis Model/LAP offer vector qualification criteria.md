---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model/Interface LAP"
domain: "Analysis Model"
element_id: 1537185
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 LAP offer vector qualification criteria

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model/Interface LAP

## 📝 Notes

This entity simulates part of LAP vector structure defined by Blaze, which contains required qualification criteria for generation of one optional offer.
Names of attributes correspond with the names in vector where fullpath starts *.offers[].qualificationCriteria[].

## 🔗 Connections (1)

- → Aggregation: [[{MOD}LAP Offer vector]]

## 📊 Appears In (1 diagrams)

- Logical: LAP Offer vector - attributes for Optional offer Generation

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| key | string |  |
| val | string |  |
