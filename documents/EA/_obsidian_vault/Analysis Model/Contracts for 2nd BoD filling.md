---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822358
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Contracts for 2nd BoD filling

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

## 📝 Notes

Grid will be implicitly ordered by Time to contact ascendingly- the lowest date first (even if it is in the past).

Number of results is defined by Search with unlimited number of results.

Some columns can be hidden (country specific). Current settings:
- POS code: hidden in IN
- Preferred language: hidden in ID, VN

## 🔗 Connections (2)

- → Dependency: [[Search with unlimited number of results]]
- → Dependency: [[Insurance icon rules]]

## 📊 Appears In (1 diagrams)

- Custom: Search for contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contact mode | Preferred contact mode Type |  |
| Count of attempts | Number |  |
| Date to contact | Datetime |  |
| Hours in 2BoD | number |  |
| Client's name | Text |  |
| Contract number | Contract code |  |
| Functional buttons |  |  |
| POS code | Text |  |
| Preferred Language | Language |  |
