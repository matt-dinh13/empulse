---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Logical Data Model"
domain: "Analysis Model"
element_id: 1770983
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 Vector configuration

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Logical Data Model

## 📝 Notes

Keeps data used for calculation of some fullpaths

## 🔗 Connections (1)

- → Realisation: [[LOR-2632 Deleting of global parameters related to LAP fullpaths]]

## 📊 Appears In (1 diagrams)

- Logical: Vector configuration

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | varchar2(50) |  |
| Enabled | number(1) | default = 0 |
| Description | varchar2(255) |  |
| Active Flag | number(1 | default=1 |
| Sort Order | number(10) |  |
| History Treshold | number(3) | default=0 |
| SQL STMT | varchar2(4000) |  |
| SQL STMT ATM | varchar2(4000) |  |
| Use STMT Alt | number(1) | default=0 |
